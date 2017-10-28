exports.run = (client, message) => {
    var roll = Math.floor((Math.random()*6)+1);
    message.channel.send(`You rolled a ${roll}.`)
}