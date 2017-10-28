exports.run = (client, message, args) => {
    if(args.length == 1){
        var number = Math.floor((Math.random()*args[0])+1);
        message.channel.send(`Your number is ${number}.`);
    } else if(args.length == 2){
        var number = Math.floor((Math.random()*args[1])+args[0]);
        message.channel.send(`Your number is ${number}`)
    } else {
        message.channel.send("Invalid arguments");
    }
}