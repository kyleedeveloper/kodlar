const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  
  let rol = message.mentions.roles.first();
  let kanal = message.mentions.channels.first();
  
  if (!rol) return message.channel.send(`Otorol Ayarlamak için bir rol etiketlemelisin!`)
  if (!kanal) return message.channel.send(`Otorol ayarlamak için bir kanal etiketlemelisin!`)
  
  db.set(`otoR_${message.guild.id}`, rol.id);
  db.set(`otoK_${message.guild.id}`, kanal.id);
  
  const embed = new Discord.Client()
  .setAuthor('Otorol Sistemi', client.user.avatarURL)
  .addField('Ayarlanan Rol', `\`${rol.name}\` :white_check_mark:`)
  .addField('Ayarlanan Kanal', `\`${kanal.name}\` :white_check_mark:`)
  message.channel.send(embed)
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2,
  kategori: 'moderasyon'
}
exports.help = {
  name: 'otorol',
  description: 'Otorol Ayarlamanızı Sağlar.',
  usage: '!otorol <@üye>'
}
