const http = require('http');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
    message.channel.send("This api requires a monthly subscription if you would like to see this feature implemented please consider donating to the developers.");
    return;

    var title = args.join('_');

    if(args.length < 1){
        message.channel.send("You must enter a movie title");
        return;
    }
    http.get(`http://www.omdbapi.com/?t=${title}`, (resp) => {
        let data = '';

        resp.on('data', (chunk) => {
            data += chunk;
        });

        resp.on('end', () => {
            const embed = new Discord.RichEmbed()
                .setTitle(`${JSON.parse(data).Title} - ${JSON.parse(data).Year}`)
                .setDescription(JSON.parse(data).Plot)
                .setImage(JSON.parse(data).Poster)
                .addField(`Info`, `Director: ${JSON.parse(data).Director}\nActors: ${JSON.parse(data).Actors}\nWriter\\s: ${JSON.parse(data).Writer}\nGenre: ${JSON.parse(data).Genre}\nRating: ${JSON.parse(data).Rated}`)
                .addField(`Ratings`, `IMDb: ${JSON.parse(data).imdbRating}\nMetacritic: ${JSON.parse(data).Metascore}%`);
            message.channel.send(embed);
        });
    })
}