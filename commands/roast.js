const permissionLevel = require('../subfunctions/permissionLevel.js');
const Discord = require("discord.js");
const config = require('../config.json');
exports.run = (client, message, args, config) => { //Sends command info for help argument
    if(args[0] === "help") {
        const help = new Discord.RichEmbed()
            .setTitle("Roast")
            .setColor(0xffdf00)
            .setDescription("Provides a roast, roasts you, or roasts a specified user with commands to add and remove roasts.")
            .addField("Usage", `${config.prefix}roast\n${config.prefix}roast me\n${config.prefix}roast @user\n${config.prefix}roast add {roast}\n${config.prefix}roast remove {roast}`);
        message.channel.send(help);
        return;
    }
    var roastArray = ["Fuck you",
        "Your mother was a whore and your father smelled of elderberries!",
        "Do your parents even realize they’re living proof that two wrongs don’t make a right?",
        "Do you ever wonder what life would be like if you’d gotten enough oxygen at birth?",
        "You always bring me so much joy—as soon as you leave the room.",
        "The only way you’ll ever get laid is if you crawl up a chicken’s ass and wait.",
        "I’d tell you to go fuck yourself, but that would be cruel and unusual punishment.",
        "If I threw a stick, you’d leave, right?",
        "If I wanted a bitch, I'd have bought a dog.",
        "Someday you'll go far... and I hope you stay there.",
        "Save your breath - you'll need it to blow up your date.",
        "I thought of you today. It reminded me to take the garbage out.",
        "With a face like yours, I wish I was blind.",
        "The only positive thing about you is your HIV status.",
        "Do you still love nature....despite what it did to you?",
        "The only thing that goes erect when I'm near you is my middle finger.",
        "Why don't you slip into something more comfortable? Like a coma.",
        "Your asinine simian countenance alludes that your fetid stench has annulled the anthropoid ape species diversity.",
        "Don't feel bad. A lot of people have no talent!",
        "You’re as useless as a knitted condom.",
        "Your birth certificate is an apology from the condom factory.",
        "Some babies were dropped on their heads but you were clearly thrown at a wall."];
    var i = Math.floor(Math.random() * roastArray.length);
    if (args < 1) { //If no arguments sends a random roast
        message.channel.send(roastArray[i]);
    } else if (args[0] === 'me') { //If argument "me" replies to the sender
        message.reply(roastArray[i]);
    } else if (message.mentions.users.first() !== null) { //If user is mentioned mentions a the user in the reply
        let member = message.mentions.users.first();
        message.channel.send(member + " " + roastArray[i]);
    } else if (args[0] === 'add') { //If add argument adds the specified roast to the end of the array
        if(permissionLevel.run(client, message, 3)) {
            roastArray[roastArray.length] = args.shift().join(' ');
        }
    } else if (args[0] === 'remove') { //If remove argument removes the specified roast
        if(permissionLevel.run(client, message, 3)) {
            for (j = 0; j < roastArray.length; j++) {
                if (roastArray[j].contains(args.shift().join(' '))) {
                    delete roastArray[j];
                } else {
                    message.channel.send("I cannot find that roast.");
                }

            }
        }
    } else { //Error for unrecognized argument
        message.channel.send("Unexpected Argument. Acceptable arguments are \"me\", \"@user\", \"add {roast}\", and \"remove {roast}\" or use no argument for an epic roast.")
    }
}
