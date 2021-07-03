import { Context } from 'telegraf';
import createDebug from 'debug';

import { author, homepage, name, version } from '../../../package.json';

const debug = createDebug('bot:about_command');

const about = () => (ctx: Context) => {
  const message = `*${name} ${version}*\n${author}\n${homepage}`;
  debug(`Triggered "about" command with message \n${message}`);

  return ctx.replyWithMarkdown(message);
};

export default about;
