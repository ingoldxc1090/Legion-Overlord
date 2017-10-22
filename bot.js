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

  	//Prefix Commands
  	if (message.content.startsWith(config.prefix)) {
    
    	//Ping Command
		if (message.content.startsWith(config.prefix + "ping")) {
			message.channel.send("Pong!");
		}
    
    	//Prefix-Setter Command
		if (message.content.startsWith(config.prefix + "prefix")) {
			if (message.content.split(" ").slice(1,2)[0] !== undefined){
				let newPrefix = message.content.split(" ").slice(1,2)[0];
				config.prefix = newPrefix;
				fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
				message.channel.send("Prefix changed to " + newPrefix);
				console.log("Prefix changed to " + newPrefix);
			} else {
			message.channel.send("No prefix defined");
			}
		}
    	
    	//Smite Command
    	if (message.content.startsWith(config.prefix + "smite")) {
     		message.channel.send("Smiting is not currently available.");
    	}
    	if (message.content.startsWith(config.prefix + "unsmite")){
    		message.channel.send("Unsmiting is not currently available.");
    	}
    }	
  
  		//Word Filter
    	const profanityLog = message.guild.channels.find('name', 'profanity_log');
          //n****r
          var arrayI = ["i", "1", "|"];
          var arrayG = ["g", "b", "6", "p", "q", "9", "4"];
          var arrayE = ["e", "3"];
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
  				var arrayF = ["f", "4"];
					var arrayA = ["a", "@", "e"];
  				var arrayO = ["o", "0", "e", "3", "i", "a", "@"];
  				var arrayT = ["t","+"];
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
          var arrayP = ["p", "q"];
          var arrayS = ["s", "$"];
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
});

client.login(config.token);