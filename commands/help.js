const config = require("../config.json");
const Discord = require("discord.js");
exports.run = (client, message) => {
    const genCommands = `${config.prefix}avatar\n${config.prefix}coinflip\n${config.prefix}diceroll\n${config.prefix}members\n${config.prefix}movie\n${config.prefix}ping\n${config.prefix}randomcolor\n${config.prefix}randomnumber\n${config.prefix}rps\n${config.prefix}translate\n${config.prefix}weather`;
    const funCommands = `${config.prefix}bill\n${config.prefix}bomb\n${config.prefix}cat\n${config.prefix}chucknorris\n${config.prefix}dadjoke\n${config.prefix}defuse\n${config.prefix}dog\n${config.prefix}doge\n${config.prefix}roast\n${config.prefix}yoda`
    const modCommands = `${config.prefix}warn\n${config.prefix}mute\n${config.prefix}kick\n${config.prefix}ban`;
    const utilCommands = `${config.prefix}clean\n${config.prefix}prefix`
    const embed = new Discord.RichEmbed()
        .setTitle("Legion Overlord Commands")
        .setColor(0xffdf00)
        .setDescription(`For more information about a specific command try ${config.prefix}{command} help`)
        .addField("General", genCommands)
        .addField("Fun", funCommands)
        .addField("Moderation", modCommands)
        .addField("Utilities", utilCommands);
    message.author.send(embed);
}
