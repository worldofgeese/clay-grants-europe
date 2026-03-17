import { Telegraf, Markup } from "telegraf";
import { createApp } from "./app.js";
import { config } from "./config.js";

const app = createApp({
  botToken: config.botToken,
  maxAgeSeconds: config.maxAuthAgeSeconds,
});

app.listen(config.port, () => {
  console.log(`API listening on http://localhost:${config.port}`);
});

const bot = new Telegraf(config.botToken);

const buildMainAppUrl = (username?: string) => {
  if (!username) return null;
  const clean = username.replace(/^@/, "").trim();
  if (!clean) return null;
  return `https://t.me/${clean}?startapp=launch&mode=fullscreen`;
};

bot.start((ctx) => {
  const mainAppUrl = buildMainAppUrl(config.botUsername ?? ctx.me);
  if (mainAppUrl) {
    const rows = [[Markup.button.url("Open Mini App (fullscreen)", mainAppUrl)]];
    const message = `Open the mini app to continue.\n\nIf the fullscreen button does nothing, tap this link: ${mainAppUrl}`;
    return ctx.reply(message, Markup.inlineKeyboard(rows));
  }

  return ctx.reply("Open the mini app to continue.");
});

bot.on("web_app_data", (ctx) => {
  const payload = ctx.webAppData?.data ?? "";
  return ctx.reply(`Got data from mini app: ${payload}`);
});

bot.launch().then(() => {
  console.log("Bot is running.");
});

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
