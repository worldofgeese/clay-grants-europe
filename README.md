# Clay Grants Europe — Telegram Mini App

Telegram Mini App that lists Europe-wide funding and residency opportunities for
ceramic artists based in Copenhagen, ranked by upcoming deadlines.

## Architecture

- `web/`: React UI built with Vite 8 via the Vite+ toolchain.
- `server/`: Node/Express + Telegraf bot API that validates `initData` and serves `web/dist`.

## Prereqs

- Node.js 20.19+ or 22.12+
- A Telegram bot token
- An HTTPS tunnel URL (Tunnelmole or similar)

## Setup

### 1) Server (bot + API)

```bash
cd server
npm install
```

Create `.env`:

```bash
BOT_TOKEN=123456:ABCDEF
WEBAPP_URL=https://your-tunnel-url
BOT_USERNAME=YourBotUsername
PORT=8787
MAX_AUTH_AGE_SECONDS=86400
```

Start the server:

```bash
npm run dev
```

### 2) Web app

```bash
cd web
npm install
npm run build
```

The server serves the built web assets from `web/dist`. Re-run `npm run build`
after changes, or use `vp dev` for a local browser-only preview.

### 3) Telegram configuration

Use BotFather to configure the Mini App URL to your HTTPS tunnel URL. Once set,
open the bot and press the “Open Mini App (fullscreen)” button.

### 4) Production mode (optional)

```bash
cd server
npm run build
npm run start
```

## Container

Build the container image from the repository root:

```bash
podman build -f Containerfile -t clay-grants-bot:local .
```
