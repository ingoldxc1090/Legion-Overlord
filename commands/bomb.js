const permissionLevel = require('../subfunctions/permissionLevel');
const fs = require("fs");
exports.run = (client, message, args, config) =>
{
    var connectedChannel;
    if (args.length < 1) {
        connectedChannel = message.member.voiceChannel;
        if (connectedChannel == undefined) {
            message.channel.send("You are not in a voice channel.");
            return;
        }
    } else {
        connectedChannel = message.mentions.members.first().voiceChannel;
        if (connectedChannel == undefined) {
            message.channel.send("The user mentioned is not in a voice channel.");
            return;
        }
    }
    message.channel.send(`A bomb has been planted in ${connectedChannel}.`)
    var defused = false;
    var count = 3;

    function timer () {
        setTimeout(function () {
            let data = require('./commandData/bomb.json');
            if (data.defused) {
                message.channel.send(`Bomb successfully defused with ${count} seconds to spare.`);
            } else {
                if (count !=0) message.channel.send(`Bomb will explode in ${count}.`);
                count--;
                if (count >= 0) {
                    timer();
                } else {
                    explode();
                }
            }
        }, 1000)
    }

    timer();

    function explode() {
        var connectedUsers = [];
        var voiceChannels = [];
        var arrayChannels = message.guild.channels.array();
        var arrayMembers = message.guild.members.array();
        for (i = 0; i < arrayMembers.length; i++) {
            if (arrayMembers[i].voiceChannel === connectedChannel) {
                connectedUsers[connectedUsers.length] = arrayMembers[i];
            }
        }
        for (i = 0; i < arrayChannels.length; i++) {
            if (arrayChannels[i].type === 'voice') {
                voiceChannels[voiceChannels.length] = arrayChannels[i];
            }
        }
        for (i = 0; i < connectedUsers.length; i++) {
            var rand = Math.floor(Math.random() * voiceChannels.length);
            if (voiceChannels[rand].id != connectedChannel && voiceChannels[rand].permissionsFor(connectedUsers[i]).has(0x00100000)) {
                connectedUsers[i].setVoiceChannel(voiceChannels[rand]);
                message.channel.send(`${connectedUsers[i]} was thrown to ${voiceChannels[rand]}`);
            } else {
                i--;
            }
        }
    }
}