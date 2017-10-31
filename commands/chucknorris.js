exports.run = (client, message, args) => {
    const https = require('https');

    https.get('https://api.icndb.com/jokes/random', (resp) => {
      let data = '';

      resp.on('data', (chunk) => {
        data += chunk;
      });

      resp.on('end', () => {
        message.channel.send(JSON.parse(data).value.joke);
      });

    })
}