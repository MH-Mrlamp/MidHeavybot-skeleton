//make ".env file for "discord token id and webhooks"
require("dotenv").config();

//import discord.js and add Client to use discord api 
const { Client } = require('discord.js');

//create bot class
const bot = new Client();

//set cmd prefix or add more and additional if you like
const PREFIX = "$"

//login message for bot login (see last line to see bot login)
bot.on('ready', () => {
  console.log(`${bot.user.tag} has logged in.`);
});

//login the bot use discord token key
bot.login(process.env.DISCORD_BOT_TOKEN);


