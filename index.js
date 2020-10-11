const TelegramBot = require('node-telegram-bot-api')

const TOKEN='1320924854:AAG7AKbpKgi28xGwEpc1IVLJ6lIZJVST0Qg'

const bot = new TelegramBot(TOKEN,{polling: true})

var options = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: 'Кнопка 1', callback_data: '1' }],
      [{ text: 'Кнопка 2', callback_data: 'data 2' }],
      [{ text: 'Кнопка 3', callback_data: 'text 3' }]
    ]
  })
};

bot.onText(/\/start_test/, function (msg, match) {
  bot.sendMessage(msg.chat.id, 'Выберите любую кнопку:', options);
});
