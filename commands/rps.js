const config = require('../config.json');
const Discord = require("discord.js");
exports.run = (client, message, args) => {
    if(args[0] === "help") { //Sends command info for help argument
        const help = new Discord.RichEmbed()
            .setTitle("Rock, Paper, Scissors")
            .setColor(0xffdf00)
            .setDescription("Plays a game of rock paper scissors.")
            .addField("Usage", `${config.prefix}rps {throw}`);
        message.channel.send(help);
        return;
    }
    var rps = ["rock", "paper", "scissors"];
    var rand = Math.floor(Math.random()*3);
    if(args[0] !== "rock" && args[0] !== "paper" && args[0] !== "scissors" && args[0] !== "gun") { //Error for invalid arguments
        message.channel.send("Invalid argument");
        return;
    }
    if(args[0] === "gun"){
        message.channel.send("No, please don't shoot me you win.");
        return;
    }
    if(rps[rand] === args[0]){ // return message for throwing the same value
        message.channel.send(`You threw ${args[0]}, I threw ${rps[rand]}.\nIt's a draw.`);
    } else if((args[0] === "rock" && rps[rand] === "paper") || (args[0] === "paper" && rps[rand] === "scissors") || (args[0] === "scissors" && rps[rand] === "rock")) {
        message.channel.send(`You threw ${args[0]}, I threw ${rps[rand]}.\nI win.`); //Return message for when the bot wins
    } else if((args[0] === "rock" && rps[rand] === "scissors") || (args[0] === "paper" && rps[rand] === "rock") || (args[0] === "scissors" && rps[rand] === "paper")) {
        message.channel.send(`You threw ${args[0]}, I threw ${rps[rand]}.\nYou win.`); //Return message for when the user wins
    }
}
