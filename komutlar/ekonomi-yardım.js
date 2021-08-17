const ulashDiscord = require('discord.js');
const ulashClient = new ulashDiscord.Client();
const ayarlar = require('../ayarlar.json');
const Discord = require('discord.js');

exports.run = function(client, message) { // Beyefendi Kod Paylaşım
const bikod = new Discord.MessageEmbed ()
.setColor('#304FFE')
.setTitle('yardım Komutları')
.setTimestamp()
.addField('!genel','Genel Komutlara Bakarsın')
.addField('!müzik','Müzik Komutlarına Bakarsın')
.addField('!ayarlamalı','Ayarlamalı Komutlara Bakarsın')
.addField("Botu Sunucuna Ekle", "[TIKLA!](https://discord.com/api/oauth2/authorize?client_id=856820108815237130&permissions=8&scope=bot)")
.addField("Botun Web Sitesi", "[TIKLA!](https://kylee.tk/)")
.addField("Sunucumuza Katıl", "[TIKLA!](https://discord.gg/FchgyE2sDM)")
.setFooter('Kyle BOT')
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(bikod)
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};