const Discord = require('discord.js');
const database = require('quick.db');

exports.run = async (client, message, args) => {// can#0002
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`⚠️ Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

  if(!message.mentions.roles.first()) return message.reply('Ayarlamak istediğin Erkek rolünü etiketlemelisin!');

  const role = message.mentions.roles.first();
  database.set(`kayıt-erkek.${message.guild.id}`, role.id);
  return message.channel.send(new Discord.MessageEmbed()
  .setColor('BLUE')
  .setTitle('Rol Başarıyla Ayarlandı!')
  .setFooter('Rolü değiştirmek istersen tekrar etiketlemelisin.')
  .setDescription(`» Erkek Rolü: **${role.name}** olarak ayarlandı!`));

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kayıterkek'],
  permLevel: 0
};

exports.help = {
  name: 'kayıt-erkek'
};