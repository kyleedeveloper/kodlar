const ulashDiscord = require('discord.js');
const ulashClient = new ulashDiscord.Client();
const ayarlar = require('../ayarlar.json');
const Discord = require('discord.js');

exports.run = function(client, message) { // Beyefendi Kod Paylaşım
const bikod = new Discord.MessageEmbed ()
.setColor('#304FFE')
.setTitle('mod Komutları')
.setTimestamp()
.addField('!guard','tek komutla tüm korumalar yapar!')
.addField("Botu Sunucuna Ekle", "[TIKLA!](https://discord.com/api/oauth2/authorize?client_id=856820108815237130&permissions=8&scope=bot)")
.addField("Botun Web Sitesi", "[TIKLA!](https://kylee.tk/)")
.addField("Destek Sunucumuza Katıl", "[TIKLA!](https://discord.gg/yYVhnh7Wfa)")
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
  name: 'tek-komut',
  description: 'Tüm komutları gösterir.',
  usage: 'tek-komut'
};