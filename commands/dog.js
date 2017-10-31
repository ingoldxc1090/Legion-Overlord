const Discord = require('discord.js');
const https = require('https');
exports.run = (client, message, args) => {
    https.get('https://dog.ceo/api/breeds/image/random', (resp) => {
        let data = '';

    resp.on('data', (chunk) => {
        data += chunk;
});

    resp.on('end', () => {
        const embed = new Discord.RichEmbed().setImage(JSON.parse(data).message);
        message.channel.send(embed);
});

})
}