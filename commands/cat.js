const http = require('http');
const config = require('../config.json');
const Discord = require('discord.js');
exports.run = (client, message, args) =>{
    if(args[0] === "help") { //Sends command info for help argument
        const help = new Discord.RichEmbed()
            .setTitle("Cat")
            .setColor(0xffdf00)
            .setDescription("Returns a random cat picture.")
            .addField("Usage", `${config.prefix}cat`);
        message.channel.send(help);
        return;
    }
    http.get('http://thecatapi.com/api/images/get?format=xml&results_per_page=1', (resp) => { //Makes get request to cat api page
        let data = '';
        resp.on('data', (chunk) => { //Writes data chunks to variable as they are recieved
            data += chunk;
        });
        resp.on('end', () => {
            var dat1 = data.split('<url>');
            var dat2 = dat1[1].split('</url>'); //Extracts url from xml format
            const embed = new Discord.RichEmbed().setImage(dat2[0]); //Sets extracted url as image for a new embed
            message.channel.send(embed);
        });
    }).on("error", (err) => {
        console.error(err);
    });
}
