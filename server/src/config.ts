import dotenv from "dotenv";

dotenv.config();

const botToken = process.env.BOT_TOKEN;
if (!botToken) {
  throw new Error("BOT_TOKEN is required in the server environment.");
}

const webAppUrl = process.env.WEBAPP_URL;
if (!webAppUrl) {
  throw new Error("WEBAPP_URL is required in the server environment.");
}

const botUsernameRaw = process.env.BOT_USERNAME ?? "";
const botUsername = botUsernameRaw.replace(/^@/, "").trim();

const port = Number(process.env.PORT ?? "8787");
const maxAuthAgeSeconds = Number(process.env.MAX_AUTH_AGE_SECONDS ?? "86400");

export const config = {
  botToken,
  webAppUrl,
  botUsername: botUsername.length > 0 ? botUsername : undefined,
  port: Number.isFinite(port) ? port : 8787,
  maxAuthAgeSeconds: Number.isFinite(maxAuthAgeSeconds)
    ? maxAuthAgeSeconds
    : 86400,
};
