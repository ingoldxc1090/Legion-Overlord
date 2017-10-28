exports.run = (client, message) => {
    var rand = Math.floor(Math.random() * 2);
    if(rand == 0) message.channel.send("It lands on heads.");
    else if (rand == 1) message.channel.send("It lands on tails.");
    else console.error(err);
}