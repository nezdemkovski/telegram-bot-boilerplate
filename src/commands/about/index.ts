import type { Context } from 'grammy';

import { author, homepage, name, version } from '../../../package.json';

const log = (msg: string) => console.log(`[bot:about] ${msg}`);

const about = () => (ctx: Context) => {
  const message = `*${name} ${version}*\n${author}\n${homepage}`;
  log('Triggered "about" command');
  return ctx.reply(message, { parse_mode: 'Markdown' });
};

export default about;
