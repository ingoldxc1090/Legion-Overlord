const https = require('https');
const config = require('../config.json');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
    if(args[0] === "help") { //Sends command info for help argument
        const help = new Discord.RichEmbed()
            .setTitle("Eight Ball")
            .setColor(0xffdf00)
            .setDescription("Returns an answer from the magic eight ball.")
            .addField("Usage", `${config.prefix}8ball {question}`);
        message.channel.send(help);
        return;
    }

    if(args.length < 1){ //Returns error for no arguments entered
        message.channel.send("You must ask the 8 ball a question.");
        return;
    }

    var question = args.join('%20');
    question.replace("?","%3F");

    https.get(`https://8ball.delegator.com/magic/JSON/${question}`, (resp) => { //Makes a get request to International Chuck Norris Database API
        let data = '';

    resp.on('data', (chunk) => { //Writes data chuncks to variable as they are recieved
        data += chunk;
});

    resp.on('end', () => {
        var response = JSON.parse(data).magic.answer; //Parses joke from JSON response
    message.channel.send(response);
});
}).on("error", (err) => {
        console.error(err);
});
}