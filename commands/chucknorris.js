const https = require('https');
exports.run = (client, message, args) => {
    https.get('https://api.icndb.com/jokes/random', (resp) => {
      let data = '';

      resp.on('data', (chunk) => {
        data += chunk;
      });

      resp.on('end', () => {
        var joke = JSON.parse(data).value.joke;
        while(joke.includes("&quot;")){
            joke = joke.replace("&quot;", "\"");
        }
        message.channel.send(joke);
      });

    })
}