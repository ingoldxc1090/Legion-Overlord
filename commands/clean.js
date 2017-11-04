const permissionLevel = require('../subfunctions/permissionLevel.js');
const config = require('../config.json');
const Discord = require("discord.js");
exports.run = (client, message, args) => {
    if(args[0] === "help") { //Sends command info for help argument
        const help = new Discord.RichEmbed()
            .setTitle("Clean")
            .setColor(0xffdf00)
            .setDescription("Deletes the specified number of messages with a max of 100 and default of 10.")
            .addField("Usage", `${config.prefix}clean\n${config.prefix}clean {numberOfMessages}`);
        message.channel.send(help);
        return;
    }
    if(!permissionLevel.run(client, message, 2)) return; //Ensures that the user has permission to use the command
    if (args.length == 0) { //Default case
        message.channel.bulkDelete(10);
        return;
    }
    if(isNaN(args[0])) { //Error for NaN entries
        message.channel.send("You must enter the number of messages you would like deleted.")
    }
    var num = args[0];
    num++;
    if(num > 100){ //Handling for entries over 100
        mesage.channel.bulkDelete(100);
        return;
    }
    message.channel.bulkDelete(num); //Deletes the specified number of messages
}
