exports.run = (client, message, args) => {
    var connectedChannel;
    if (args.length < 1) {
        connectedChannel = message.member.voiceChannel;
    } else {
        connectedChannel = message.mentions.members.first().voiceChannel;
    }
    var connectedUsers = [];
    var voiceChannels = [];
    var arrayChannels = message.guild.channels.array();
    var arrayMembers = message.guild.members.array();
    for (i = 0; i < arrayMembers.length; i++) {
        if (arrayMembers[i].voiceChannel === connectedChannel) {
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
        if (voiceChannels[rand].id != connectedChannel && voiceChannels[rand].permissionsFor(connectedUsers[i]).has(0x00100000)) {
            connectedUsers[i].setVoiceChannel(voiceChannels[rand]);
            message.channel.send(`${connectedUsers[i]} was thrown to ${voiceChannels[rand]}`);
        } else {
            i--;
        }
    }
}