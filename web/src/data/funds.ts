export type DeadlineType = "fixed" | "relative" | "rolling" | "tba";

export type Fund = {
  id: string;
  name: string;
  provider: string;
  deadlineType: DeadlineType;
  deadlineISO?: string;
  deadlineText: string;
  location: string;
  eligibility: string;
  tags: string[];
  portalUrl: string;
  infoUrl: string;
  notes?: string;
};

export const fundsLastUpdated = "2026-03-17";

export const funds: Fund[] = [
  {
    id: "culture-moves-europe-individual-mobility-2026-03-31",
    name: "Culture Moves Europe – Individual Mobility",
    provider: "European Commission / Goethe-Institut",
    deadlineType: "fixed",
    deadlineISO: "2026-03-31",
    deadlineText: "31 Mar 2026 (monthly rolling deadline)",
    location: "Europe-wide (Creative Europe countries)",
    eligibility:
      "Artists and cultural professionals legally resident in Creative Europe countries with a partner in another Creative Europe country.",
    tags: ["grant", "mobility", "europe-wide", "ceramics", "visual-arts"],
    portalUrl: "https://gap-online.goethe.de",
    infoUrl:
      "https://culture.ec.europa.eu/calls/call-for-individual-mobility-of-artists-and-cultural-professionals",
    notes: "Rolling monthly deadlines through 30 Apr 2026.",
  },
  {
    id: "nordic-culture-point-mobility-2026-03-31",
    name: "Mobility Funding (Nordic-Baltic Mobility Programme for Culture)",
    provider: "Nordic Culture Point",
    deadlineType: "fixed",
    deadlineISO: "2026-03-31T15:59:00+02:00",
    deadlineText: "31 Mar 2026, 15:59 (UTC+2)",
    location: "Nordic + Baltic region",
    eligibility:
      "Individual professional artists/cultural practitioners resident in the Nordic or Baltic countries.",
    tags: ["grant", "mobility", "nordic", "baltic", "ceramics"],
    portalUrl: "https://www.nkk.org/en/mobility-funding/",
    infoUrl: "https://www.nkk.org/en/mobility-funding/",
    notes: "Next application period: 18 Aug–18 Sep 2026, 15:59 (UTC+2).",
  },
  {
    id: "ncp-culture-art-programme-2026-09-10",
    name: "Culture and Art Programme",
    provider: "Nordic Culture Point",
    deadlineType: "fixed",
    deadlineISO: "2026-09-10T15:59:00+02:00",
    deadlineText: "10 Sep 2026, 15:59 (UTC+2)",
    location: "Nordic + Baltic region",
    eligibility:
      "Projects with partners in at least three Nordic/Baltic countries; open to all art forms.",
    tags: ["grant", "collaboration", "nordic", "baltic", "ceramics"],
    portalUrl: "https://www.nkk.org/en/culture-and-art-programme/",
    infoUrl: "https://www.nkk.org/en/culture-and-art-programme/",
    notes: "First 2026 round: 2 Mar 2026, 15:59 (UTC+2).",
  },
  {
    id: "sk-craft-design-projects-2026-03-18",
    name: "Kunsthåndværk- og designprojekter i Danmark og udlandet",
    provider: "Statens Kunstfond",
    deadlineType: "fixed",
    deadlineISO: "2026-03-18T14:00:00+01:00",
    deadlineText: "18 Mar 2026, 14:00",
    location: "Denmark + international",
    eligibility:
      "Projects advancing Danish craft/design in Denmark or abroad; includes residencies and exchanges.",
    tags: ["grant", "project", "craft/design", "ceramics"],
    portalUrl: "https://portal.slks.dk",
    infoUrl:
      "https://www.kunst.dk/for-ansoegere/soeg-tilskud/kunsthaandvaerk-og-designprojekter-i-danmark-og-udlandet",
    notes: "Second 2026 deadline: 9 Sep 2026, 14:00.",
  },
  {
    id: "sk-vaerkproduktion-2026-03-26",
    name: "Værkproduktion og udstillinger",
    provider: "Statens Kunstfond",
    deadlineType: "fixed",
    deadlineISO: "2026-03-26T14:00:00+01:00",
    deadlineText: "26 Mar 2026, 14:00",
    location: "Denmark + international",
    eligibility:
      "Contemporary visual art production, exhibition, and mediation in Denmark or abroad.",
    tags: ["grant", "production", "exhibition", "visual-art", "ceramics"],
    portalUrl: "https://portal.slks.dk",
    infoUrl:
      "https://www.kunst.dk/for-ansoegere/soeg-tilskud/vaerkproduktion-og-udstillinger",
    notes: "Second 2026 deadline: 24 Sep 2026, 14:00.",
  },
  {
    id: "sk-residencies-abroad-2026-03-26",
    name: "Ophold på udenlandske residencies",
    provider: "Statens Kunstfond",
    deadlineType: "fixed",
    deadlineISO: "2026-03-26T14:00:00+01:00",
    deadlineText: "26 Mar 2026, 14:00",
    location: "International",
    eligibility:
      "Danish visual artists/curators applying for professional residencies (1–6 months).",
    tags: ["residency", "grant", "visual-art", "ceramics"],
    portalUrl: "https://portal.slks.dk",
    infoUrl:
      "https://www.kunst.dk/for-ansoegere/soeg-tilskud/ophold-paa-udenlandske-residencies",
    notes: "Second 2026 deadline: 24 Sep 2026, 14:00.",
  },
  {
    id: "guldagergaard-air-grant-2026-04-15",
    name: "AIR Grant (1‑month funded residency)",
    provider: "Guldagergaard",
    deadlineType: "fixed",
    deadlineISO: "2026-04-15",
    deadlineText: "15 Apr 2026",
    location: "Skælskør (Denmark)",
    eligibility: "Ceramic artists; 5 grants reserved for Danish citizens.",
    tags: ["residency", "grant", "ceramics"],
    portalUrl: "https://ceramic.dk/residencies/air-grant/",
    infoUrl: "https://ceramic.dk/residencies/air-grant/",
    notes: "Second annual deadline was 19 Dec 2025.",
  },
  {
    id: "arroscia-residency-2026-04-07",
    name: "Arroscia Residency",
    provider: "HARP (Italy)",
    deadlineType: "fixed",
    deadlineISO: "2026-04-07T23:59:00+02:00",
    deadlineText: "7 Apr 2026",
    location: "Arroscia Valley, Italy",
    eligibility: "International artists (all disciplines) with project proposals.",
    tags: ["residency", "europe", "ceramics"],
    portalUrl: "https://arrosciaresidency.org/application/",
    infoUrl: "https://arrosciaresidency.org/application/",
  },
  {
    id: "kk-arrangementspulje-2026-05-01",
    name: "Arrangementspulje (public events in Copenhagen)",
    provider: "Københavns Kommune",
    deadlineType: "fixed",
    deadlineISO: "2026-05-01",
    deadlineText: "1 May 2026",
    location: "Copenhagen",
    eligibility: "Organisers of publicly accessible events in Copenhagen.",
    tags: ["event", "logistics", "exhibition", "ceramics", "copenhagen"],
    portalUrl:
      "https://www.kk.dk/brug-byen/kultur-og-projektstoette/arrangementspulje",
    infoUrl:
      "https://www.kk.dk/brug-byen/kultur-og-projektstoette/arrangementspulje",
    notes: "Covers practical expenses for events in Copenhagen.",
  },
  {
    id: "svfk-ophold-2026-05-04",
    name: "Residency at Statens Værksteder for Kunst (SVFK)",
    provider: "Statens Værksteder for Kunst (SVFK)",
    deadlineType: "fixed",
    deadlineISO: "2026-05-04T23:59:00+02:00",
    deadlineText: "4 May 2026, 24:00",
    location: "Copenhagen",
    eligibility:
      "Professional artists/craftspeople; non-Danish applicants need a Denmark-based exhibition or activity.",
    tags: ["residency", "workshop", "craft/design", "ceramics"],
    portalUrl: "https://svfk.dk/en/apply-for-residency",
    infoUrl: "https://svfk.dk/en/apply-for-residency",
    notes: "Deadlines four times yearly (Feb/May/Aug/Nov).",
  },
  {
    id: "nationalbanken-jubilaeumsfond-2026-05-04",
    name: "Nationalbankens Jubilæumsfond (craft/design/architecture)",
    provider: "Nationalbankens Jubilæumsfond",
    deadlineType: "fixed",
    deadlineISO: "2026-05-04",
    deadlineText: "4 May 2026",
    location: "Denmark",
    eligibility:
      "Individuals and organizations in architecture, craft, and design.",
    tags: ["grant", "craft/design", "ceramics", "denmark"],
    portalUrl: "https://nbjf.dk/ansoegning/",
    infoUrl: "https://nbjf.dk/ansoegning/",
    notes: "Other 2026 deadlines: 7 Sep 2026 and 19 Jan 2026.",
  },
  {
    id: "guldagergaard-project-network-2026-06-01",
    name: "Project Network (6‑week talent residency)",
    provider: "Guldagergaard",
    deadlineType: "fixed",
    deadlineISO: "2026-06-01",
    deadlineText: "1 Jun (annual)",
    location: "Skælskør (Denmark)",
    eligibility:
      "New generation of ceramic artists; fee-based program with application.",
    tags: ["residency", "ceramics", "early-career"],
    portalUrl: "https://ceramic.dk/residencies/project-network/",
    infoUrl: "https://ceramic.dk/residencies/project-network/",
  },
  {
    id: "nordic-culture-fund-project-funding-2026-09-04",
    name: "Project Funding (Nordic Culture Fund)",
    provider: "Nordic Culture Fund",
    deadlineType: "fixed",
    deadlineISO: "2026-09-04T23:59:00+02:00",
    deadlineText: "4 Sep 2026, 23:59 (CET)",
    location: "Nordic region",
    eligibility:
      "Artists/organisations (incl. outside Nordics) with a Nordic collaboration and co-financing.",
    tags: ["grant", "collaboration", "nordic", "ceramics"],
    portalUrl: "https://mypage.nordiskkulturfond.org",
    infoUrl:
      "https://nordiskkulturfond.org/en/funding-programmes/project-funding-for-collaborations-across-the-nordic-region",
    notes: "Earlier 2026 deadline: 13 Feb 2026, 23:59 (CET).",
  },
  {
    id: "sk-huskunstner-2026-10-01",
    name: "Huskunstnerordningen (partnered with an institution)",
    provider: "Statens Kunstfond",
    deadlineType: "fixed",
    deadlineISO: "2026-10-01T14:00:00+02:00",
    deadlineText: "1 Oct 2026, 14:00",
    location: "Denmark + international partner institutions",
    eligibility:
      "Professional artists partnered with schools/educational institutions (incl. craft/design).",
    tags: ["honorarium", "education", "craft/design", "ceramics"],
    portalUrl: "https://portal.slks.dk",
    infoUrl:
      "https://www.kunst.dk/for-ansoegere/soeg-tilskud/huskunstnerordningen",
    notes: "Other 2026 deadline: 3 Mar 2026.",
  },
  {
    id: "sk-arbejdslegater-craft-design-tba",
    name: "Arbejdslegater for Kunsthåndværk og Design",
    provider: "Statens Kunstfond",
    deadlineType: "tba",
    deadlineText: "Next deadline TBA (last: 4 Feb 2026, 14:00)",
    location: "Denmark",
    eligibility: "Individual craft/design artists.",
    tags: ["grant", "work-stipend", "craft/design", "ceramics"],
    portalUrl: "https://portal.slks.dk",
    infoUrl: "https://bkf.dk/soeg-arbejdslegat-hos-statens-kunstfond/",
  },
  {
    id: "ncp-artist-residencies-tba",
    name: "Funding for Artist Residencies (Nordic Culture Point)",
    provider: "Nordic Culture Point",
    deadlineType: "tba",
    deadlineText: "Dates published annually in November",
    location: "Nordic + Baltic region",
    eligibility:
      "Residency centres/organisations in Nordic/Baltic countries invite artists from other Nordic/Baltic countries.",
    tags: ["residency", "nordic", "baltic", "ceramics"],
    portalUrl: "https://www.nkk.org/en/funding-for-artist-residencies/",
    infoUrl: "https://www.nkk.org/en/funding-for-artist-residencies/",
  },
  {
    id: "guldagergaard-air-rolling",
    name: "Artist-in-Residence (self-funded)",
    provider: "Guldagergaard",
    deadlineType: "rolling",
    deadlineText: "Rolling (apply year‑round)",
    location: "Skælskør (Denmark)",
    eligibility: "Professional ceramic artists worldwide.",
    tags: ["residency", "ceramics"],
    portalUrl:
      "https://ceramic.dk/residencies/artist-in-residence/apply-artist-in-residence/",
    infoUrl:
      "https://ceramic.dk/residencies/artist-in-residence/apply-artist-in-residence/",
  },
  {
    id: "kk-snabslanten",
    name: "Snabslanten (youth culture micro‑grants)",
    provider: "Københavns Kommune",
    deadlineType: "rolling",
    deadlineText: "Rolling (apply at least 14 days before project)",
    location: "Copenhagen",
    eligibility:
      "Ages 13–30, Copenhagen residents, budgets under 30,000 DKK.",
    tags: ["micro-grant", "youth", "events", "ceramics", "copenhagen"],
    portalUrl: "https://snabslanten.kk.dk/ansoegning",
    infoUrl: "https://snabslanten.kk.dk/retningslinjer",
  },
  {
    id: "kk-raadet-for-visuel-kunst",
    name: "Rådet for Visuel Kunst (exhibition/project support)",
    provider: "Københavns Kommune",
    deadlineType: "relative",
    deadlineText: "60 days before opening + 3 weeks before council meeting",
    location: "Copenhagen",
    eligibility: "Projects/exhibitions in Copenhagen with public access.",
    tags: ["exhibition", "project", "visual-art", "ceramics", "copenhagen"],
    portalUrl:
      "https://www.kk.dk/brug-byen/kultur-og-projektstoette/billedkunst/stoette-til-billedkunst/stoette-til-billedkunst",
    infoUrl:
      "https://www.kk.dk/brug-byen/kultur-og-projektstoette/billedkunst/stoette-til-billedkunst/stoette-til-billedkunst",
  },
  {
    id: "kk-lokaludvalg-puljer",
    name: "Lokaludvalg puljer (district project funds)",
    provider: "Københavns Kommune (district committees)",
    deadlineType: "relative",
    deadlineText: "Varies by district (see local district pages)",
    location: "Copenhagen (district-specific)",
    eligibility: "Local residents/groups; varies by district.",
    tags: ["local", "events", "exhibition", "ceramics", "copenhagen"],
    portalUrl: "https://lokaludvalg.kk.dk/",
    infoUrl: "https://lokaludvalg.kk.dk/",
  },
  {
    id: "ekwc-residency-tba",
    name: "EKWC – European Ceramic Work Centre Residency",
    provider: "EKWC (Netherlands)",
    deadlineType: "tba",
    deadlineText: "Check current application window",
    location: "Oisterwijk, Netherlands",
    eligibility: "Creative professionals exploring ceramics.",
    tags: ["residency", "ceramics", "europe"],
    portalUrl: "https://ekwc.nl/en/apply/",
    infoUrl: "https://ekwc.nl/en/apply/",
  },
  {
    id: "taller-gingell-residency-rolling",
    name: "International Ceramics Residency Program",
    provider: "Taller Gingell Barcelona",
    deadlineType: "rolling",
    deadlineText: "Rolling (based on availability)",
    location: "Barcelona, Spain",
    eligibility:
      "Ceramic artists with demonstrated skill; acceptance based on availability.",
    tags: ["residency", "ceramics", "europe"],
    portalUrl:
      "https://tallergingell.com/pages/international-ceramics-resident-program",
    infoUrl:
      "https://tallergingell.com/pages/international-ceramics-resident-program",
  },
  {
    id: "keramikkuenstlerhaus-neumuenster-tba",
    name: "Keramikkünstlerhaus Neumünster – Ceramic Artist Exchange",
    provider: "Keramikkünstlerhaus Neumünster",
    deadlineType: "tba",
    deadlineText: "Next deadline TBA (last: 9 Nov 2025)",
    location: "Neumünster, Germany",
    eligibility:
      "Contemporary ceramic artists willing to collaborate in a shared residency.",
    tags: ["residency", "ceramics", "europe"],
    portalUrl: "https://keramikkuenstlerhaus.de/en/call-2026-2/",
    infoUrl: "https://keramikkuenstlerhaus.de/en/call-2026-2/",
  },
  {
    id: "hpm-residency-5-0-tba",
    name: "Residency 5.0 – Exploring Porcelain (HPM/HfG Offenbach)",
    provider: "HfG Offenbach / Höchster Porzellan-Manufaktur",
    deadlineType: "tba",
    deadlineText: "Next deadline TBA (last: 5 Jan 2026)",
    location: "Frankfurt Höchst, Germany",
    eligibility:
      "International artists/designers with experience in ceramics/porcelain.",
    tags: ["residency", "porcelain", "ceramics", "europe"],
    portalUrl:
      "https://www.igbk.de/components/com_rsform/uploads/ausschreibung/692dadb015576-APPLICATION_HPM%20RESIDENCY%205.0%20exploring%20porcelain.pdf",
    infoUrl:
      "https://www.igbk.de/components/com_rsform/uploads/ausschreibung/692dadb015576-APPLICATION_HPM%20RESIDENCY%205.0%20exploring%20porcelain.pdf",
  },
  {
    id: "creta-rome-residency-rolling",
    name: "C.R.E.T.A. Rome – Ceramic Residency",
    provider: "C.R.E.T.A. Rome",
    deadlineType: "rolling",
    deadlineText: "Rolling (limited 2026 spots; 2027 deadline 1 Sep 2026)",
    location: "Rome, Italy",
    eligibility:
      "Ceramic artists and designers; applications accepted for upcoming sessions.",
    tags: ["residency", "ceramics", "europe"],
    portalUrl: "https://www.cretarome.com/application",
    infoUrl: "https://www.cretarome.com/schedule",
  },
  {
    id: "argilla-italia-2026-call",
    name: "Argillà Italia 2026 – Call for Ceramists",
    provider: "Argillà Italia",
    deadlineType: "tba",
    deadlineText: "Deadline listed in application form (TBA here)",
    location: "Faenza, Italy",
    eligibility: "Ceramic artists applying for exhibition space.",
    tags: ["exhibition", "ceramics", "europe"],
    portalUrl: "https://argilla-italia.it/en/2026-2/call-for-ceramists/",
    infoUrl: "https://argilla-italia.it/en/2026-2/call-for-ceramists/",
  },
];

const rankDeadlineType = (fund: Fund) => {
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

export const sortedFunds = [...funds].sort((a, b) => {
  const rankDiff = rankDeadlineType(a) - rankDeadlineType(b);
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

export const fundStats = {
  total: funds.length,
  rollingCount: funds.filter((fund) => fund.deadlineType === "rolling").length,
  relativeCount: funds.filter((fund) => fund.deadlineType === "relative").length,
  tbaCount: funds.filter((fund) => fund.deadlineType === "tba").length,
};
