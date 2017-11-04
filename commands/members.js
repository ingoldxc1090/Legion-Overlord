const Discord = require("discord.js");
const config = require('../config.json');
exports.run = (client, message, args) => {
    if(args[0] === "help") { //Sends command info for help argument
        const help = new Discord.RichEmbed()
            .setTitle("Members")
            .setColor(0xffdf00)
            .setDescription("Returns the member count of the server.")
            .addField("Usage", `${config.prefix}members`);
        message.channel.send(help);
        return;
    }
	var arrayMembers = message.guild.members.array(); //Creates an arrary of all memmbers in the guild
	var botCount = 0; //Initializes variables for scope
	var humanCount = 0;
	for (i = 0; i < arrayMembers.length; i++) { //Loops through all members of the guild
		if (arrayMembers[i].user.bot) { //Indexes botCount if the member is a bot
			botCount++;
		} else { //Otherwise indexes humanCount
			humanCount++;
		}
	}
	const embed = new Discord.RichEmbed() //Creates embed with returned data
		.addField("Member Count", message.guild.memberCount)
		.addField("Humans", humanCount)
		.addField("Bots", botCount);
	message.channel.send(embed);
}
