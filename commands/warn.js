const fs = require("fs");
const Discord = require("discord.js");
const punishment = require('./commandData/punishment.json');
exports.run = (client, message, args, config) => {
    if(permissionLevel(client, message, config, 2)) {
        for(i = 0; i < punishment.offenders.length; i++) {
            if(args.mentions.users.first().id == punishment.offenders[i]) {
                punishment.warnCount[i]++;
                if(punishment.warnCount > 3) {
                    let mute = require('./mute.js');
                    mute.run(client, message, args, config);
                    return;
                }
                
            }
        }
    }
}