exports.run = (client, message, args) => {

    message.channel.send("This command is currently in development.");
    return;
    const https = require('https');

    const options = {
        hostname: 'icanhazdadjoke.com',
        path: '/',
        method: 'GET',
        headers: {
            'Accept': 'text/plain'
        }
    };

    https.request(options, (resp) => {
        let data = '';

    resp.on('data', (chunk) => {
        data += chunk;
    });

    resp.on('end', () => {
        message.channel.send(data);
    });

}).on("error", (err) => {
        console.error(err);
});
}