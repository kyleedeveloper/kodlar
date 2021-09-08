const Discord = require('discord.js');
const database = require('quick.db');

exports.run = async (client, message, args) => {// can#0002
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`⚠️ Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

  if(!args[0]) return message.reply(`**Tag ayarlamak için:**\` !kayıt-tag TAGINIZ\`\n**Tag Sıfırlamak / Kaldırmak için:**\` !kayıt-tag sıfırla\``);
  if(args[0] === 'sıfırla') {
    database.delete(`kayıt-tag.${message.guild.id}`);
    return message.reply('**Tag başarıyla sıfırlandı!**');
  } else {
    database.set(`kayıt-tag.${message.guild.id}`, args[0]);
    return message.channel.send(new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle('Tag Başarıyla Ayarlandı!')
    .setFooter('Tag değiştirmek istersen tekrar etiketlemelisin. / Silmek için: !kayıt-tag sıfırla')
    .setDescription(`» Ayarlanan Tag: **${args[0]}** olarak ayarlandı!`));
  };
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kayıttag'],
  permLevel: 0
};

exports.help = {
  name: 'kayıt-tag'
};