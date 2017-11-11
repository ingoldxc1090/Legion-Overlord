let permissionLevel = require('../subfunctions/permissionLevel.js');
let checkRoles = require('../subfunctions/checkRoles.js');
exports.run = (client, message, args) => {
    var userRole = message.member.highestRole;
    var subjectRole = message.guild.roles.find('name', args.join());
    if(!permissionLevel.run(client, message, 3) || !checkRoles.run(client, userRole, subjectRole)) return;
        if(message.member.roles.exists('name', args.join())) {
            message.member.removeRole(message.guild.roles.find('name', args.join()));
        } else {
            message.member.addRole(message.guild.roles.find('name', args.join()));
        }
}
