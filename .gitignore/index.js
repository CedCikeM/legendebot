const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("/")

bot.on('ready', function() {
    bot.user.setGame("PaguinLand | >help")
    console.log("Connectedç");
});

bot.login("NDUyODY3MzEwMjQ4Nzg3OTcw.DtNyDg.9MI2BRb8alBsBJgfDCZ03FLEVB0");


let penguihelp - new discord.RichEmbed()

.setTitle("Penguin Bot Commands")
.setDescription("All commands of the penguin bot!")
.addField("Command #1, "Command Description")
.addField("Command #1, "Command Description")
.addField("Command #1, "Command Description")
.addField("Command #1, "Command Description")
.addField("Command #1, "Command Description");

message.channel.send(penguinhelp);

}

exports.help - {
name: "help"
}
