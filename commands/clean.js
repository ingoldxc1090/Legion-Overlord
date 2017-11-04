const permissionLevel = require('../subfunctions/permissionLevel.js');
exports.run = (client, message, args) => {
    if(!permissionLevel.run(client, message, 2)) return;
    if (args.length == 0) {
        message.channel.bulkDelete(10);
        return;
    }
    if(isNaN(args[0])) {
        message.channel.send("You must enter the number of messages you would like deleted.")
    }
    var num = args[0];
    num++;
    if(num > 100){
        mesage.channel.bulkDelete(100);
        return;
    }
    message.channel.bulkDelete(num);
}