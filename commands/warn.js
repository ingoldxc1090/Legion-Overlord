const fs = require("fs");
const Discord = require("discord.js");
const punishment = require('./commandData/punishment.json');
const permissionLevel = require('../subfunctions/permissionLevel');
exports.run = (client, message, args, chatFilter) => {
    if(chatFilter || permissionLevel.run(client, message, config, 2)) {
        var serverMembers = message.guild.members.array();
        if(args[0] == undefined) {
            message.channel.send("You must mention a user.")
            return;
        }
        var user;
        for(i = 0; i < serverMembers.length; i++) {
            if(serverMembers[i].user.id === args[0].substr(2).slice(0,-1)) {
                user = serverMembers[i].user;
            }
        }
        if(user == undefined) {
            user = message.mentions.users.first();
            if(user == undefined) {
                message.channel.send("You must mention a user.")
                return;
            }
        }
        var reason = args[1];
        delete args[0];
        delete args[1];
        var evidence = args.join(' ');
        if(reason == undefined) {
            message.channel.send("You must provide a reason for your warning.")
            return;
        }
        if(evidence === ' ') {
            message.channel.send("You must provide evidence for your warning.")
            return;
        }
        const moderationLog = message.guild.channels.find('name', 'moderation_log');
        for(i = 0; i < punishment.offenders.length; i++) {
            if(user.id == punishment.offenders[i]) {
                punishment.warnCount[i]++;
                if(punishment.warnCount[i] >= 3) {
                    let mute = require('./mute.js');
                    //mute.run(client, message, args, config);
                    punishment.warnCount[i] = 0;
                    fs.writeFile("./commandData/bomb.json", JSON.stringify(punishment), (err) => console.error);
                    return;
                } else {
                    fs.writeFile("./commandData/bomb.json", JSON.stringify(punishment), (err) => console.error);
                    const DMembed = new Discord.RichEmbed()
                        .setTitle("Warning Notification")
                        .setColor(0xff7f00)
                        .setDescription(`You have received **${punishment.warnCount[i]}/3** infractions.\n3 will result in a temporary mute and a step towards the next punishment.`)
                        .addField("Reason", reason)
                        .addField("Evidence", evidence)
                        .setTimestamp()
                        .setFooter("Contact an admin if you feel you have been wrongfully punished");
                    user.send(DMembed);
                    const logEmbed = new Discord.RichEmbed()
                        .setTitle("User Warned")
                        .setDescription(user)
                        .setColor(0xff7f00)
                        .addField("Reason", reason)
                        .addField("Evidence", evidence)
                        .setTimestamp();
                    moderationLog.send(logEmbed);
                    return;
                }
            }
        }
        punishment.offenders[punishment.offenders.length] = user.id;
        punishment.warnCount[punishment.warnCount.length] = 1;
        punishment.muteCount[punishment.muteCount.length] = 0;
        punishment.kickCount[punishment.kickCount.length] = 0;
        fs.writeFile("./commandData/punishment.json", JSON.stringify(punishment), (err) => console.error);
        const DMembed = new Discord.RichEmbed()
            .setTitle("Warning Notification")
            .setColor(0xff7f00)
            .setDescription(`You have received **1/3** infractions.\n3 will result in a temporary mute and a step towards the next punishment.`)
            .addField("Reason", reason)
            .addField("Evidence", evidence)
            .setTimestamp()
            .setFooter("Contact an admin if you feel you have been wrongfully punished");
        user.send(DMembed);
        const logEmbed = new Discord.RichEmbed()
            .setTitle("User Warned")
            .setDescription(user)
            .setColor(0xff7f00)
            .addField("Reason", reason)
            .addField("Evidence", evidence)
            .setTimestamp();
        moderationLog.send(logEmbed);
        return;
    }
}