const config = require('../config.json');
const Discord = require("discord.js");
exports.run = (client, message, args) => {
    if(args[0] === "help") { //Sends command info for help argument
        const help = new Discord.RichEmbed()
            .setTitle("Dice Roll")
            .setColor(0xffdf00)
            .setDescription("Rolls a die and returns the result.")
            .addField("Usage", `${config.prefix}diceroll`);
        message.channel.send(help);
        return;
    }
    var roll = Math.floor((Math.random()*6)+1); //Generates a random number between 1 and 6
    message.channel.send(`You rolled a ${roll}.`); //Sends the generated number
}
