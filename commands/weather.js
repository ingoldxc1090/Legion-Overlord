const https = require('https');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
    var city = args[0].toLowerCase();
    var state = args[1].toLowerCase();

    if(args.length != 2){
        message.channel.send("Enter a city and state separated by a space. Ex. New_York NY");
        return;
    }
    https.get(`https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${city}%2C%20${state}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`, (resp) => {
        let data = '';

        resp.on('data', (chunk) => {
            data += chunk;
        });

        resp.on('end', () => {
            //var location = `${JSON.parse(data).query.results.channel.location.city}, ${JSON.parse(data).query.results.channel.location.region}`;
            var windNum = JSON.parse(data).query.results.channel.wind.direction;
            var windComp;
            if(windNum >= 337.5 || windNum < 22.5) windComp = 'N';
            if(windNum >=22.5 && windNum < 67.5) windComp = 'NE';
            if(windNum >=67.5 && windNum < 112.5) windComp = 'E';
            if(windNum >=112.5 && windNum < 157.5) windComp = 'SE';
            if(windNum >=157.5 && windNum < 202.5) windComp = 'S';
            if(windNum >=202.5 && windNum < 247.5) windComp = 'SW';
            if(windNum >=247.5 && windNum < 292.5) windComp = 'W';
            if(windNum >=292.5 && windNum < 337.5) windComp = 'NW';
            const embed = new Discord.RichEmbed()
                .setTitle(`The weather in ${JSON.parse(data).query.results.channel.location.city}, ${JSON.parse(data).query.results.channel.location.region}`)
                .addField(`Current`, `Temperature: ${JSON.parse(data).query.results.channel.item.condition.temp}\xB0F\nCondition: ${JSON.parse(data).query.results.channel.item.condition.text}\nWind: ${JSON.parse(data).query.results.channel.wind.speed}mph ${windComp}`)
                .addField(`Today`, `Condition: ${JSON.parse(data).query.results.channel.item.forecast[0].text}\nHigh: ${JSON.parse(data).query.results.channel.item.forecast[0].high}\nLow: ${JSON.parse(data).query.results.channel.item.forecast[0].low}`)
                .addField(`Tomorrow`, `Condition: ${JSON.parse(data).query.results.channel.item.forecast[1].text}\nHigh: ${JSON.parse(data).query.results.channel.item.forecast[1].high}\nLow: ${JSON.parse(data).query.results.channel.item.forecast[1].low}`);
            message.channel.send(embed);
        });
    })
}