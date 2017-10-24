exports.run = (client, message, args) => {
    var connectedChannel;
    if (args.length < 1) {
        connectedChannel = message.member.voiceChannelID;
    } else {
        connectedChannel = message.mentions.members.first().voiceChannelID;
    }
    var connectedUsers = [];
    var voiceChannels = [];
    var arrayChannels = message.guild.channels.array();
    var arrayMembers = message.guild.members.array();
    for (i = 0; i < arrayMembers.length; i++) {
        if (arrayMembers[i].voiceChannelID == connectedChannel) {
            connectedUsers[connectedUsers.length] = arrayMembers[i];
        }
    }
    for (i = 0; i< arrayChannels.length; i++) {
        if (arrayChannels[i].type === 'voice') {
            voiceChannels[voiceChannels.length] = arrayChannels[i];
        }
    }
    for (i = 0; i< connectedUsers.length; i++) {
        var rand = Math.floor(Math.random()*voiceChannels.length);
        if (voiceChannels[rand].id != connectedChannel) {
            connectedUsers[i].setVoiceChannel(voiceChannels[rand]);
            message.channel.send(`${connectedUsers[i]} was thrown to ${voiceChannels[rand]}`);
        } else {
            i--;
        }
    }
}