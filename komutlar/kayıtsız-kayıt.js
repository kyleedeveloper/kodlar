const Discord = require('discord.js');
const database = require('quick.db');

exports.run = async (client, message, args) => {// can#0002

  if(!message.mentions.roles.first()) return message.reply('Ayarlamak istediğin Kayıtsız rolünü etiketlemelisin!');

  const role = message.mentions.roles.first();
  database.set(`kayıt-kayıtsız.${message.guild.id}`, role.id);
  return message.channel.send(new Discord.MessageEmbed()
  .setColor('BLUE')
  .setTitle('Rol Başarıyla Ayarlandı!')
  .setFooter('Kanalı değiştirmek istersen tekrar etiketlemelisin.')
  .setDescription(`» Kayıtsız Rolü: **${role.name}** olarak ayarlandı!`));

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kayıtkayıtsız'],
  permLevel: 0
};

exports.help = {
  name: 'kayıt-kayıtsız'
};