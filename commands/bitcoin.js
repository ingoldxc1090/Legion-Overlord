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
            price = price.split(",");
            price = price.join("");
            price = Number(price);
            https.get(`https://bitcoin.miningpoolhub.com/index.php?page=api&action=getuserbalance&api_key=41d8772cf070e6e22f5b0d0bf083d675979bd4bf616cc201c54955f292900cf3&id=183868`, (resp) => { //Makes a get request to International Chuck Norris Database API
                let data = '';

                resp.on('data', (chunk) => { //Writes data chunks to variable as they are recieved
                    data += chunk;
                });
<<<<<<< HEAD

                resp.on('end', () => {
                    var balance = Number(JSON.parse(data).getuserbalance.data.confirmed);
                    var balanceUSD =Number(Math.round((balance*price)+'e2')+'e-2');
                    message.channel.send(`Gary's bitcoin mining balance is ${balance} BTC or $${balanceUSD}.`);
                });
            }).on("error", (err) => {
                console.error(err);
            });
            https.get(`https://bitcoin.miningpoolhub.com/index.php?page=api&action=getuserbalance&api_key=22af77ff8d67855803d340659f249743bd3346337681d8c897686f3c0787daab&id=192297`, (resp) => { //Makes a get request to International Chuck Norris Database API
                let data = '';

<<<<<<< HEAD
        resp.on('end', () => {
            var balance = JSON.parse(data).data.confirmed;
            var balanceUSD = Math.round((balance*price)+'e2')+'e-2';
            message.channel.send(`Cam's bitcoin mining balance is ${balance} BTC or $${balanceUSD}.`);
        });
    }).on("error", (err) => {
        console.error(err);
    });
    https.get(`https://bitcoin.miningpoolhub.com/index.php?page=api&action=getuserbalance&api_key=&id=183868`, (resp) => { //Makes a get request to International Chuck Norris Database API
        let data = '';
=======
>>>>>>> b37c2b583803da0757cf61105270133b99fd7ffa

                resp.on('end', () => {
                    var balance = Number(JSON.parse(data).getuserbalance.data.confirmed);
                    var balanceUSD =Number(Math.round((balance*price)+'e2')+'e-2');
                    message.channel.send(`Gary's bitcoin mining balance is ${balance} BTC or $${balanceUSD}.`);
                });
            }).on("error", (err) => {
                console.error(err);
            });
            https.get(`https://bitcoin.miningpoolhub.com/index.php?page=api&action=getuserbalance&api_key=22af77ff8d67855803d340659f249743bd3346337681d8c897686f3c0787daab&id=192297`, (resp) => { //Makes a get request to International Chuck Norris Database API
                let data = '';

<<<<<<< HEAD
        resp.on('end', () => {
            var balance = JSON.parse(data).data.confirmed;
            var balanceUSD = Math.round((balance*price)+'e2')+'e-2';
            message.channel.send(`Gary's bitcoin mining balance is ${balance} BTC or $${balanceUSD}.`);
=======
=======
>>>>>>> b37c2b583803da0757cf61105270133b99fd7ffa
                resp.on('data', (chunk) => { //Writes data chunks to variable as they are recieved
                    data += chunk;
                });

                resp.on('end', () => {
                    var balance = Number(JSON.parse(data).getuserbalance.data.confirmed);
                    var balanceUSD = Number(Math.round((balance*price)+'e2')+'e-2');
                    message.channel.send(`Cam's bitcoin mining balance is ${balance} BTC or $${balanceUSD}.`);
                });
            }).on("error", (err) => {
                console.error(err);
            });
<<<<<<< HEAD
>>>>>>> b37c2b583803da0757cf61105270133b99fd7ffa
=======
>>>>>>> b37c2b583803da0757cf61105270133b99fd7ffa
        });
    }).on("error", (err) => {
        console.error(err);
    });



}