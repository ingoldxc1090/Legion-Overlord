/*Send a user a link to their avatar

 */
//import discord.js module
const Discord = require('discord.js');
// Garret is gay as fuck

exports.run = (client, message) => {
    message.reply(message.author.avatarURL);
}