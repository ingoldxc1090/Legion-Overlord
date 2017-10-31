const https = require('https');
exports.run = (client, message, args) => {
    message.channel.send("This command is currently in development.");
    return;
    var target = args[0];
    var q = args.join(' ');
    const options = {
        hostname: 'translation.googleapis.com',
        path: `/language/v2`,
        method: 'POST',
        headers: {
            'q': `${q}`,
            'target': `${target}`
        }
    };

    https.request(options, (resp) => {
        let data = '';

    resp.on('data', (chunk) => {
        data += chunk;
});

    resp.on('end', () => {
        console.log(data);
});

}).on("error", (err) => {
        console.error(err);
});
}