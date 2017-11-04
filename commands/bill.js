const Discord = require('discord.js');
exports.run = (client, message, args) => {
    if(args[0] === "help") { //Sends command info for help argument
        const help = new Discord.RichEmbed()
            .setTitle("Bill")
            .setColor(0xffdf00)
            .setDescription("Creates a Be Like Bill meme using the entered text.")
            .addField("Usage", `${config.prefix}bill {memeText}`);
        message.channel.send(help);
        return;
    if(args.length < 1){ //Returns error for no arguments entered
        message.channel.send("You must enter some text");
        return;
    }
    var text = args.join('%20'); //Merges argments with space escape character for url
    const embed = new Discord.RichEmbed().setImage(`http://belikebill.azurewebsites.net/billgen-API.php?text=This%20is%20Bill%0D%0A%0D%0ABill%20${text}%0D%0A%0D%0ABill%20is%20smart%0D%0A%0D%0ABe%20like%20Bill`)
    message.channel.send(embed); //Sends image returned by api call
}
