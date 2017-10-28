const fs = require("fs");
const config = require('../config.json')
const permissionLevel = require('../subfunctions/permissionLevel.js');
exports.run = (client, message, args) => {
    if(args[0] === "help") {
        const help = new Discord.RichEmbed()
            .setTitle("Prefix")
            .setColor(0xffdf00)
            .setDescription("Changes the bot's command prefix to the specified prefix.")
            .addField("Usage", `${config.prefix}prefix {newPrefix}`);
        message.channel.send(help);
        return;
    }
	if (!permissionLevel.run(client, message, 3)) return;
	if (message.content.split(" ").slice(1,2)[0] !== undefined){
		let newPrefix = message.content.split(" ").slice(1,2)[0];
		config.prefix = newPrefix;
		fs.writeFile("../config.json", JSON.stringify(config), (err) => console.error);
		message.channel.send("Prefix changed to " + newPrefix);
		console.log("Prefix changed to " + newPrefix);
	} else {
		message.channel.send("No prefix defined");
	}
}