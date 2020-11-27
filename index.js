const Discord = require('discord.js');

const express = require("express");

const app = express();

const bot = new Discord.Client();

bot.on('ready', () => {

  console.info(`Logged in as ${bot.user.tag}, basic discord bot template -by Genro`);

});

bot.on('message', msg => {

  if (msg.content === 't!help') {

    msg.channel.send('**Help Commands** \n `!invite the of the bot` -  \n `!invite discord` - The bot send  for you the invite link! \n `!hey` - lol');

  }

    if (msg.content === '!hello') {

    msg.reply('hi!');

  }

  if (msg.content === '!invite') {

    msg.channel.send('**https://discord.com/api/oauth2/authorize?client_id=781633864530657301&permissions=0&scope=bot** 🤖');

  }

  if (msg.content === '!invite') {

  msg.channel.send('https://discord.gg/jKaWDbxa'); 

  }

});

require('./server')();

bot.login('TOKEN')
