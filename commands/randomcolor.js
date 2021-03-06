const Discord = require("discord.js");
const config = require('../config.json');
exports.run = (client, message, args) => {
    if(args[0] === "help") { //Sends command info for help argument
        const help = new Discord.RichEmbed()
            .setTitle("Random color")
            .setColor(0xffdf00)
            .setDescription("Generates a random color.")
            .addField("Usage", `${config.prefix}randomcolor`);
        message.channel.send(help);
        return;
    }
    //Generates 3 random numbers between 0 and 255
    var randR = (Math.floor(Math.random()*256));
    var randG = (Math.floor(Math.random()*256));
    var randB = (Math.floor(Math.random()*256));
    //Converts the decimal values to hex
    var hexR = randR.toString(16);
    var hexG = randG.toString(16);
    var hexB = randB.toString(16);
    const embed = new Discord.RichEmbed() //Creates an embed with the generated values
        .setTitle("Random Color")
        .setColor(randR*randG*randB)
        .addField("Hex", `${hexR}${hexG}${hexB}`)
        .addField("Decimal", `${randR},${randG},${randB}`);
    message.channel.send(embed);
}
