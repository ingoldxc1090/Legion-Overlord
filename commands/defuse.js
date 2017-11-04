const fs = require("fs");
const data = require('./commandData/bomb.json');
const config = require('../config.json');
const Discord = require("discord.js");
exports.run = (client, message, args) => { //Sends command info for help argument
    if(args[0] === "help") {
        const help = new Discord.RichEmbed()
            .setTitle("Defuse")
            .setColor(0xffdf00)
            .setDescription("Defuses a bomb placed by the bomb command.")
            .addField("Usage", `${config.prefix}defuse`);
        message.channel.send(help);
        return;
    }
    //Writes to bomb data file to be read before bomb detonates
    data.defused = true;
    fs.writeFile('./commandData/bomb.json', JSON.stringify(data), (err) => console.error);
}
