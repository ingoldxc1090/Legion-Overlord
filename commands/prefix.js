const fs = require("fs");
exports.run = (client, message, args, config) => {
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