import { bot } from './botInit';

const replyToMessage = (ctx, messageId, string) =>
  ctx.reply(string, {
    reply_to_message_id: messageId,
  });

bot.on('text', ctx => {
  const messageId = ctx.message.message_id;
  const userName = `${ctx.message.from.first_name} ${
    ctx.message.from.last_name
  }`;

  replyToMessage(ctx, messageId, `Hello, ${userName}!`);
});
