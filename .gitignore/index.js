const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("/")

bot.on('ready', function() {
    bot.user.setGame("Legende | /info");
    console.log("Connectedç");
});

bot.login("NDUyODY3MzEwMjQ4Nzg3OTcw.DtIzmw.pMnUAf1cc6nW73IKoMinp7drMTo");

bot.on('message', function (message) {
    if (message.content === 'Legende | /info') {
            message.channel.sendMessage("[**information**] \n \n - ``/partenaire`` **Permé de voir les partenaires du serveur** \n\n - ``/createur`` **Savoir qui à créer le bot mes on le sais touses");
    }
} )

bot.on('message', function (message) {
    if (message.content === '/partenaire') {
            message.channel.sendMessage("[**Partenaire**] \n \n Recherche de Partenaire");
    }
} )

bot.on('message', function (message) {
    if (message.content === '/createur') {
            message.channel.sendMessage("[**__Createur__**] \n \n Mon créateur est belle et bien CedCikeM™#1869 il ma créer pour vous aimers");
    }
} )
