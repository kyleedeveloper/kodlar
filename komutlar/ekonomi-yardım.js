const AsreaperDiscord = require('discord.js');
const AsreaperClient = new AsreaperDiscord.Client();
const ayarlar = require('../ayarlar.json');
let Prefix = ayarlar.prefix

exports.run = (client, message) => {
 const AsreaperEmbed = new AsreaperDiscord.MessageEmbed()
  .setColor(0xff000)
 .setAuthor(`${client.user.username} | Ekonomi Sistemi Yardım Menüsü`)
 .setDescription(`
 **${Prefix}bilgilerim** \n-> Hesap Bilgisini Gösterir
 **${Prefix}bakiye** \n-> Bakiyeyi Gösterir
 **${Prefix}günlükpara** \n->  Günlük Para Ödülü Alırsın
 **${Prefix}hesap-oluştur** \n->  Hesap Oluşturursun
 **${Prefix}hesap-sil** \n->  Hesap Silersin
 **${Prefix}kasa-aç** \n->  Kasa Açarsın
  **${Prefix}kasa-bilgi** \n->  Kasalar Hakkında Bilgi Alırsın
 **${Prefix}transfer** \n->  Belirtilen Kişiye Belirtilen Miktarda Para Gönderirsin
  **${Prefix}kasaaç <Kasaid>** \n->  Belirtilen İD'ye Sahip Kasayı Açarsın



`)
 .setFooter(`Asreaper Ekonomi Botu`)
 .setTimestamp()
 message.channel.send(AsreaperEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};