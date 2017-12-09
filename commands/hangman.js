const https = require('https');
const config = require('../config.json');
const Discord = require('discord.js');
const hangData = require('./commandData/hangman.json');

gallows = function(guesses) {
    switch (guesses){
        case 6:
            return "\`\`\`\n_________\n|         |\n|\n|\n|\n|\n|\n";
            break;
        case 5:
            return "\`\`\`\n_________\n|         |\n|         o\n|\n|\n|\n|\n";
            break;
        case 4:
            return "\`\`\`\n_________\n|         |\n|         o\n|         |\n|\n|\n|\n";
            break;
        case 3:
            return "\`\`\`\n_________\n|         |\n|         o\n|        /|\n|\n|\n|\n";
            break:
        case 2:
            return "\`\`\`\n_________\n|         |\n|         o\n|        /|\\\n|\n|\n|\n";
            break;
        case 1:
            return "\`\`\`\n_________\n|         |\n|         o\n|        /|\\\n|        /\n|\n|\n";
            break;
        case 0:
            return "\`\`\`\n_________\n|         |\n|         o\n|        /|\\\n|        / \\\n|\n|\n";
            break;
        case -1:
            return "\`\`\`\n_________\n|         |\n|\n|\n|         o\n|        /|\\\n|        / \\\n";
            break;
    }
}

exports.run = (client, message, args) => {
    if(args[0] === "help") { //Sends command info for help argument
        const help = new Discord.RichEmbed()
            .setTitle("Hangman")
            .setColor(0xffdf00)
            .setDescription("Starts a game of hangman.")
            .addField("Usage", `${config.prefix}8ball`);
        message.channel.send(help);
        return;
    }
    for(i=0; i<hangData.users.length; i++){
        if(hangData.users[i] == author.id) {
            message.channel.send("You're already playing a game of hangman.");
            return;
        }
    }
    https.get(`http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=false&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=4&maxLength=12&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5`, (resp) => { //Makes a get request to International Chuck Norris Database API
        let data = '';

        resp.on('data', (chunk) => { //Writes data chuncks to variable as they are recieved
            data += chunk;
        });

        resp.on('end', () => {
            var word = JSON.parse(data).word; //Parses joke from JSON respons
            var underscores = " ";
            hangData.words[hangData.words.length]=word;
            hangData.users[hangData.users.length]=author.id;
            hangData.currentGuesses[hangData.currentGuesses.length]=0;
            hangData.remainingGuesses[hangData.remainingGuesses.length]=6;
            for(i=0; i<word.length;i++) underscores.concat("_");
            hangData.underscores[hangData.underscores.length]=underscores;

            //Write file

            author.send(gallows(0)+underscores+"\nMake your first guess.\n\`\`\`");
        });
    }).on("error", (err) => {
        console.error(err);
    });

}

exports.guess = (client, message, args) => {
    var hasGame = false;
    var userNum = 0;
    for(i=0; i<hangData.users.length; i++){
        if(message.author.id == hangData.users[i]) {
            hasGame = true;
            userNum = i;
        }
    }
    if(!hasGame) return;
    var guess = false;
    var positions = [];
    var correctCount = 0;
    for(i=0; i<hangData.words[userNum].length; i++){
        if(args[0].charAt(0) == hangData.words[userNum].charAt(i)) {
            guess = true;
            positions[correctCount] = i;
            correctCount++;
        }
    }
    if(guess){
        undArr = underscores.split("");
        for(i=0; i<positions.length; i++){
            undArr[positions[i]] = args[0];
        }
        hangData.underscores[userNum]=undArr.join("")
        var send = ""
        if(hangData.words

    }else{

    }
}