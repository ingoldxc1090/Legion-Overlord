const https = require('https');
exports.run = (client, message, args) => {
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

    const req = https.request(options, (resp) => {
        let data = '';

    resp.on('data', (chunk) => {
        data += chunk;
});

    resp.on('end', () => {
        console.log(data);
});

});
req.on("error", (err) => {
        console.error(err);
});
req.end();
}