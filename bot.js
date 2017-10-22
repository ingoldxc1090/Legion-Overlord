const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");

client.on("ready", () => {
  console.log("Client started");
});

client.on("message", (message) => {
	if (message.author.bot) {
		return;
	} 

	//Legion Overlord Command
  	if (message.content.toLowerCase() === 'legion overlord') {
  		message.channel.send("I am here my subject. You may communicate with me using my currnt prefix, \"" + config.prefix + "\"");
  	}
 
  	//Word Filter
    const profanityLog = message.guild.channels.find('name', 'profanity_log');
    //Permutation list
	const arrayA = ["a", "@", "e"];
    const arrayE = ["e", "3"];
    const arrayF = ["f", "4"];
    const arrayG = ["g", "b", "6", "p", "q", "9", "4"];
	const arrayI = ["i", "1", "|"];
 	const arrayO = ["o", "0", "e", "3", "i", "a", "@"];
    const arrayP = ["p", "q"];
    const arrayS = ["s", "$"];
  	const arrayT = ["t","+"];

    //n****r
    for (i = 0; i < arrayI.length; i++) {
        for (j = 0; j < arrayG.length; j++) {
            for (k = 0; k < arrayG.length; k++) {
                for (l = 0; l < arrayE.length; l++) {
                    var wordyDurd = "n" + arrayI[i] + arrayG[j] + arrayG[k] + arrayE[l] + "r";
                	if (message.content.toLowerCase().includes(wordyDurd)) {
                        message.delete();
                        console.log("Deleted\n\tOffense Type: n****r\n\tMessage: " + message.content + "\n\tFrom: " + message.author);
                        profanityLog.send("Deleted\n\tOffense Type: n* * * *r\n\tMessage: " + message.content + "\n\tFrom: " + message.author);
                        message.channel.send(message.author + " thou shalt not use such vile language!!!");
                        return;
                    }
                }
            }
        }
    }

	//f*ggot
    for (i = 0; i < arrayF.length; i++) {
        for (j = 0; j < arrayA.length; j++) {
            for (k = 0; k < arrayG.length; k++) {
                for (l = 0; l < arrayG.length; l++) {
                    for (m = 0; m < arrayO.length; m++) {
                        for (n = 0; n < arrayT.length; n++) {
                        	var wordyDurd = arrayF[i] + arrayA[j] + arrayG[k] + arrayG[l] + arrayO[m] + arrayT[n];
                            var wordyDurdShort = arrayF[i] + arrayA[j] + arrayG[k];
                			if (message.content.toLowerCase().includes(wordyDurd)) {
                          		message.delete();
                          		console.log("Deleted\n\tOffense Type: f****t\n\tMessage: " + message.content + "\n\tFrom: " + message.author);
                            	profanityLog.send("Deleted\n\tOffense Type: f* * * *t\n\tMessage: " + message.content + "\n\tFrom: " + message.author);
                         		message.channel.send(message.author + " thou shalt not use such vile language!!!");
                             	return;
                            }
                        }
                	}
                }
            }
        }
    }

    //f*g
    for (i = 0; i < arrayF.length; i++) {
        for (j = 0; j < arrayA.length; j++) {
            for (k = 0; k < arrayG.length; k++) {
                var wordyDurd = arrayF[i] + arrayA[j] + arrayG[k];
                if (message.content.toLowerCase().includes(wordyDurd) && message.content.charAt(message.content.search(wordyDurdShort)-1) !== " ") {
                    message.delete();
                    console.log("Deleted\n\tOffense Type: f****t\n\tMessage: " + message.content + "\n\tFrom: " + message.author);
                    profanityLog.send("Deleted\n\tOffense Type: f* * * *t\n\tMessage: " + message.content + "\n\tFrom: " + message.author);
                    message.channel.send(message.author + " thou shalt not use such vile language!!!");
                    return;
                }
            }
        }
    }
     
    //p*ssy
    for (i = 0; i < arrayP.length; i++) {
        for (j = 0; j < arrayS.length; j++) {
            for (k = 0; k < arrayS.length; k++) {
                var wordyDurd = arrayP[i] + "u" + arrayS[j] + arrayS[k] + "y";
                var wordyDurdShort = arrayP[i] + "u" + arrayS[j] + arrayS[k];
                if (message.content.toLowerCase().includes(wordyDurd) || (message.content.toLowerCase().includes(wordyDurdShort) && message.content.charAt(message.content.search(wordyDurdShort)-1) !== " ")) {
                    message.delete();
                    console.log("Deleted\n\tOffense Type: p***y\n\tMessage: " + message.content + "\n\tFrom: " + message.author);
                    profanityLog.send("Deleted\n\tOffense Type: p* * *y\n\tMessage: " + message.content + "\n\tFrom: " + message.author);
                    message.channel.send(message.author + " thou shalt not use such vile language!!!");
                    return;
                }
            }
        }
    }

    //exception for if the message doesn't begin with the prefix
    if (message.content.indexOf(config.prefix) !== 0) {
        return;
    }
    //defines command and argumends
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    //Command handler for running commands as individual files
    try{
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args, config);
    } catch (err) {
        console.error(err);
    }
});

client.login(config.token);