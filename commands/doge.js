const http = require('http');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
    if(args[0] === "help") { //Sends command info for help argument
        const help = new Discord.RichEmbed()
            .setTitle("Doge")
            .setColor(0xffdf00)
            .setDescription("Returns a random doge picture.")
            .addField("Usage", `${config.prefix}doge`);
        message.channel.send(help);
        return;
    }
    http.get('http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true', (resp) => { //Makes get request to doge api page
        let data = '';

        resp.on('data', (chunk) => { //Writes data chunks to variable as they are recieved
            data += chunk;
        });

        resp.on('end', () => {
            var url = JSON.parse(data)[0]; //Parses url from request
            const embed = new Discord.RichEmbed().setImage(url); //sets url as image for a new embed
        message.channel.send(embed);
        });
    }).on("error", (err) => {
        console.error(err);
    });
}
