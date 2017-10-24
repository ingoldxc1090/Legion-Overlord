const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");

var punishmentCounter = [["user", 0, 0, 0]];

client.on("ready", () => {
  console.log("Client started");
});

client.on("message", (message) => {
	if (message.author.bot) {
		return;
	} 

	//Legion Overlord Command
  	if (message.content.toLowerCase() === 'legion overlord') {
  		message.channel.send("I am here my subject. You may communicate with me using my current prefix, \"" + config.prefix + "\"");
  	}

    //Chat Filter
    try {
        let chatFilter = require(`./filter/chatFilter.js`);
        chatFilter.run(client, message, punishmentCounter);
    } catch (err) {
        console.error(err);
    }

    //exception for if the message doesn't begin with the prefix
    if (message.content.indexOf(config.prefix) !== 0) {
        return;
    }
    //defines command and argumends
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    //Command handler for running commands as individual files
    try{
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args, config);
    } catch (err) {
        console.error(err);
    }
});

client.login(config.token);