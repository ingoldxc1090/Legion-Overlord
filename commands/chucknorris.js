const https = require('https');
const config = require('../config.json');
exports.run = (client, message, args) => {
    if(args[0] === "help") { //Sends command info for help argument
        const help = new Discord.RichEmbed()
            .setTitle("Chuck Norris")
            .setColor(0xffdf00)
            .setDescription("Returns a random Chuck Norris joke.")
            .addField("Usage", `${config.prefix}chucknorris`);
        message.channel.send(help);
        return;
    }
    https.get('https://api.icndb.com/jokes/random', (resp) => { //Makes a get request to International Chuck Norris Database API
      let data = '';

      resp.on('data', (chunk) => { //Writes data chuncks to variable as they are recieved 
        data += chunk;
      });

      resp.on('end', () => {
        var joke = JSON.parse(data).value.joke; //Parses joke from JSON response
        while(joke.includes("&quot;")){ //Replaces quotation mark escape character with quotation marks 
            joke = joke.replace("&quot;", "\"");
        }
        message.channel.send(joke);
      });
    }).on("error", (err) => {
        console.error(err);
    });
}
