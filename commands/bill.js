const Discord = require('discord.js');
exports.run = (client, message, args) => {
    var text = args.join('%20');
    const embed = new Discord.RichEmbed().setImage(`http://belikebill.azurewebsites.net/billgen-API.php?text=This%20is%20Bill%0D%0A%0D%0ABill%20${text}%0D%0A%0D%0ABill%20is%20smart%0D%0A%0D%0ABe%20like%20Bill`)
    message.channel.send(embed);
}