const config = require("../config.json");
const Discord = require("discord.js");
exports.run = (client, message) => {
    const genCommands = `${config.prefix}ping\n${config.prefix}coinflip\n${config.prefix}diceroll\n${config.prefix}randomnumber\n${config.prefix}randomcolor,\n${config.prefix}avatar\n${config.prefix}members\n${config.prefix}roast\n${config.prefix}bomb\ndefuse`;
    const modCommands = `${config.prefix}warn\n${config.prefix}mute\n${config.prefix}kick\n${config.prefix}ban`;
    const embed = new Discord.RichEmbed()
        .setTitle("Legion Overlord Commands")
        .addField("General", genCommands)
        .addField("Moderation", modCommands);
    message.author.sent(embed);
}