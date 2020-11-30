const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Monster 》 Gerekli kurulum tamamlandı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Monster 》 ${client.user.tag} olarak giriş sağlandı...`);
  client.user.setActivity(`Muhammed Demirel!`, {type: 4})


};