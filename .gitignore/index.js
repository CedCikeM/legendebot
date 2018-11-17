const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("/")

bot.on('ready', function() {
    bot.user.setGame("Légende | /info");
    console.log("Connectedç");
});

bot.login("NDUyODY3MzEwMjQ4Nzg3OTcw.DtIvqQ.y1ZbcvJlao6u3-7DO2aewFVtp8g");


bot.on('message', function (message) {
    if (message.content === /info') {
            message.channel.sendMessage("__Information__ \n \n BOT EN DEVELOPPEMENT");
    }
} )
