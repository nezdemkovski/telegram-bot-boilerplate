import { Bot } from 'grammy';

import { about } from './commands';
import { greeting } from './text';

const BOT_TOKEN = process.env.BOT_TOKEN;
if (!BOT_TOKEN) throw new Error('BOT_TOKEN is not set. Check your .env file.');

const ENVIRONMENT = process.env.NODE_ENV ?? 'development';
const USERNAME = process.env.USERNAME ?? '';
const PORT = Number(process.env.PORT) || 3000;
const WEBHOOK_URL = process.env.WEBHOOK_URL ?? '';

const bot = new Bot(BOT_TOKEN);
const log = (msg: string) => console.log(`[bot] ${msg}`);

bot.command('about', about());
bot.on('message:text', greeting());

const production = async () => {
  const webhookUrl = `${WEBHOOK_URL}/bot${BOT_TOKEN}`;
  log(`@${USERNAME} setting webhook: ${webhookUrl}`);
  await bot.api.setWebhook(webhookUrl);
  log(`@${USERNAME} webhook set, listening on port ${PORT}`);
};

const development = async () => {
  await bot.api.deleteWebhook();
  log(`@${USERNAME} starting polling`);
  bot.start();
};

if (ENVIRONMENT === 'production') {
  production();
} else {
  development();
}

process.once('SIGINT', () => bot.stop());
process.once('SIGTERM', () => bot.stop());
