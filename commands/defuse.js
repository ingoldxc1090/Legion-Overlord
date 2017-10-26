const fs = require("fs");
const data = require('./commandData/bomb.json');
exports.run = (client, message, ) => {
    data.defused = true;
    fs.writeFile('./commandData/bomb.json', JSON.stringify(data), (err) => console.error);
}