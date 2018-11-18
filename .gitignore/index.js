const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("/")

bot.on('ready', function() {
    bot.user.setGame("Legende | /info");
    console.log("Connectedç");
});

bot.login("NDUyODY3MzEwMjQ4Nzg3OTcw.DtIzmw.pMnUAf1cc6nW73IKoMinp7drMTo");

bot.on('message', function (message) {
    if (message.content === '/info') {
            message.channel.sendMessage("[**information**] \n \n - ``/partenaire`` **Permé de voir les partenaires du serveur** \n\n - ``/createur`` **Savoir qui à créer le bot mes on le sais touses**");
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

bot.on('message', function (message) {
    if (message.content === '/cv') {
            message.channel.sendMessage("[**__Candidature__**] \n \n à faire en MP discord a CedCikeM \n \n Pour faire ta candidature tu doix \n \n ► Dire ton prénom \n \n ► Ton Age Minimum 14ans \n \n ► Pourquoi tu veux être Modérateur \n \n ► Est ta motivation");
    }
} )

bot.on('message', function (message) {
    if (message.content === '/règle') {
            message.channel.sendMessage("[**__Règle__**] \n \n ```En Développement```");
    }
} )
