const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')



exports.run = async (client, message, args) => {
  if(!client.ekoayarlar.admin.includes(message.author.id)) return message.reply(`bunu yapabilmek için gerekli yetkiye sahip değilsin!`)
  const silinecekkllnc = message.mentions.members.first();
  if(!silinecekkllnc) return message.channel.send(`Bir kullanıcı belirtmelisin!`)
  const bakiye = await db.fetch(`bakiyeulash-${silinecekkllnc.id}`);
  const hesapdurumu = await db.fetch(`hesapdurumulash-${silinecekkllnc.id}`);
  const hesapismi = await db.fetch(`hesapismiulash-${silinecekkllnc.id}`);
  
  if(!hesapdurumu) return message.channel.send(`Kayıtlı olan bir kullanıcı belirtmelisin!`)
  db.delete(`bakiyeulash-${silinecekkllnc.id}`)
  db.delete(`hesapdurumulash-${silinecekkllnc.id}`)
  db.delete(`hesapismiulash-${silinecekkllnc.id}`)
  message.channel.send(`:+1:`)
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['sidsadsal'],
    permLevel: 0
}

exports.help = {
    name: 'hesdsdasdaap-sil',
    description: 'Ulash Studio',
    usage: 'Ulash Studio'
}