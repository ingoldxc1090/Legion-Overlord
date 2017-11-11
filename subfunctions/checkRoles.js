exports.run = (client, userRole, subjectRole) => {
    var comp = userRole.comparePositionTo(subjectRole);
    if(comp <= 0) {
        message.channel.send("You cannot use this command on this user.")
        return false;
    } else if(comp > 0) {
        return true;
    } else {
        console.error(err);
    }
}