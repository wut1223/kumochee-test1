const Discord = require('discord.js');
const bot = new Discord.Client()

const token = 'NzAwNjg0NDMzMDkwNjc0NzM4.XprU3w.5fdHprhWzLkjC6ruxH3NujK4Nps';

bot.on('ready', () =>{
console.log('This bot is online now!!!');
bot.user.setActivity('War Robots...', {type: 'WATCHING'});
})

bot.login(token);
