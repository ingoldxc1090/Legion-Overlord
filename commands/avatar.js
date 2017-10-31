const config = require('../config.json');
const Discord = require("discord.js");
exports.run = (client, message, args) =>
{
    if(args[0] === "help") {
        const help = new Discord.RichEmbed()
            .setTitle("Avatar")
            .setColor(0xffdf00)
            .setDescription("Returns the avatar image of the sender or specified user.")
            .addField("Usage", `${config.prefix}avatar\n${config.prefix}avatar @user`);
        message.channel.send(help);
        return;
    }
    if (args.length < 1) {
        message.channel.send(message.author.avatarURL);
    } else {
        let member = message.mentions.members.first();
        if (member == null) {
            message.channel.send("You must mention a user.")
        } else {
            message.channel.send(member.user.avatarURL);
        }
    }
}
