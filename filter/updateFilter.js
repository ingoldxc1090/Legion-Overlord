exports.run = (client, oldMember, newMember) => {
    newMember.setNickname(oldMember.nickname);
    console.log("Reverted Nickname to Previous\n\tOffense Type: Inappropriate Nickname\n\tNickname: " + text + "\n\tFrom: " + member.user);
    newMember.user.send(newMember.user + " thou shalt not use such vile language!!!");
    const evidence = newMember.nickname;
    var args = [newMember, 'Language', evidence];
    try {
        let warn = require(`../commands/warn.js`);
        warn.run(client, null, args, true);
    } catch (err) {
        console.error(err);
    }
}
