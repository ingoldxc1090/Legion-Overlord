exports.run = (client, message, args) =>
{
    if (args.length < 1) {
        message.channel.send(message.author.avatarURL);
    } else {
        let member = message.mentions.members.first();
        if (member == null) {
            message.channel.send("You must mention a user.")
        } else {
            message.channel.send(member.user.avatarURL);
        }
    }
}