const Discord = require("discord.js");
const config = require('../config.json');
exports.run = (client, message, args) => {
    if(args[0] === "help") {
        const help = new Discord.RichEmbed()
            .setTitle("Members")
            .setColor(0xffdf00)
            .setDescription("Returns the member count of the server.")
            .addField("Usage", `${config.prefix}members`);
        message.channel.send(help);
        return;
    }
	var arrayMembers = message.guild.members.array();
	var botCount = 0;
	var humanCount = 0;
	for (i = 0; i < arrayMembers.length; i++) {
		if (arrayMembers[i].user.bot) {
			botCount++;
		} else {
			humanCount++;
		}
	}
	const embed = new Discord.RichEmbed()
		.addField("Member Count", message.guild.memberCount)
		.addField("Humans", humanCount)
		.addField("Bots", botCount);
	message.channel.send(embed);
}