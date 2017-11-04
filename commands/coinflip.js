const config = require('../config.json');
const Discord = require("discord.js");
exports.run = (client, message, args) => {
    if(args[0] === "help") { //Sends command info for help argument
            const help = new Discord.RichEmbed()
                .setTitle("Coin Flip")
                .setColor(0xffdf00)
                .setDescription("Flips a coin and returns the result.")
                .addField("Usage", `${config.prefix}coinflip`);
            message.channel.send(help);
            return;
        }
    var rand = Math.floor(Math.random() * 2); //creates a random number between 0 and 1
    if(rand == 0) message.channel.send("It lands on heads."); //Message for heads
    else if (rand == 1) message.channel.send("It lands on tails."); //Meassage for tails
    else console.error(err);
}
