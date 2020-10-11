const TelegramBot = require('node-telegram-bot-api')

const TOKEN='1320924854:AAG7AKbpKgi28xGwEpc1IVLJ6lIZJVST0Qg'

const bot = new TelegramBot(TOKEN,{polling: true})

bot.onText(/\/start/, (msg) => {
    
bot.sendMessage(msg.chat.id, "Welcome", {
"reply_markup": {
resize_keyboard: true,
            one_time_keyboard: true,
    "keyboard": [["Sample text", "Second sample"],   ["Keyboard"], ["I'm robot"]]
    }
});
    
});
