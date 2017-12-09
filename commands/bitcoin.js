const https = require('https');
const config = require('../config.json');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
    if(args[0] === "help") { //Sends command info for help argument
        const help = new Discord.RichEmbed()
            .setTitle("Bitcoin")
            .setColor(0xffdf00)
            .setDescription("Returns the admins' bitcoin balances")
            .addField("Usage", `${config.prefix}8ball`);
        message.channel.send(help);
        return;
    }

    https.get(`https://api.coindesk.com/v1/bpi/currentprice.json`, (resp) => { //Makes a get request to International Chuck Norris Database API
        let data = '';

        resp.on('data', (chunk) => { //Writes data chunks to variable as they are recieved
            data += chunk;
        });

        resp.on('end', () => {
            var price = JSON.parse(data).bpi.USD.rate;
        });
    }).on("error", (err) => {
        console.error(err);
    });

    https.get(`https://api.coindesk.com/v1/bpi/currentprice.json`, (resp) => { //Makes a get request to International Chuck Norris Database API
        let data = '';

        resp.on('data', (chunk) => { //Writes data chunks to variable as they are recieved
            data += chunk;
        });

        resp.on('end', () => {
            var balance = JSON.parse(data).data.confirmed;
            var balanceUSD = Math.round((balance*price)+'e2')+'e-2';
            message.channel.send(`Gary's bitcoin mining balance is ${balance} BTC or $${balanceUSD}.`);
        });
    }).on("error", (err) => {
        console.error(err);
    });

}