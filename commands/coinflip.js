const config = require('../config.json');
exports.run = (client, message, args) => {
    if(args[0] === "help") {
            const help = new Discord.RichEmbed()
                .setTitle("Coin Flip")
                .setColor(0xffdf00)
                .setDescription("Flips a coin and returns the result.")
                .addField("Usage", `${config.prefix}coinflip`);
            message.channel.send(help);
            return;
        }
    var rand = Math.floor(Math.random() * 2);
    if(rand == 0) message.channel.send("It lands on heads.");
    else if (rand == 1) message.channel.send("It lands on tails.");
    else console.error(err);
}