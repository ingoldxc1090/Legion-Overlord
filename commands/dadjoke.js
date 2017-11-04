exports.run = (client, message, args) => {
if(args[0] === "help") { //Sends command info for help argument
        const help = new Discord.RichEmbed()
            .setTitle("Dad Joke")
            .setColor(0xffdf00)
            .setDescription("Returns a random dad joke.")
            .addField("Usage", `${config.prefix}dadjoke`);
        message.channel.send(help);
        return;
    }
    message.channel.send("This command is currently in development.");
    return;
    const https = require('https');

    const options = { //Sets request options
        hostname: 'icanhazdadjoke.com',
        path: '/',
        method: 'GET',
        headers: {
            'Accept': 'text/plain'
        }
    };

    https.request(options, (resp) => { //Makes request to dad joke api
        let data = '';

    resp.on('data', (chunk) => { //Writes data chunks to variable as they are recieved
        data += chunk;
    });

    resp.on('end', () => { //Sents recieved data
        message.channel.send(data);
    });

}).on("error", (err) => {
        console.error(err);
});
}
