const fs = require("fs");
const config = require('../config.json');
const Discord = require("discord.js");
const permissionLevel = require('../subfunctions/permissionLevel.js');
exports.run = (client, message, args) => {
    if(args[0] === "help") { //Sends command info for help argument
        const help = new Discord.RichEmbed()
            .setTitle("Prefix")
            .setColor(0xffdf00)
            .setDescription("Changes the bot's command prefix to the specified prefix.")
            .addField("Usage", `${config.prefix}prefix {newPrefix}`);
        message.channel.send(help);
        return;
    }
	if (!permissionLevel.run(client, message, 3)) return; //Ensures the user has the correct permision level
	if (message.content.split(" ").slice(1,2)[0] !== undefined){ //Ensures the entered prefix is not blank
		config.prefix = message.content.split(" ").slice(1,2)[0];
		fs.writeFile("../config.json", JSON.stringify(config), (err) => console.error); //Writes the new prefix to file
		message.channel.send("Prefix changed to " + newPrefix); //Sends message announcing change
		console.log("Prefix changed to " + newPrefix); //Logs change to console
	} else {
		message.channel.send("No prefix defined"); //Error for no arguments
	}
}
