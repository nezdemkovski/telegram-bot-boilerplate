Telegram Bot Boilerplate
======================

Telegram Bot Boilerplate based on Node.js and [Telegraf](https://github.com/telegraf/telegraf) framework. ES6/ES7 used. Easy deployment to [Zeit Now](https://zeit.co/now).

## Before you start
First rename `.env-sample` file to `.env` and fill in all necessary values.
```
PORT="<PORT>"
BOT_TOKEN="<YOUR_BOT_API_TOKEN>"
WEBHOOK_URL="<THE_URL_OF_YOUR_WEBHOOK>"
```

## Start your server
```
yarn install
yarn dev
```
To set a webhook on local environment first `npm install -g localtunnel` and then `lt --subdomain telegrambot --port 3000`.

## Deploy to Now
The hardest part.
```
yarn deploy
```

Pull Requests are welcomed :)
