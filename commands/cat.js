const http = require('http');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
    http.get('http://thecatapi.com/api/images/get?format=xml&results_per_page=1', (resp) => {
        let data = '';

    resp.on('data', (chunk) => {
        data += chunk;
});

    resp.on('end', () => {
        var dat1 = data.split('<url>');
        var dat2 = dat1[1].split('</url>');
        const embed = new Discord.RichEmbed().setImage(dat2[0]);
        message.channel.send(embed);
});

})
}