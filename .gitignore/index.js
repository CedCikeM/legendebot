const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("/")

bot.on('ready', function() {
    bot.user.setGame("PingouinLand | /help")
    console.log("Connectedç");
});

bot.login("NDUyODY3MzEwMjQ4Nzg3OTcw.DtNyDg.9MI2BRb8alBsBJgfDCZ03FLEVB0");

bot.on('message', function (message) {
    if (message.content === '/help') {
        message.channel.sendMessage("**__BOT EN DEVELOPPEMENT__**");
    }
} )

bot.on('message', function (message) {
    if (message.content === '/partenaires') {
        message.channel.sendMessage("►=====================◄ \n \n Personne est partenaire avec se discord \n \n ►=====================◄");
    }
} )
