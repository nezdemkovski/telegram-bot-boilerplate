# Telegram Bot Boilerplate

Telegram bot boilerplate built with [Bun](https://bun.sh), TypeScript, and [grammY](https://grammy.dev).

## Requirements

- Bun 1+

## Getting started

Rename `.env-sample` to `.env` and fill in your values:

```
BOT_TOKEN="<YOUR_BOT_API_TOKEN>"
USERNAME="<YOUR_BOT_USERNAME>"
WEBHOOK_URL="<THE_URL_OF_YOUR_WEBHOOK>"
PORT="3000"
NODE_ENV="development"
```

Install dependencies and start the dev server:

```
bun install
bun dev
```

## Scripts

| Script | Description |
|---|---|
| `bun dev` | Run in development mode with file watching |
| `bun run build` | Bundle to `dist/` |
| `bun start` | Run the bundled bot in production mode |
| `bun run typecheck` | Run TypeScript type checking |
| `bun run lint` | Run ESLint |
| `bun run format` | Format source files with Prettier |

## Project structure

```
src/
├── index.ts          # Entry point — bot setup, polling/webhook
├── commands/
│   └── about/        # /about command
└── text/
    └── greeting/     # Text message handler
```

Pull requests are welcome.
