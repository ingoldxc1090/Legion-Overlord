const http = require('http');
exports.run = (client, message, args) => {
    var text = args.join('%20');
    http.get(`http://api.funtranslations.com/translate/yoda.json?text=${text}`, (resp) => {
        let data = '';

        resp.on('data', (chunk) => {
            data += chunk;
        });

        resp.on('end', () => {
            message.channel.send(JSON.parse(data).contents.translated);
        });

    })
}