const config = require('../config.json');
exports.run = (client, message, args) => {
    if(args[0] === "help") {
        const help = new Discord.RichEmbed()
            .setTitle("Random Number")
            .setColor(0xffdf00)
            .setDescription("Generates a random number between 1 and a specified value or between two specified values.")
            .addField("Usage", `${config.prefix}randomnumber {number}\n${config.prefix}randomnumber {number1} {number2}`);
        message.channel.send(help);
        return;
    }
    if(args.length == 1){
        var number = Math.floor((Math.random()*args[0])+1);
        message.channel.send(`Your number is ${number}.`);
    } else if(args.length == 2){
        var number = Math.floor((Math.random()*args[1])+args[0]);
        message.channel.send(`Your number is ${number}`)
    } else {
        message.channel.send("Invalid arguments");
    }
}