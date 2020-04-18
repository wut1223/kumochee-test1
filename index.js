const Discord = require('discord.js');
const bot = new Discord.Client()

const token = 'NzAwNjg0NDMzMDkwNjc0NzM4.XpqNCg.pjkgRjIVofm_39ycyI_nOKBLHFw';

bot.on('ready', () =>{
console.log('This bot is online now!!!');
bot.user.setActivity('War Robots...', {type: 'WATCHING'});
})

bot.login(token);