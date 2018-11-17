const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("/")

bot.on('ready', function() {
    bot.user.setGame("Légende | /info");
    console.log("Connectedç");
});

bot.login("NDIzNTcxMjIzMTQ3MDUzMDc3.DtIzYg.XMYzIN4_trVoL0LK0x6YVb9gSec");


bot.on('message', function (message) {
    if (message.content === /info') {
            message.channel.sendMessage("__Information__ \n \n BOT EN DEVELOPPEMENT");
    }
} )
