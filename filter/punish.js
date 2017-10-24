const fs = require("fs");
const Discord = require("discord.js");
const punishment = require("../punishment.json")
exports.run = (client, message, punishmentCounter, reason, evidence) => {
  var punishment;
  var userTitle;
  var userDesc;
  var color;
  const moderationLog = message.guild.channels.find('name', 'moderation_log');
  for (z = 0; punishmentCounter !== null && z < punishmentCounter.length ; z++) {
    //offenseCounter
    if (message.author === punishmentCounter[z].user) {
      punishmentCounter[z][1]++;
      //fs.writeFile("../punishment.json", JSON.stringify(punishmentCounter));
      //muteCounter
      if (punishmentCounter[z][1] == 3) {
        punishmentCounter[z][1] = 0;
        punishmentCounter[z][2]++;
        //fs.writeFile("../punishment.json", JSON.stringify(punishmentCounter));
        //kickCounter
        if (punishmentCounter[z][2] == 5) {
          punishmentCounter[z][2] = 0;
          punishmentCounter[z][3]++;
          //fs.writeFile("../punishment.json", JSON.stringify(punishmentCounter));
          //banCounter
          if (punishmentCounter[z][3] == 3) {
            punishmentCounter.splice(z,1); //this line should remove offender from the list entirely
            //fs.writeFile("../punishment.json", JSON.stringify(punishmentCounter));
            punishment = "User Banned";
            userTitle = "Ban Notification";
            userDesc = "You're lucky we don't have a ban command yet. You have been banned as a result of 3 kicks";
            //color = ;
            return;
            //banCommand here  >>>> <<<<
          } else {
            punishment = "User Kicked";
            userTitle = "Kick Noticiation";
            userDesc `You're lucky we don't have a kick command yet.\nThis is kick #${punishmentCounter[z][3]} of 3.\n3 kicks will result in a ban.`;
            //color = ;
            //kickCommand here  >>>> <<<<
          }
        } else {
          punishment = "User Muted";
          userTitle = "Mute Notification";
          userDesc = `You're lucky we don't have a mute command yet.\nThis is mute #${punishmentCounter[z][2]} of 5.\n5 mutes will result in a kick.`;
          //color = ;
          //muteCommand here  >>>> <<<<
        }
      } else {
        punishment = "User Infracted";
        userTitle = "Infraction Noficication";
        userDesc = `You have received **${punishmentCounter[z][1]}/3** infractions.\n3 will result in a temporary mute and a step towards the next punishment.`;
        //color = ;
      }
      const DMembed = new Discord.RichEmbed()
        .setTitle(userTitle)
        //.setColor(color)
        .setDescription(userDesc)
        .addField("Reason", reason)
        .addField("Evidence", evidence)
        .setTimestamp()
        .setFooter("Contact an admin if you feel you have been wrongfully punished");
      message.author.send(DMembed);
      const logEmbed = new Discord.Richembed()
        .setTitle(punishment)
        .setDescription(message.author)
        //.setColor(color);
        .addField("Reason", reason)
        .addField("Evidence", evidence)
        .setTimestamp();
      moderationLog.send(logEmbed);
      return;
    }   
  }
  punishmentCounter[punishmentCounter.length] = [message.author, 1, 0, 0]
  //fs.writeFile("../punishment.json", JSON.stringify(punishmentCounter.push({message.author, 1, 0, 0}));
  punishment = "User Infracted"
  userTitle = "Infraction Notification";
  userDesc = `You have received **${punishmentCounter[z][1]}/3** infractions.\n3 will result in a temporary mute and a step towards the next punishment.`;
  //color = ;
  const DMembed = new Discord.RichEmbed()
    .setTitle(userTitle)
    //.setColor(color)
    .setDescription(userDesc)
    .addField("Reason", reason)
    .addField("Evidence", evidence)
    .setTimestamp()
    .setFooter("Contact an admin if you feel you have been wrongfully punished");
  message.author.send(DMembed);
  const logEmbed = new Discord.RichEmbed()
    .setTitle(punishment)
    .setDescription(message.author)
    //.setColor(color);
    .addField("Reason", reason)
    .addField("Evidence", evidence)
    .setTimestamp();
  moderationLog.send(logEmbed);
}