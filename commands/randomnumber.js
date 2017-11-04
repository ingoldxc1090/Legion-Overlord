const config = require('../config.json');
const Discord = require("discord.js");
exports.run = (client, message, args) => {
    if(args[0] === "help") { //Sends command info for help argument
        const help = new Discord.RichEmbed()
            .setTitle("Random Number")
            .setColor(0xffdf00)
            .setDescription("Generates a random number between 1 and a specified value or between two specified values.")
            .addField("Usage", `${config.prefix}randomnumber {number}\n${config.prefix}randomnumber {number1} {number2}`);
        message.channel.send(help);
        return;
    }
    if(args[0].isNaN || args[1].isNaN){
        message.channel.send("Arguments must be numbers.");
        return;
    }
    if(args.length == 1){ //If only one argument argument generates a random number between 1 and the specified value
        var number = Math.floor((Math.random()*args[0])+1);
        message.channel.send(`Your number is ${number}.`);
    } else if(args.length == 2){ //If two arguments generates a random number between the entered values
        if(args[1]-args[0] <= 0){
            message.channel.send("Please enter smaller number first.");
            return;
        }
        var range = args[1]-args[0];
        var number = Math.floor((Math.random()*range)+args[0]);
        message.channel.send(`Your number is ${number}`);
    } else {
        message.channel.send("Invalid arguments");
    }
}
