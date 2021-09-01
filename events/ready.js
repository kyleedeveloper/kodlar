const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Ulash Studio》 Gerekli kurulum tamamlandı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Ulash Studio》 ${client.user.tag} olarak giriş sağlandı...`);
  client.user.setActivity(`ytsisland.batihost.net in koruması`, {type: 4})


};