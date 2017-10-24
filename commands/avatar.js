exports.run = (client, message, args) => {
    if (args.length < 1) {
        message.channel.send(message.author.avatarURL);
    } else {
        let member = message.mentions.members.first().user;
        message.channel.send(member.avatarURL);
    }
}