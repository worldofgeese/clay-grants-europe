import cors from "cors";
import express from "express";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { validateInitData } from "./telegram.js";

type AppOptions = {
  botToken: string;
  maxAgeSeconds?: number;
  now?: number;
};

export function buildValidateResponse(
  initData: unknown,
  { botToken, maxAgeSeconds, now }: AppOptions
) {
  if (!initData || typeof initData !== "string") {
    return { status: 400, body: { ok: false, error: "missing_init_data" } };
  }

  const result = validateInitData(initData, botToken, {
    maxAgeSeconds,
    now,
  });

  if (!result.ok) {
    return { status: 401, body: { ok: false, error: result.reason } };
  }

  return {
    status: 200,
    body: {
      ok: true,
      user: result.user,
      auth_date: result.authDate,
    },
  };
}

export function createApp({ botToken, maxAgeSeconds, now }: AppOptions) {
  const app = express();
  const appDir = path.dirname(fileURLToPath(import.meta.url));
  const distPath = path.resolve(appDir, "../../web/dist");

  app.use(cors());
  app.use(express.json());

  app.get("/health", (_req, res) => {
    res.json({ ok: true });
  });

  app.post("/api/validate", (req, res) => {
    const response = buildValidateResponse(req.body?.initData, {
      botToken,
      maxAgeSeconds,
      now,
    });
    return res.status(response.status).json(response.body);
  });

  if (fs.existsSync(distPath)) {
    app.use(express.static(distPath));
    app.get(/.*/, (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  return app;
}
