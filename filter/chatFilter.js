exports.run = (client, message, punishmentCounter) => {
    const arrayBlackWords = ["nig", "nigger", "fag", "faggot", "jew", "queer", "pussy"]; // Blacklist, Words that will be filtered
    const arrayWhiteWords = [
        [
            // Add non-profanity words here that contain "n*g"
        ],
        [], // Don't add anything here, any words that contain "n*gger" will contain "n*g"
        [
            // Add non-profanity words here that contain "f*g"
        ],
        [], // Don't add anything here, any words that contain "f*ggot" will contain "f*g"
        [
            // Add non-profanity words here that contain "jew"
        ],
        [
            // Add non-profanity words here that contain "q*eer" (If there are any)
        ],
        [
            // Add non-profanity words here that contain "p*ssy" (If there are any)
        ],
    ]; // Whitelist, words that will be exempted from being checked against the blacklist
    
    var userMessage = message.content; 
    
    for (i = 0; i < arrayBlacklistedWords.length; i ++) // Checks the message against every profanity word
    {
        for (j = 0; j < arrayWhitelistedWords.length; j ++) // 
        {
            if (userMessage.toLowerCase().includes(arrayWhiteWords[i][j])) // Checks the message for whitelisted words // Also please make sure I'm doing to 2-dimensional arrays right
            {
                userMessage = userMessage.replace(arrayWhiteWords[i][j], ""); // Deletes the whitelisted word from userMessage so no further profanity checks detect it as a curse word
            }
        }
        
        // Checking what's left of the message for profanity, punishments, logs, messages, etc. go here.
        
        // I would reccomend making a function that compares two inputs - the message and a blacklisted word to test it against
        // I didn't make one because I don't know how to make functions in real js
        // And then runs a big loop methodically obfuscating the second input and checking it against the first input
        // To see if it is a word that tries to bypass the filter
        
        // Also make the program skip out of this for loop after detecting a curse word so it won't spam if there are more than one in the message
    }
}
/*
    
    const arrayBlackWords = ["nig", "nigger", "fag", "faggot", "jew", "queer", "pussy"]; // Blacklisted words
    const arrayWhiteWordsNig = ["allnighter", "benight", "benighted", "benightedly", "benign", "benignity", "benignly", "denigrate", "denigrated", "denigrates", "denigrating", "denigration", "denigrations", "denigrative", "denigrator", "denigrators", "denigratory", "enigma", "enigmas", "enigmata", "enigmatic", "enigmatical", "enigmatically", "enigmaticalness", "enigmatisation", "enigmatisations", "enigmatise", "enigmatised", "enigmatises", "enigmatising", "enigmatist", "enigmatists", "enigmatization", "enigmatizations", "enigmatize", "enigmatized", "enigmatizes", "enigmatizing", "enigmatographer", "enigmatographers", "enigmatographic", "enigmatographical", "enigmatography", "enigmatologic", "enigmatological", "enigmatologist", "enigmatologists", "enigmatology", "fortnight", "fortnightlies", "fortnightly", "fortnights", "goodnight", "goodnights", "knight", "knighted", "knighthood", "knighthoods", "knighting", "knightless", "knightlier", "knightliest", "knightliness", "knightly", "knights", "marconigram", "marconigrams", "marconigraph", "marconigraphed", "marconigraphing", "marconigraphs", "marconigraphy", "midnight", "midnights", "nigh", "night", "nightbird", "nightbirds", "nightblind", "nightblindness", "nightcap", "nightcaps", "nightclass", "nightclasses", "nightclothes", "nightclub", "nightclubber", "nightclubbers", "nightclubbing", "nightclubs", "nightcrawler", "nightcrawlers", "nightdress", "nightdresses", "nightfall", "nightglow", "nightglows", "nightgown", "nightgowns", "nighthawk", "nighthawks", "nightie", "nighties", "nightingale", "nightingales", "nightjars", "nightlife", "nightlifes", "nightlight", "nightlights", "nightlike", "nightlong", "nightly", "nightmare", "nightmares", "nightmarish", "nightmarishly", "nightmarishness", "nightmarishnesses", "nights", "nightscope", "nightscopes", "nightshade", "nightshades", "nightshift", "nightshifts", "nightshirt", "nightshirts", "nightspot", "nightspots", "nightstand", "nightstands", "nightstick", "nightsticks", "nighttime", "nightwalk", "nightwalker", "nightwalkers", "nightwalking", "nightwatchman", "nightwatchmen", "nightwear", "nightwork", "nightworker", "nightworkers", "nonigneous", "nonignitability", "nonignitable", "nonovernight", "overnight", "overnighted", "overnighter", "overnighters", "overnighting", "overnights", "pnigerophobe", "pnigerophobes", "pnigerophobia", "pnigerophobic", "pnigerophobics", "pnigophobe", "pnigophobes", "pnigophobia", "pnigophobic", "pnigophobics", "shenanigan", "shenanigans", "sniggeringly", "sniggle", "snigglers", "tonight", "tonights", "unenigmatic", "unknightly", "weeknight", "weeknights", "wellnigh", "yesternight"]; // Permissable words that contain 'nig'
                             
    const arrayA = ["a", "@", "e"];
    const arrayB = ["b"];
    const arrayC = ["c"];
    const arrayD = ["d"];
    const arrayE = ["e", "3"];
    const arrayF = ["f", "4"];
    const arrayG = ["g", "b", "6", "p", "q", "9", "4"];
    const arrayH = ["h"];
    const arrayI = ["i", "1", "|"];
    const arrayJ = ["j"];
    const arrayK = ["k"];
    const arrayL = ["l"];
    const arrayM = ["m"];
    const arrayN = ["n"];
    const arrayO = ["o", "0", "e", "3", "i", "a", "@"];
    const arrayP = ["p", "q"];
    const arrayQ = ["q", "p", "g,", "c"];
    const arrayR = ["r", "®"];
    const arrayS = ["s", "$"];
    const arrayT = ["t","+"];
    const arrayU = ["u", "w", "μ", "v"];
    const arrayV = [];
    const arrayW = [];
    const arrayX = [];
    const arrayY = [];
    const arrayZ = [];
    const evidence = message.content;

    //n****r
    for (i = 0; i < arrayI.length; i++) {
        for (j = 0; j < arrayG.length; j++) {
            for (k = 0; k < arrayG.length; k++) {
                for (l = 0; l < arrayE.length; l++) 
                {
                    var wordyDurd = "n" + arrayI[i] + arrayG[j] + arrayG[k] + arrayE[l] + "r";
                    if (message.content.toLowerCase().includes(wordyDurd)) 
                    {
                        message.delete();
                        console.log("Deleted\n\tOffense Type: n****r\n\tMessage: " + message.content + "\n\tFrom: " + message.author);
                        message.channel.send(message.author + " thou shalt not use such vile language!!!");
                        var reason = "Language - n * * * * r";
                        try 
                        {
                            let punish = require(`./punish.js`);
                            punish.run(client, message, punishmentCounter, reason, evidence);
                        } catch (err) 
                        {
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
                                var reason = "Language - f * * * * t";
                                try {
                                    let punish = require(`./punish.js`);
                                    punish.run(client, message, punishmentCounter, reason, evidence);
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
                if (message.content.toLowerCase().includes(wordyDurd) && message.content.charAt(message.content.search(wordyDurd)-1) !== ' ') {
                    message.delete();
                    console.log("Deleted\n\tOffense Type: f****t\n\tMessage: " + message.content + "\n\tFrom: " + message.author);
                    message.channel.send(message.author + " thou shalt not use such vile language!!!");
                    var reason = "Language - f*g";
                    try {
                        let punish = require(`./punish.js`);
                        punish.run(client, message, punishmentCounter, reason, evidence);
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
                if (message.content.toLowerCase().includes(wordyDurd) || (message.content.toLowerCase().includes(wordyDurdShort) && message.content.charAt(message.content.search(wordyDurdShort)-1) !== ' ')) {
                    message.delete();
                    console.log("Deleted\n\tOffense Type: p***y\n\tMessage: " + message.content + "\n\tFrom: " + message.author);
                    message.channel.send(message.author + " thou shalt not use such vile language!!!");
                    var reason = "Language - p * * * y";
                    try {
                        let punish = require(`./punish.js`);
                        punish.run(client, message, punishmentCounter, reason, evidence);
                    } catch (err) {
                        console.error(err);
                    }
                    return;
                }
            }
        }
    }

    //q*eer
    for (i = 0; i < arrayQ.length; i++){
        for (j = 0; j < arrayU.length; j++){
            for (k = 0; k < arrayE.length; k++){
                for (l = 0; l < arrayE.length; l++){
                    for (m = 0; m < arrayR.length; m++){
                        var wordyDurd = arrayQ[i] + arrayU[j] + arrayE[k] + arrayE[l] + arrayR[m];
                        if (message.content.toLowerCase().includes(wordyDurd) || (message.content.toLowerCase().includes(wordyDurdShort) && message.content.charAt(message.content.search(wordyDurdShort)-1) !== ' ')) {
                            message.delete();
                            console.log("Deleted\n\tOffense Type: p***y\n\tMessage: " + message.content + "\n\tFrom: " + message.author);
                            message.channel.send(message.author + " thou shalt not use such vile language!!!");
                            var reason = "Language - q * * * r";
                            try {
                                let punish = require(`./punish.js`);
                                punish.run(client, message, punishmentCounter, reason, evidence);
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
