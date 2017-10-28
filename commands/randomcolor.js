const Discord = require("discord.js");
exports.run = (client, message) => {
    var randR = (Math.floor(Math.random()*256));
    var randG = (Math.floor(Math.random()*256));
    var randB = (Math.floor(Math.random()*256));
    var hexR = randR.toString(16);
    var hexG = randG.toString(16);
    var hexB = randB.toString(16);
    const embed = new Discord.RichEmbed()
        .setTitle("Random Color")
        .setColor(randR*randG*randB)
        .addField("Hex": `${hexR}${hexG}${hexB}`)
        .addField("Decimal": `${randR},${randG},${randB}`);
    message.channel.send(embed);
}