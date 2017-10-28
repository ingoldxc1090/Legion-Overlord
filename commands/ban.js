const fs = require("fs");
const Discord = require("discord.js");
const punishment = require('./commandData/punishment.json');
const permissionLevel = require('../subfunctions/permissionLevel.js');
const checkRoles = require('../subfunctions/checkRoles.js');
const config = require('../config.json');
exports.run = (client, message, args, chatFilter) => {
    if(args[0] === "help") {
        const help = new Discord.RichEmbed()
            .setTitle("Ban")
            .setColor(0xffdf00)
            .setDescription("Bans the specified user from the server.")
            .addField("Usage", `${config.prefix}ban @user {reason} {evidence}`);
        message.channel.send(help);
        return;
    }
    if(chatFilter == undefined) chatfilter = false;
    if(chatFilter || (permissionLevel.run(client, message, 3) && checkRoles.run(client, message))) {
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
            message.channel.send("You must provide a reason for banning this user.")
            return;
        }
        if(evidence === ' ') {
            message.channel.send("You must provide evidence for banning this user.")
            return;
        }
        const moderationLog = message.guild.channels.find('name', 'moderation_log');
        for(i = 0; i < punishment.offenders.length; i++) {
            if(user.id == punishment.offenders[i]) {
                fs.writeFile("./commandData/bomb.json", JSON.stringify(punishment), (err) => console.error);
                const DMembed = new Discord.RichEmbed()
                    .setTitle("Ban Notification")
                    .setColor(0xff0000)
                    .setDescription(`You have been banned from the Legion Discord server.`)
                    .addField("Reason", reason)
                    .addField("Evidence", evidence)
                    .setTimestamp()
                    .setFooter("Contact an admin if you feel you have been wrongfully punished");
                user.send(DMembed);
                const logEmbed = new Discord.RichEmbed()
                    .setTitle("User Banned")
                    .setDescription(user)
                    .setColor(0xff0000)
                    .addField("Reason", reason)
                    .addField("Evidence", evidence)
                    .setTimestamp();
                moderationLog.send(logEmbed);
                delete punishment.offenders[i];
                delete punishment.warnCount[i];
                delete punishment.muteCount[i];
                delete punishment.kickCount[i];
                //ban code
                return;
            }
        }
        const DMembed = new Discord.RichEmbed()
            .setTitle("Ban Notification")
            .setColor(0xff0000)
            .setDescription(`You have been banned from the Legion Discord server.`)
            .addField("Reason", reason)
            .addField("Evidence", evidence)
            .setTimestamp()
            .setFooter("Contact an admin if you feel you have been wrongfully punished");
        user.send(DMembed);
        const logEmbed = new Discord.RichEmbed()
            .setTitle("User Banned")
            .setDescription(user)
            .setColor(0xff7f00)
            .addField("Reason", reason)
            .addField("Evidence", evidence)
            .setTimestamp();
        moderationLog.send(logEmbed);
        //ban code
        return;
    }
}