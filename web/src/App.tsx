import { useEffect, useMemo, useState } from "react";
import "./App.css";
import { funds, fundsLastUpdated, type Fund } from "./data/funds";

type TelegramWebApp = {
  isExpanded?: boolean;
  isFullscreen?: boolean;
  ready: () => void;
  expand: () => void;
  requestFullscreen?: () => void;
};

declare global {
  interface Window {
    Telegram?: { WebApp?: TelegramWebApp };
  }
}

function App() {
  const [connected, setConnected] = useState(false);

  const sortedFunds = useMemo(() => {
    const rank = (fund: Fund) => {
      switch (fund.deadlineType) {
        case "fixed":
          return 0;
        case "relative":
          return 1;
        case "rolling":
          return 2;
        case "tba":
          return 3;
        default:
          return 4;
      }
    };
    return [...funds].sort((a, b) => {
      const rankDiff = rank(a) - rank(b);
      if (rankDiff !== 0) return rankDiff;
      const aTime = a.deadlineISO
        ? Date.parse(a.deadlineISO)
        : Number.POSITIVE_INFINITY;
      const bTime = b.deadlineISO
        ? Date.parse(b.deadlineISO)
        : Number.POSITIVE_INFINITY;
      if (aTime !== bTime) return aTime - bTime;
      return a.name.localeCompare(b.name);
    });
  }, []);

  const summary = useMemo(() => {
    const now = Date.now();
    const nextFixed = sortedFunds.find(
      (fund) =>
        fund.deadlineType === "fixed" &&
        fund.deadlineISO &&
        Date.parse(fund.deadlineISO) >= now
    );
    const rollingCount = funds.filter(
      (fund) => fund.deadlineType === "rolling"
    ).length;
    const relativeCount = funds.filter(
      (fund) => fund.deadlineType === "relative"
    ).length;
    const tbaCount = funds.filter((fund) => fund.deadlineType === "tba").length;

    return {
      total: funds.length,
      nextDeadline: nextFixed
        ? `${nextFixed.deadlineText} • ${nextFixed.name}`
        : "No upcoming fixed deadlines",
      rollingCount,
      relativeCount,
      tbaCount,
    };
  }, [sortedFunds]);

  useEffect(() => {
    let attempts = 0;
    const maxAttempts = 60;
    const intervalMs = 50;
    let expandInterval: number | undefined;

    const startExpandLoop = (tg: TelegramWebApp) => {
      let expandAttempts = 0;
      const maxExpandAttempts = 40;
      expandInterval = window.setInterval(() => {
        expandAttempts += 1;
        if (tg.isFullscreen || tg.isExpanded) {
          window.clearInterval(expandInterval);
          return;
        }
        if (expandAttempts === 1 && typeof tg.requestFullscreen === "function") {
          try {
            tg.requestFullscreen();
          } catch {
            // Ignore fullscreen failures and keep trying expand.
          }
        }
        tg.expand();
        if (expandAttempts >= maxExpandAttempts) {
          window.clearInterval(expandInterval);
        }
      }, 100);
    };

    const tryInit = () => {
      const tg = window.Telegram?.WebApp ?? null;
      if (!tg) return false;

      tg.ready();
      tg.expand();
      setConnected(true);
      startExpandLoop(tg);
      return true;
    };

    if (tryInit()) return;

    const interval = window.setInterval(() => {
      attempts += 1;
      if (tryInit() || attempts >= maxAttempts) {
        window.clearInterval(interval);
      }
    }, intervalMs);

    return () => {
      window.clearInterval(interval);
      if (expandInterval) window.clearInterval(expandInterval);
    };
  }, []);

  return (
    <div className="app">
      <header className="hero">
        <div>
          <p className="eyebrow">Clay Grants Europe</p>
          <h1>Funding and Residencies for Ceramic Artists</h1>
          <p className="subtitle">
            Europe-wide opportunities that Copenhagen-based ceramicists can
            apply for, ranked by upcoming deadlines.
          </p>
        </div>
        <div className="status-card">
          <div className="status-row">
            <span>Coverage</span>
            <strong>Europe + Nordic/Baltic + Denmark</strong>
          </div>
          <div className="status-row">
            <span>Total opportunities</span>
            <strong>{summary.total}</strong>
          </div>
          <div className="status-row">
            <span>Next deadline</span>
            <strong>{summary.nextDeadline}</strong>
          </div>
          <div className="status-row">
            <span>Rolling / Variable / TBA</span>
            <strong>
              {summary.rollingCount} / {summary.relativeCount} /{" "}
              {summary.tbaCount}
            </strong>
          </div>
          <div className="status-row">
            <span>Mode</span>
            <strong>{connected ? "Telegram Mini App" : "Browser Preview"}</strong>
          </div>
        </div>
      </header>

      <section className="card">
        <div className="card-header">
          <div>
            <h2>European Arts Funds for Ceramic Artists</h2>
            <p>
              Ranked by upcoming deadline. Includes EU-wide programs, Nordic/Baltic
              funding, Denmark, and Europe-based ceramic residencies open to
              Copenhagen-based artists.
            </p>
          </div>
          <div className="meta">
            Last verified: {fundsLastUpdated}
          </div>
        </div>
        <div className="funds">
          {sortedFunds.map((fund) => (
            <article className="fund-card" key={fund.id}>
              <div className="fund-title">
                <div>
                  <h3>{fund.name}</h3>
                  <p>{fund.provider}</p>
                </div>
                <div className="deadline">
                  <span className="deadline-label">Deadline</span>
                  <strong>{fund.deadlineText}</strong>
                </div>
              </div>
              <div className="fund-meta">
                <span>{fund.location}</span>
                <span>{fund.eligibility}</span>
              </div>
              {fund.notes && <div className="fund-notes">{fund.notes}</div>}
              <div className="fund-tags">
                {fund.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="fund-actions">
                <a className="button ghost" href={fund.infoUrl} target="_blank" rel="noreferrer">
                  Details
                </a>
                <a className="button" href={fund.portalUrl} target="_blank" rel="noreferrer">
                  Apply
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
