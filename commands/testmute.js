const fs = require("fs");
const data = require('./commandData/testmute.json');
const permissionLevel = require('../subfunctions/permissionLevel.js');
const checkRoles = require('../subfunctions/checkRoles.js');
exports.run = (client, message, args) => {
    if(!permissionLevel.run(client, message, 3) && !checkRoles.run(client, message)) return;
    var channels = message.guild.channels.array();
    var userPermsissions = [];
    for(i = 0, i < data.mutedUsers; i++) {
        if(message.mentions.users.first().id == data.mutedUsers[i]) {
            for(j = 0; j < channels.length; j++) {
                channels[j].overwritePermissions(message.mentions.members.first(), {'SEND_MESSAGES': data.usersPermissions[i][j]});
            }
            delete data.mutedUsers[i];
            delete data.usersPermissions[i];
            fs.writeFile("./commandData/testmute.json", JSON.stringify(data), (err) => console.error);
            return;
        }

    }
    for(j = 0; j < channels.length; j++) {
        userPermsissions[j] = channels.permissionsFor(message.mentions.members.first()).find('flag', 'SEND_MESSAGES');
        channels[j].overwritePermissions(message.mentions.members.first(), {'SEND_MESSAGES': false});
    }
    data.mutedUsers[data.mutedUsers.length] = message.mentions.users.first().id;
    data.usersPermissions[data.usersPermissions.length] = userPermsissions;
    fs.writeFile("./commandData/testmute.json", JSON.stringify(data), (err) => console.error);
}