const config = require("../config.json");
const Discord = require("discord.js");
exports.run = (client, message) => {
    const genCommands = `${config.prefix}ping\n${config.prefix}coinflip\n${config.prefix}diceroll\n${config.prefix}randomnumber\n${config.prefix}randomcolor\n${config.prefix}avatar\n${config.prefix}members\n${config.prefix}rps\n${config.prefix}roast\n${config.prefix}bomb\n${config.prefix}defuse`;
    const modCommands = `${config.prefix}warn\n${config.prefix}mute\n${config.prefix}kick\n${config.prefix}ban`;
    const utilCommands = `${config.prefix}prefix`
    const embed = new Discord.RichEmbed()
        .setTitle("Legion Overlord Commands")
        .setColor(0xffdf00)
        .addField("General", genCommands)
        .addField("Moderation", modCommands)
        .addField("Utilities", utilCommands);
    message.author.send(embed);
}