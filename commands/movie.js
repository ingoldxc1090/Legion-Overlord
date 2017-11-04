const http = require('http');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
    if(args[0] === "help") { //Sends command info for help argument
        const help = new Discord.RichEmbed()
            .setTitle("Movie")
            .setColor(0xffdf00)
            .setDescription("Returns metadata for a specified movie.")
            .addField("Usage", `${config.prefix}movie {movieTitle}`);
        message.channel.send(help);
        return;
    }
    message.channel.send("This api requires a monthly subscription if you would like to see this feature implemented please consider donating to the developers.");
    return;

    var title = args.join('_');

    if(args.length < 1){ //Ensures a title is entered
        message.channel.send("You must enter a movie title");
        return;
    }
    http.get(`http://www.omdbapi.com/?t=${title}`, (resp) => { //Makes a get request to movie database api
        let data = '';

        resp.on('data', (chunk) => { //Writes data chunks to variable as they are recieved
            data += chunk;
        });

        resp.on('end', () => {
            const embed = new Discord.RichEmbed() //Compiles all data in an embed
                .setTitle(`${JSON.parse(data).Title} - ${JSON.parse(data).Year}`)
                .setDescription(JSON.parse(data).Plot)
                .setImage(JSON.parse(data).Poster)
                .addField(`Info`, `Director: ${JSON.parse(data).Director}\nActors: ${JSON.parse(data).Actors}\nWriter\\s: ${JSON.parse(data).Writer}\nGenre: ${JSON.parse(data).Genre}\nRating: ${JSON.parse(data).Rated}`)
                .addField(`Ratings`, `IMDb: ${JSON.parse(data).imdbRating}\nMetacritic: ${JSON.parse(data).Metascore}%`);
            message.channel.send(embed);
        });
    })
}
