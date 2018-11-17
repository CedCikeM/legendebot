const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("/")

bot.on('ready', function() {
    bot.user.setGame("/info en DEV")
    console.log("Connectedç");
});

bot.login("NDUyODY3MzEwMjQ4Nzg3OTcw.DtIzmw.pMnUAf1cc6nW73IKoMinp7drMTo");

bot.on('message', function (message) {
    if (message.content === '/info') {
            message.channel.sendMessage("[**information**] \n \n - ``/partenaire`` **Permé de voir les partenaires du serveur**");
    }
} )

bot.on('message', function (message) {
    if (message.content === '/partenaire') {
            message.channel.sendMessage("[**Partenaire**] \n \n Recherche de Partenaire");
    }
} )
