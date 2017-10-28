const config = require('../config.json');
const Discord = require("discord.js");
exports.run = (client, message, args) => {
    if(args[0] === "help") {
        const help = new Discord.RichEmbed()
            .setTitle("Ping")
            .setColor(0xffdf00)
            .setDescription("Returns the ping of the server.")
            .addField("Usage", `${config.prefix}ping`);
        message.channel.send(help);
        return;
    }
	message.channel.send(`Pong! \`${client.ping}ms\``).catch(console.error);
}