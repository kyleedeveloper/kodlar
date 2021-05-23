const Discord = require('discord.js');

exports.run = function(client, message) { // Beyefendi Kod Paylaşım
const bikod = new Discord.MessageEmbed ()
.setColor('#304FFE')
.setTitle('ekonomi Komutları')
.setTimestamp()
.addField('!bilgilerim','Hesap Bilgisini Gösterir')
.addField('!bakiye','Bakiyeyi Gösterir')
.addField('!günlükpara','Günlük Para Ödülü Alırsın')
.addField('!hesap-sil','Hesap Silersin')
.addField('!kasa-aç','Kasa Açarsın')
.addField('!kasa-bilgi','Kasalar Hakkında Bilgi Alırsın')
.addField('!transfer','Belirtilen Kişiye Belirtilen Miktarda Para Gönderirsin')
.addField('!kasaaç <kasaid>','Belirtilen İD ye Sahip Kasayı Açarsın')
.addField("Botu Sunucuna Ekle", "[TIKLA!](https://discord.com/api/oauth2/authorize?client_id=800091499475501086&permissions=8&scope=bot)")
.addField("Botun Web Sitesi", "[TIKLA!](https://kylee.tk/)")
.addField("Destek Sunucumuza Katıl", "[TIKLA!](https://discord.gg/NdNMzVhk65)")
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
  name: 'ekonomi',
  description: 'Tüm komutları gösterir.',
  usage: 'ekonomi'
};