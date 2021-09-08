const Discord = require('discord.js');
const database = require('quick.db');

exports.run = async (client, message, args) => {// can#0002
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`⚠️ Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

  if(!message.mentions.channels.first()) return message.channel.send(`⚠️ Bu Özelliği Ayarlamam İçin Bir Kanal Etiketlemelisin Örnek: !kayıt-kanal #kayitkanal`);
  const channel = message.mentions.channels.first();
  database.set(`kayıt-kanal.${message.guild.id}`, channel.id);
  return message.channel.send(new Discord.MessageEmbed()
  .setColor('BLUE')
  .setTitle('Kanal Başarıyla Ayarlandı!')
  .setFooter('Kanalı değiştirmek istersen tekrar etiketlemelisin.')
  .setDescription(`» Kanal: ${channel} olarak ayarlandı!`));

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kayıtkanal'],
  permLevel: 0
};

exports.help = {
  name: 'kayıt-kanal'
};