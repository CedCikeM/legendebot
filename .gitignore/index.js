/**
 * A bot that welcomes new guild members when they join
 */

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on("ready", () => {

    console.log("Je suis prêt !");
    client.user.setGame("Dev 0.3");

});
client.on('message', message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === '/join') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          message.reply('I have successfully connected to the channel!');
        })
        .catch(console.log);
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
});
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'bienvenue');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`${member} à rejoind le serveur.`);
});
client.on('message', message => {
  // If the message is "ping"
  if (message.content === '/help') {
    // Send "pong" to the same channel
    message.channel.send('bot en developpement allez dans #update pour voir les nouvelles commandes');
  }
});
client.on('message', message => {
  // If the message is "ping"
  if (message.content === '/discord') {
    // Send "pong" to the same channel
    message.channel.send('```nous recherchons un développeur discord```');
  }
});
client.on('message', message => {
  // If the message is "ping"
  if (message.content === '/update0.2') {
    // Send "pong" to the same channel
    message.channel.send('```\nUpdate 0.2 : \n\n-Ajout de la commande /avatar : permes de mètre sont avatar dans le channel \n```\n\n @everyone');
  }
});
client.on('message', message => {
  // If the message is "ping"
  if (message.content === '/ajout') {
    // Send "pong" to the same channel
    message.channel.send('```\nAjout Mee6 0.1 : \n\n-Ajout de la commande !verif : vah te peremètre dêtre vétifier  \n```\n\n @everyone');
  }
});
client.on('message', message => {
  // If the message is "ping"
  if (message.content === '/modo') {
    // Send "pong" to the same channel
    message.channel.send('[Recrutement Guide] \n \n âge (14ans maximum) : \n \n Présentation sur discord : \n \n C est tu développer un bot ? : \n \n Pourquoi toi et pas un autre ? : \n \n Mot de fin : \n \n Toute candidature copyer colé seront pas accepté \n \n @everyone');
  }
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === '/avatar') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login('NTQ2ODQzODIyNTI5OTcwMTk2.D0x3Wg.s6BBjYNDZx0uxoKribi_n-dtf-8');
