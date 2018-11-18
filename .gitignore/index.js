const discord - require("discord.js")

export.run - (client, message, arg) -> {


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
