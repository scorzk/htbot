const TelegramBot = require('node-telegram-bot-api')

const TOKEN='81320924854:AAG7AKbpKgi28xGwEpc1IVLJ6lIZJVST0Qg'

const bot = new TelegramBot(TOKEN,{polling: true})

var options = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: 'Кнопка 1', callback_data: 'data1' }],
      [{ text: 'Кнопка 2', callback_data: 'data2' }],
      [{ text: 'Кнопка 3', callback_data: 'text3' }]
    ]
  })
};

bot.onText(/\/start_test/, function (msg, match) {
  bot.sendMessage(msg.chat.id, 'Выберите любую кнопку:', options);
});
bot.on("callback_query", function(data){
    const chatId = msg.id;
    console.log(data);
    // Get the callback data specified
   let callback_data = data.data
   if(callback_data == "data1") {
      bot.sendMessage(msg.chat.id, 'Pravilno');
   }
});
