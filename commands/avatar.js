const config = require('../config.json');
const Discord = require("discord.js");
exports.run = (client, message, args) =>
{
    if(args[0] === "help") { //Sends command info for help argument
        const help = new Discord.RichEmbed()
            .setTitle("Avatar")
            .setColor(0xffdf00)
            .setDescription("Returns the avatar image of the sender or specified user.")
            .addField("Usage", `${config.prefix}avatar\n${config.prefix}avatar @user`);
        message.channel.send(help);
        return;
    }
    if (args.length < 1) { //If no argument passed
        const embed = new Discord.RichEmbed().setImage(message.author.avatarURL); //Sets the image of an embed to the author's avatar
        message.channel.send(embed); 
    } else {
        let user = message.mentions.users.first(); //Records the first mention
        if (member == null) { //Ensures that a user is mentioned in the message
            message.channel.send("You must mention a user.")
        } else {
            const embed = new Discord.RichEmbed().setImage(user.avatarURL); //Sets the image of an embed to the author's avatar
            message.channel.send(embed);
        }
    }
}
