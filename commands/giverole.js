let permissionLevel = require('../subfunctions/permissionLevel.js');
let checkRoles = require('../subfunctions/checkRoles.js');
exports.run = (client, message, args) => {
    if(args[0] === "help") { //Sends command info for help argument
        const help = new Discord.RichEmbed()
            .setTitle("Give Role")
            .setColor(0xffdf00)
            .setDescription("Gives a specified role to the user")
            .addField("Usage", `${config.prefix}giverole {roleName}`);
        message.channel.send(help);
        return;
    }
    if(message.mentions.members.first() != undefined) {
        var member = message.mentions.members.firts()
        delete args[0]; 
        var userRole = message.member.highestRole;
        var subjectRole = message.guild.roles.find('name', args.join());
        if(!permissionLevel.run(client, message, 3) || !checkRoles.run(client, userRole, subjectRole)) return;
            if(member.roles.exists('name', args.join())) {
                member.removeRole(message.guild.roles.find('name', args.join()));
            } else {
                member.addRole(message.guild.roles.find('name', args.join()));
            }
        }
    } else {
        var userRole = message.member.highestRole;
        var subjectRole = message.guild.roles.find('name', args.join());
        if(!permissionLevel.run(client, message, 3) || !checkRoles.run(client, userRole, subjectRole)) return;
            if(message.member.roles.exists('name', args.join())) {
                message.member.removeRole(message.guild.roles.find('name', args.join()));
            } else {
                message.member.addRole(message.guild.roles.find('name', args.join()));
            }
        }
    }
}
