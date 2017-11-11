exports.run = (client, message) => {
    message.delete();
    console.log("Deleted\n\tOffense Type: Language\n\tMessage: " + text + "\n\tFrom: " + member.user);
    message.channel.send(member.user + " thou shalt not use such vile language!!!");
    const user = "**" + message.author.id + "*";
    const evidence = message.content;
    var args = [user, 'Language', evidence];
    try {
        let warn = require(`../commands/warn.js`);
        warn.run(client, message, args, true);
    } catch (err) {
        console.error(err);
    }
}
