import Telegraf from 'telegraf';

import { about } from './commands';
import { greeting } from './text';

const debug = require('debug')('bot');

const BOT_TOKEN = process.env.BOT_TOKEN || '';
const USERNAME = process.env.USERNAME || '';
const PORT = (process.env.PORT && parseInt(process.env.PORT, 10)) || 3000;
const WEBHOOK_URL = `${process.env.WEBHOOK_URL}/bot${BOT_TOKEN}`;

const bot = new Telegraf(BOT_TOKEN, { username: USERNAME });

bot.command('about', about()).on('text', greeting());

const production = () => {
  debug('Bot runs in production mode');
  debug(`${USERNAME} setting webhook: ${WEBHOOK_URL}`);
  bot.telegram.setWebhook(WEBHOOK_URL);
  debug(`${USERNAME} starting webhook on port: ${PORT}`);
  bot.startWebhook(`/bot${BOT_TOKEN}`, null, PORT);
};

const development = () => {
  debug('Bot runs in development mode');
  debug(`${USERNAME} deleting webhook`);
  bot.telegram.deleteWebhook();
  debug(`${USERNAME} starting polling`);
  bot.startPolling();
};

process.env.NODE_ENV === 'production' ? production() : development();
