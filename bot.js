const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");

client.on("ready", () => {
    try {
        let status = require('./subfunctions/status.js');
        status.run(client);
    } catch (err) {
        console.error(err);
    }
    console.log("Client started");
});

client.on("messageUpdate", (oldMessage, newMessage) => {
    try {
        let chatFilter = require(`./filter/chatFilter.js`);
        chatFilter.run(client, newMessage);
    } catch (err) {
        console.error(err);
    }
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
        if(chatFilter.run(client, message)) return;
    } catch (err) {
        console.error(err);
    }

    //exception for if the message doesn't begin with the prefix
    if (message.content.indexOf(config.prefix) !== 0) {
        return;
    }
    guildRoles = message.guild.roles.array();
    for (i = 0; i < guildRoles.length; i++) {
        if (guildRoles[i].name === 'VIPs') {
            config.vipRole = guildRoles[i];
            fs.writeFile("../config.json", JSON.stringify(config), (err) => console.error);
        } else if (guildRoles[i].name === 'Moderators') {
            config.modRole = guildRoles[i];
            fs.writeFile("../config.json", JSON.stringify(config), (err) => console.error);
        } else if (guildRoles[i].name === 'Admins') {
            config.adminRole = guildRoles[i];
            fs.writeFile("../config.json", JSON.stringify(config), (err) => console.error);
        }
    }

    //defines command and argumends
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    //Command handler for running commands as individual files
    try{
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args);
    } catch (err) {
        console.error(err);
    }
});

client.login(config.token);