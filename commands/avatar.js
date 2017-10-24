<<<<<<< HEAD
exports.run = (client, message, args) =>
{
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
=======
/*Send a user a link to their avatar

 */
//import discord.js module
const Discord = require('discord.js');
// Garret is gay as fuck
//^^true

exports.run = (client, message) => {
    message.reply(message.author.avatarURL);
}
>>>>>>> 8e8a72fd7cd3e5eb626d9090da448f9e1b01fec8
