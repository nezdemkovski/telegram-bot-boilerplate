import Telegraf from 'telegraf';

const BOT_TOKEN = process.env.BOT_TOKEN;
const URL = process.env.WEBHOOK_URL;
const PORT = process.env.PORT || 3000;

const bot = new Telegraf(BOT_TOKEN, {
  telegram: {
    webhookReply: true,
    webhookCallback: `${URL}/bot${BOT_TOKEN}`,
  },
});

bot.startWebhook(`/bot${BOT_TOKEN}`, null, PORT);

export { bot };
