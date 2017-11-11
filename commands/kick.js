const fs = require("fs");
const Discord = require("discord.js");
const punishment = require('./commandData/punishment.json');
const permissionLevel = require('../subfunctions/permissionLevel.js');
const checkRoles = require('../subfunctions/checkRoles.js');
const config = require('../config.json');
exports.run = (client, message, args, chatFilter) => {
    if(args[0] === "help") {
        const help = new Discord.RichEmbed()
            .setTitle("Kick")
            .setColor(0xffdf00)
            .setDescription("Kicks the specified user from the server.")
            .addField("Usage", `${config.prefix}kick @user {reason} {evidence}`);
        message.channel.send(help);
        return;
    }
    var userRole = message.member.highestRole;
    var subjectRole = message.mentions.members.first().highestRole;
    if(chatFilter == undefined) chatfilter = false;
    if(chatFilter || (permissionLevel.run(client, message, 2) && checkRoles.run(client, userRole, subjectRole))) {
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
            message.channel.send("You must provide a reason for kicking this user.")
            return;
        }
        if(evidence === ' ') {
            message.channel.send("You must provide evidence for kicking this user.")
            return;
        }
        const moderationLog = message.guild.channels.find('name', 'moderation_log');
        for(i = 0; i < punishment.offenders.length; i++) {
            if(user.id == punishment.offenders[i]) {
                punishment.kickCount[i]++;
                if(punishment.kickCount[i] >= 3) {
                    let ban = require('./ban.js');
                    //ban.run(client, message, args, config, chatFilter);
                    punishment.muteCount[i] = 0;
                    fs.writeFile("./commandData/bomb.json", JSON.stringify(punishment), (err) => console.error);
                    return;
                } else {
                    fs.writeFile("./commandData/bomb.json", JSON.stringify(punishment), (err) => console.error);
                    const DMembed = new Discord.RichEmbed()
                        .setTitle("Kick Notification")
                        .setColor(0xff7f00)
                        .setDescription(`You have received **${punishment.kickCount[i]}/3** kicks.\n5 will result in a ban from the server and a step towards the next punishment.`)
                        .addField("Reason", reason)
                        .addField("Evidence", evidence)
                        .setTimestamp()
                        .setFooter("Contact an admin if you feel you have been wrongfully punished");
                    user.send(DMembed);
                    const logEmbed = new Discord.RichEmbed()
                        .setTitle("User Kicked")
                        .setDescription(user)
                        .setColor(0xff7f00)
                        .addField("Reason", reason)
                        .addField("Evidence", evidence)
                        .setTimestamp();
                    moderationLog.send(logEmbed);
                    //kick code
                    return;
                }
            }
        }
        punishment.offenders[punishment.offenders.length] = user.id;
        punishment.warnCount[punishment.warnCount.length] = 0;
        punishment.muteCount[punishment.muteCount.length] = 0;
        punishment.kickCount[punishment.kickCount.length] = 1;
        fs.writeFile("./commandData/punishment.json", JSON.stringify(punishment), (err) => console.error);
        const DMembed = new Discord.RichEmbed()
            .setTitle("Kick Notification")
            .setColor(0xff7f00)
            .setDescription(`You have received **1/5** kicks.\n5 will result in a ban from the server and a step towards the next punishment.`)
            .addField("Reason", reason)
            .addField("Evidence", evidence)
            .setTimestamp()
            .setFooter("Contact an admin if you feel you have been wrongfully punished");
        user.send(DMembed);
        const logEmbed = new Discord.RichEmbed()
            .setTitle("User Kicked")
            .setDescription(user)
            .setColor(0xff7f00)
            .addField("Reason", reason)
            .addField("Evidence", evidence)
            .setTimestamp();
        moderationLog.send(logEmbed);
        //kick code
        return;
    }
}