const TelegramBot = require('node-telegram-bot-api')

const TOKEN='1320924854:AAG7AKbpKgi28xGwEpc1IVLJ6lIZJVST0Qg'

conts bot = new TelegramBot(TOKEN,{polling: true})

bot.on('message',msg=>{
    bot.sendMessage(msg.chat.id,`Hello "Hi, ${msg.from.first_name}"`)
})
