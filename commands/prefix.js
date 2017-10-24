const fs = require("fs");
const permissionLevel = require('../subfunctions/permissionLevel.js');
exports.run = (client, message, args, config) => {
	if (!permissionLevel.run(client, message, config, 3)) return;
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