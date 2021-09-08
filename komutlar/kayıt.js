const Discord = require('discord.js');
const database = require('quick.db');

exports.run = async (client, message, args) => {// can#0002
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`⚠️ Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

  const embed = new Discord.MessageEmbed()
  .setDescription(`[(Destek Sunucusu)](https://discord.gg/yYVhnh7Wfa)\nYapay zeka olmadan artık kayıt yapmak çok kolay!\nBu sistem için 1 saat boyunca kod yazılmıştır. Emek...`)
  .setColor('GOLD')
  .setAuthor(`${client.user.username} Yapay Zeka Desteksiz | Kayıt Sistemi Yardım Menüsü`, client.user.avatarURL({ size: 2048, format: 'png' }))
  .addField(`**• \`!kayıt-kanal #kanal 》\`**`, 'Üyelerin Kayıt Olacağı Kanal')
  .addField(`**• \`!kayıt-kayıtsız @rol 》\`**`, 'Kayıtsız rolü mutlaka olmalıdır. Kayıtsız rolü haricinde kimseye kayıt işlemi yapmaz.')
  .addField(`**• \`!kayıt-erkek @rol 》\`**`, 'Kayıt Olan Kullanıcıya Otomatik Verilecek Erkek Rolü')
  .addField(`**• \`!kayıt-tag TAG 》\`**`, 'Kayıt Olan Kullanıcıya Otomatik Olarak Verilecek Tag')
  .addField(`**• \`!kayıt-kadın @rol 》\`**`, 'Kayıt Olan Kullanıcıdan Otomatik Verilecek Olan Kadın Rolü')
  .addField(`**• \`!kayıt-kapat 》\`**`, 'Kayıt Sistemini Kapatır Ve Tüm Ayarları Sıfırlar.');

  return message.channel.send(embed);


};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kayıt-yardım'],
  permLevel: 0
};

exports.help = {
  name: 'kayıt'
};