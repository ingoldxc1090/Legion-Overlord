const Discord = require("discord.js");
exports.run = (client, message) => {
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