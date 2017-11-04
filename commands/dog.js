const Discord = require('discord.js');
const config = require('../config.json');
const https = require('https');
exports.run = (client, message, args) => {
    if(args[0] === "help") { //Sends command info for help argument
        const help = new Discord.RichEmbed()
            .setTitle("Dog")
            .setColor(0xffdf00)
            .setDescription("Returns a random dog picture.")
            .addField("Usage", `${config.prefix}dog`);
        message.channel.send(help);
        return;
    }
    https.get('https://dog.ceo/api/breeds/image/random', (resp) => { //Makes get request to dog api webpage
        let data = '';

        resp.on('data', (chunk) => { //Writes data chunks to variable as they are recieved
            data += chunk;
        });

        resp.on('end', () => {
            const embed = new Discord.RichEmbed().setImage(JSON.parse(data).message); //Parses image url and sets it as the image for a new embed
            message.channel.send(embed);
        });

    }).on("error", (err) => {
        console.error(err);
    });
}
