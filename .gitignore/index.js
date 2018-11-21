const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("r!")

bot.on('ready', function() {
    bot.user.setGame("Regras")
    console.log("Connectedç");
});

bot.login("NDUyODU0Mzg5MzUxMjUxOTg4.DtdcRg.E7UU4v_IYDIQUnGNHmSbl0MWvxE");

bot.on('message', function (message) {
    if (message.content === 'r!help') {
        message.channel.sendMessage("**__BOT EN DEVELOPPEMENT__**");
    }
} )

bot.on('message', function (message) {
    if (message.content === 'r!partenaires') {
        message.channel.sendMessage("►=====================◄ \n \n Personne est partenaire avec se discord \n \n ►=====================◄");
    }
} )
