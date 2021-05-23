const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {

if (!message.guild) return;
if (message.author.id !== ayarlar.sahip) return message.channel.send("sahibim olunca yaparsın")
message.delete();
message.channel.send('Eğer Kabul Ediyorsan => `onay` <= Yazmalısın').then(() => {
message.channel.awaitMessages(response => response.content === 'onay', {
max: 1,
time: 15000,
errors: ['time'],
})
.then((collected) => {
  message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setTitle('Reboot Onaylama!').setDescription('Onay Verildi! Yeniden Başlatılıyorum...').setFooter('Spoinler', client.user.avatarURL).setTimestamp()).then(msg => {
console.log(`BOT : Yeniden Başlatılıyor...`);
process.exit(0);
})
})
.catch(() => {
  message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setTitle('Yeniden Başlatma;').setDescription('Komut İptal Edildi!').setFooter('nbr', client.user.avatarURL).setTimestamp())
});
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'treboot',
  description: 'Botu Yeniden Başlatır.',
  usage: 'reboot'
};