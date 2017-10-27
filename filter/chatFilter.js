exports.run = (client, message, config) =>
{
    //Word Filter
    //Permutation list
    const arrayA = ["a", "@", "e"];
    const arrayE = ["e", "3"];
    const arrayF = ["f", "4"];
    const arrayG = ["g", "b", "6", "p", "q", "9", "4"];
    const arrayI = ["i", "1", "|"];
    const arrayO = ["o", "0", "e", "3", "i", "a", "@"];
    const arrayP = ["p", "q"];
    const arrayQ = ["q", "p", "g,", "c"];
    const arrayR = ["r", "®"];
    const arrayS = ["s", "$"];
    const arrayT = ["t", "+"];
    const arrayU = ["u", "w", "μ", "v"];
    const evidence = message.content;

    //n****r
    for (i = 0; i < arrayI.length; i++) {
        for (j = 0; j < arrayG.length; j++) {
            for (k = 0; k < arrayG.length; k++) {
                for (l = 0; l < arrayE.length; l++) {
                    var wordyDurd = "n" + arrayI[i] + arrayG[j] + arrayG[k] + arrayE[l] + "r";
                    if (message.content.toLowerCase().includes(wordyDurd)) {
                        message.delete();
                        console.log("Deleted\n\tOffense Type: n****r\n\tMessage: " + message.content + "\n\tFrom: " + message.author);
                        message.channel.send(message.author + " thou shalt not use such vile language!!!");
                        var reason = "Language";
                        var args = [message.author, reason, evidence];
                        try {
                            let warn = require(`../commands/warn.js`);
                            warn.run(client, message, args, config, true);
                        } catch (err) {
                            console.error(err);
                        }
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
                                message.channel.send(message.author + " thou shalt not use such vile language!!!");
                                var reason = "Language";
                                var args = [message.author, reason, evidence];
                                try {
                                    let warn = require(`../commands/warn.js`);
                                    warn.run(client, message, args, config, true);
                                } catch (err) {
                                    console.error(err);
                                }
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
                if (message.content.toLowerCase().includes(wordyDurd) && message.content.charAt(message.content.search(wordyDurd) - 1) !== ' ') {
                    message.delete();
                    console.log("Deleted\n\tOffense Type: f****t\n\tMessage: " + message.content + "\n\tFrom: " + message.author);
                    message.channel.send(message.author + " thou shalt not use such vile language!!!");
                    var reason = "Language";
                    var args = [message.author, reason, evidence];
                    try {
                        let warn = require(`../commands/warn.js`);
                        warn.run(client, message, args, config, true);
                    } catch (err) {
                        console.error(err);
                    }
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
                if (message.content.toLowerCase().includes(wordyDurd) || (message.content.toLowerCase().includes(wordyDurdShort) && message.content.charAt(message.content.search(wordyDurdShort) - 1) !== ' ')) {
                    message.delete();
                    console.log("Deleted\n\tOffense Type: p***y\n\tMessage: " + message.content + "\n\tFrom: " + message.author);
                    message.channel.send(message.author + " thou shalt not use such vile language!!!");
                    var reason = "Language";
                    var args = [message.author, reason, evidence];
                    try {
                        let warn = require(`../commands/warn.js`);
                        warn.run(client, message, args, config, true);
                    } catch (err) {
                        console.error(err);
                    }
                    return;
                }
            }
        }
    }

    //q*eer
/*    for (i = 0; i < arrayQ.length; i++) {
        for (j = 0; j < arrayU.length; j++) {
            for (k = 0; k < arrayE.length; k++) {
                for (l = 0; l < arrayE.length; l++) {
                    for (m = 0; m < arrayR.length; m++) {
                        var wordyDurd = arrayQ[i] + arrayU[j] + arrayE[k] + arrayE[l] + arrayR[m];
                        if (message.content.toLowerCase().includes(wordyDurd) || (message.content.toLowerCase().includes(wordyDurdShort) && message.content.charAt(message.content.search(wordyDurdShort) - 1) !== ' ')) {
                            message.delete();
                            console.log("Deleted\n\tOffense Type: p***y\n\tMessage: " + message.content + "\n\tFrom: " + message.author);
                            message.channel.send(message.author + " thou shalt not use such vile language!!!");
                            var reason = "Language";
                            var args = [message.author, reason, evidence];
                            try {
                                let warn = require(`../commands/warn.js`);
                                warn.run(client, message, args, config, true);
                            } catch (err) {
                                console.error(err);
                            }
                            return;
                        }
                    }
                }
            }
        }
    }
    */
}