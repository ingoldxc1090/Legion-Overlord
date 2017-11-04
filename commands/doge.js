const http = require('http');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
    http.get('http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true', (resp) => {
        let data = '';

    resp.on('data', (chunk) => {
        data += chunk;
});

    resp.on('end', () => {
        var url = JSON.parse(data)[0];
        console.log(url)
    const embed = new Discord.RichEmbed().setImage(url);
    message.channel.send(embed);
});

})
}