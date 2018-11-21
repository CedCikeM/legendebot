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


static void UpdatePresence()
    {
        DiscordRichPresence discordPresence;
        memset(&discordPresence, 0, sizeof(discordPresence));
        discordPresence.state = "Regras";
        discordPresence.details = "Regras";
        discordPresence.startTimestamp = 1507665886;
        discordPresence.endTimestamp = 1507665886;
        discordPresence.largeImageText = "Numbani";
        discordPresence.smallImageText = "Rogue - Level 100";
        discordPresence.partyId = "ae488379-351d-4a4f-ad32-2b9b01c91657";
        discordPresence.partySize = 1;
        discordPresence.partyMax = 5;
        discordPresence.spectateSecret = "MTIzNDV8MTIzNDV8MTMyNDU0";
        discordPresence.joinSecret = "MTI4NzM0OjFpMmhuZToxMjMxMjM= ";
        Discord_UpdatePresence(&discordPresence);
    }
