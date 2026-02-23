import type { Context } from 'grammy';

const log = (msg: string) => console.log(`[bot:greeting] ${msg}`);

const replyToMessage = (ctx: Context, messageId: number, text: string) =>
  ctx.reply(text, { reply_parameters: { message_id: messageId } });

const greeting = () => (ctx: Context) => {
  log('Triggered "greeting" text handler');
  const messageId = ctx.message?.message_id;
  const firstName = ctx.message?.from.first_name ?? '';
  const lastName = ctx.message?.from.last_name ?? '';
  if (messageId) {
    replyToMessage(ctx, messageId, `Hello, ${firstName} ${lastName}!`);
  }
};

export default greeting;
