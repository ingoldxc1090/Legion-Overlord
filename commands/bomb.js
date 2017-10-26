const permissionLevel = require('../subfunctions/permissionLevel');
const fs = require("fs");
exports.run = (client, message, args, config) => {
    if(permissionLevel.run(client, message, config, 3)) {
        var connectedChannel;
        //Checks for arguments and returns errors if you or your target are not connected to a voice channel
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

        //bomb timer function - effectively a loop that waits one second before each execution
        var count = 5;
        function timer () {
            setTimeout(function () {
                let data = require('./commandData/bomb.json');
                if (data.defused) {
                    message.channel.send(`Bomb successfully defused with ${count} seconds to spare.`);
                    data.defused = false;
                    fs.writeFile("./commandData/bomb.json", JSON.stringify(data), (err) => console.error);
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

        //bomb explode function
        function explode() {
            var connectedUsers = [];
            var voiceChannels = [];
            var arrayChannels = message.guild.channels.array();
            var arrayMembers = message.guild.members.array();
            //Searches through all members of the server to find who is connected to the given channel and stores them to an array
            for (i = 0; i < arrayMembers.length; i++) {
                if (arrayMembers[i].voiceChannel === connectedChannel) {
                    connectedUsers[connectedUsers.length] = arrayMembers[i];
                }
            }
            //Searches through all channels of the servers to determine which are voice channels and stores them to an array
            for (i = 0; i < arrayChannels.length; i++) {
                if (arrayChannels[i].type === 'voice') {
                    voiceChannels[voiceChannels.length] = arrayChannels[i];
                }
            }
            //Determines a channel for each individual to be moved to and verifies they have permission to join the channel
            //if they don't then it decrements and tries again
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
}