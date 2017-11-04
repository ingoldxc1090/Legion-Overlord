const Discord = require('discord.js');
const todo = require('./commandData/todo.json');
exports.run = (client, message, args) => {
  if(args.length < 0){
    var lines = todo.list.join('\n')
    message.channel.send(lines);
  }
  if(args[0] === 'add'){
    newItem = args.join(' ');
    todo.list[todo.list.length] = newItem;
  }

}
