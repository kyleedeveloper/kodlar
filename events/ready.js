const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Asreaper 》 Gerekli kurulum tamamlandı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Asreaper 》 ${client.user.tag} olarak giriş sağlandı...`);
  client.user.setActivity(`Asreaper Ekonomi Botu`, {type: 4})


};