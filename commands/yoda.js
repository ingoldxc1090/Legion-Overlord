const http = require('http');
exports.run = (client, message, args) => {
    if(args[0] === "help") { //Sends command info for help argument
        const help = new Discord.RichEmbed()
            .setTitle("Yoda")
            .setColor(0xffdf00)
            .setDescription("Translates message into yoda speech.")
            .addField("Usage", `${config.prefix}yoda {message}`);
        message.channel.send(help);
        return;
    }
    var text = args.join('%20'); //Merges arguments with space escape character
    http.get(`http://api.funtranslations.com/translate/yoda.json?text=${text}`, (resp) => { //Makes get request to yoda translator api
        let data = '';

        resp.on('data', (chunk) => { //Writes data chunks to variable as they are recieved
            data += chunk;
        });

        resp.on('end', () => {
            message.channel.send(JSON.parse(data).contents.translated); //Parses response from json and sends it
        });

    }).on("error", (err) => {
        console.error(err);
    });
}
