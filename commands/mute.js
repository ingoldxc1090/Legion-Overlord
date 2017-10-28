const fs = require("fs");
const Discord = require("discord.js");
const punishment = require('./commandData/punishment.json');
const permissionLevel = require('../subfunctions/permissionLevel.js');
const checkRoles = require('../subfunctions/checkRoles.js');
exports.run = (client, message, args, chatFilter) => {
    if(chatFilter == undefined) chatfilter = false;
    if(chatFilter || (permissionLevel.run(client, message, 2) && checkRoles.run(client, message))) {
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
        var arguments = args;
        delete arguments[0];
        delete arguments[1];
        var evidence = arguments.join(' ');
        if(reason == undefined) {
            message.channel.send("You must provide a reason for muting this user.")
            return;
        }
        if(evidence === ' ') {
            message.channel.send("You must provide evidence for muting this user.")
            return;
        }
        const moderationLog = message.guild.channels.find('name', 'moderation_log');
        for(i = 0; i < punishment.offenders.length; i++) {
            if(user.id == punishment.offenders[i]) {
                punishment.muteCount[i]++;
                if(punishment.muteCount[i] >= 5) {
                    let kick = require('./kick.js');
                    kick.run(client, message, args, config, chatFilter);
                    punishment.muteCount[i] = 0;
                    fs.writeFile("./commandData/bomb.json", JSON.stringify(punishment), (err) => console.error);
                    return;
                } else {
                    fs.writeFile("./commandData/bomb.json", JSON.stringify(punishment), (err) => console.error);
                    const DMembed = new Discord.RichEmbed()
                        .setTitle("Mute Notification")
                        .setColor(0xffff00)
                        .setDescription(`You have received **${punishment.muteCount[i]}/5** mutes.\n5 will result in a kick from the server and a step towards the next punishment.`)
                        .addField("Reason", reason)
                        .addField("Evidence", evidence)
                        .setTimestamp()
                        .setFooter("Contact an admin if you feel you have been wrongfully punished");
                    user.send(DMembed);
                    const logEmbed = new Discord.RichEmbed()
                        .setTitle("User Muted")
                        .setDescription(user)
                        .setColor(0xffff00)
                        .addField("Reason", reason)
                        .addField("Evidence", evidence)
                        .setTimestamp();
                    moderationLog.send(logEmbed);
                    //mute code
                    return;
                }
            }
        }
        punishment.offenders[punishment.offenders.length] = user.id;
        punishment.warnCount[punishment.warnCount.length] = 0;
        punishment.muteCount[punishment.muteCount.length] = 1;
        punishment.kickCount[punishment.kickCount.length] = 0;
        fs.writeFile("./commandData/punishment.json", JSON.stringify(punishment), (err) => console.error);
        const DMembed = new Discord.RichEmbed()
            .setTitle("Mute Notification")
            .setColor(0xffff00)
            .setDescription(`You have received **1/5** mutes.\n5 will result in a kick from the server and a step towards the next punishment.`)
            .addField("Reason", reason)
            .addField("Evidence", evidence)
            .setTimestamp()
            .setFooter("Contact an admin if you feel you have been wrongfully punished");
        user.send(DMembed);
        const logEmbed = new Discord.RichEmbed()
            .setTitle("User Muted")
            .setDescription(user)
            .setColor(0xffff00)
            .addField("Reason", reason)
            .addField("Evidence", evidence)
            .setTimestamp();
        moderationLog.send(logEmbed);
        //mute code
        return;
    }
}