exports.run = (client, message, config, level) =>
{
    var userRoles = message.member.roles.array();
    var hasRole = false;
    if (level == 1) {
        for (i = 0; i < userRoles.length; i++) {
            if (userRoles[i] === config.vipRole) {
                hasRole = true;
            }
        }
    } else if (level == 2) {
        for (i = 0; i < userRoles.length; i++) {
            if (userRoles[i] === config.modRole) {
                hasRole = true;
            }
        }
    } else if (level == 3) {
        for (i = 0; i < userRoles.length; i++) {
            if (userRoles[i] === config.adminRole) {
                hasRole = true;
            }
        }
    } else {
        console.err("No role level specified")
    }
    if (hasRole) {
        return true;
    } else {
        message.channel.send("You do not have permission to use this command.");
        return false;
    }
}