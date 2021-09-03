 exports.run = (client, msg, args) => {
   let member = msg.mentions.members.first()
   if(!member)return msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: ('Kimin Avatarına Bakmak İstiyorsanız etiketleyin!')
}});
   const Discord = require('discord.js')
        const kullanicibilgimk = new Discord.RichEmbed()
        .setTitle(member.user.tag+" kullanıcısının profil fotoğrafı!")
        .setImage(member.user.avatarURL)
        .setFooter("Kylee BOT", "https://discord.com/channels/863358243148922890/863358243203579930/883419734060728441")
        return msg.channel.send(kullanicibilgimk);
    }
	
	
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "kullanıcı"
 };
 
 exports.help = {
 name: 'avatar',
 description: 'Avatarınızı veya etiketlediğiniz kişinin avatarını atar.',
 usage: 'avatar & avatar [@Kişi]'
 }