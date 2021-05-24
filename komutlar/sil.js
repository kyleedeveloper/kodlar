const Discord = require('discord.js');

exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu komutu kullanmaya yetkin yok!");
if(!args[0]) return message.channel.send("Silinecek miktarı yazınız!");
message.channel.bulkDelete(args[0]).then(() => {
message.channel.send(` ${args[0]} adet mesaj başarıyla temizlendi!`).then(msg => msg.delete(7000));
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil'],
  permLevel: 2
};

exports.help = {
  name: 'sil',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'sil'
};