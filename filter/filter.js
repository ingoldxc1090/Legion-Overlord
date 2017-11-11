exports.run = (client, text, member, type) => {
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
    const evidence = text;
    const user = "**" + member.user.id + "*";

    //n****r
    for (i = 0; i < arrayI.length; i++) {
        for (j = 0; j < arrayG.length; j++) {
            for (k = 0; k < arrayG.length; k++) {
                for (l = 0; l < arrayE.length; l++) {
                    var wordyDurd = "n" + arrayI[i] + arrayG[j] + arrayG[k] + arrayE[l] + "r";
                    if (text.toLowerCase().includes(wordyDurd)) {
                        message.delete();
                        console.log("Deleted\n\tOffense Type: n****r\n\tMessage: " + text + "\n\tFrom: " + member.user);
                        message.channel.send(member.user + " thou shalt not use such vile language!!!");
                        var reason = "Language";
                        var args = [user, reason, evidence];
                        try {
                            let warn = require(`../commands/warn.js`);
                            warn.run(client, message, args, true);
                        } catch (err) {
                            console.error(err);
                        }
                        return true;
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
                            if (text.toLowerCase().includes(wordyDurd)) {
                                console.log("Deleted\n\tOffense Type: f****t\n\tMessage: " + text + "\n\tFrom: " + member.user);
                                message.channel.send(member.user + " thou shalt not use such vile language!!!");
                                var reason = "Language";
                                var args = [user, reason, evidence];
                                try {
                                    let warn = require(`../commands/warn.js`);
                                    warn.run(client, message, args, true);
                                } catch (err) {
                                    console.error(err);
                                }
                                return true;
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
                if (text.toLowerCase().includes(wordyDurd) && text.charAt(text.search(wordyDurd) - 1) !== ' ') {
                    message.delete();
                    console.log("Deleted\n\tOffense Type: f****t\n\tMessage: " + text + "\n\tFrom: " + member.user);
                    message.channel.send(member.user + " thou shalt not use such vile language!!!");
                    var reason = "Language";
                    var args = [user, reason, evidence];
                    try {
                        let warn = require(`../commands/warn.js`);
                        warn.run(client, message, args, true);
                    } catch (err) {
                        console.error(err);
                    }
                    return true;
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
                if (text.toLowerCase().includes(wordyDurd) || (text.toLowerCase().includes(wordyDurdShort) && text.charAt(text.search(wordyDurdShort) - 1) !== ' ')) {
                    message.delete();
                    console.log("Deleted\n\tOffense Type: p***y\n\tMessage: " + text + "\n\tFrom: " + member.user);
                    message.channel.send(member.user + " thou shalt not use such vile language!!!");
                    var reason = "Language";
                    var args = [user, reason, evidence];
                    try {
                        let warn = require(`../commands/warn.js`);
                        warn.run(client, message, args, true);
                    } catch (err) {
                        console.error(err);
                    }
                    return true;
                }
            }
        }
    }

    //q*eer
    for (i = 0; i < arrayQ.length; i++) {
        for (j = 0; j < arrayU.length; j++) {
            for (k = 0; k < arrayE.length; k++) {
                for (l = 0; l < arrayE.length; l++) {
                    for (m = 0; m < arrayR.length; m++) {
                        var wordyDurd = arrayQ[i] + arrayU[j] + arrayE[k] + arrayE[l] + arrayR[m];
                        if (text.toLowerCase().includes(wordyDurd) || (text.toLowerCase().includes(wordyDurdShort) && text.charAt(text.search(wordyDurdShort) - 1) !== ' ')) {
                            message.delete();
                            console.log("Deleted\n\tOffense Type: p***y\n\tMessage: " + text + "\n\tFrom: " + member.user);
                            message.channel.send(member.user + " thou shalt not use such vile language!!!");
                            var reason = "Language";
                            var args = [user, reason, evidence];
                            try {
                                let warn = require(`../commands/warn.js`);
                                warn.run(client, message, args, true);
                            } catch (err) {
                                console.error(err);
                            }
                            return true;
                        }
                    }
                }
            }
        }
    }
}