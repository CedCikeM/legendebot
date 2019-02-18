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
    client.user.setGame("[/help] Rhilia");

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
    message.channel.send('__============__\n **BOT en développement** \n__============__');
  }
});
client.on('message', message => {
  // If the message is "ping"
  if (message.content === '/update0.1') {
    // Send "pong" to the same channel
    message.channel.send('```\nUpdate 0.1 : \n\n -Ajout de la commande /kick : permes de kick un membre du discord \n```\n\n @everyone');
  }
});
client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // If the message content starts with "!kick"
  if (message.content.startsWith('!kick')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member.kick('Optional reason that will display in the audit logs').then(() => {
          // We let the message author know we were able to kick the person
          message.reply(`Le kick à était bien apliqué à ${user.tag}`);
        }).catch(err => {
          // An error happened
          // This is generally due to the bot not being able to kick the member,
          // either due to missing permissions or role hierarchy
          message.reply('Je suis incapable de kick le membre');
          // Log the error
          console.error(err);
        });
      } else {
        // The mentioned user isn't in this guild
        message.reply('That user isn\'t in this guild!');
      }
    // Otherwise, if no user was mentioned
    } else {
      message.reply('Merci de Mentionner une personne pour la kick');
    }
  }
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login('NTQ2ODQzODIyNTI5OTcwMTk2.D0uJAQ.A6k1H7z5g4nk4SNhGr-T1QuRSXs');
