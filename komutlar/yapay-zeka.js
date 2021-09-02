const Discord = require('discord.js');
const data = require('quick.db')
const db = require("quick.db")

exports.run = async (client, message, args) => {
  
if(!message.member.permissions.has("MANAGE_GUILD")) return message.channel.send(`Bu komutu kullanabilmek için **Sunucuyu Yönet** iznine sahip olmalısın!`)

if(!args[0]) return message.channel.send(new
Discord.MessageEmbed()

.setAuthor(`${client.user.username}`,client.user.displayAvatarURL({dynamic: true, format: "png"}))

.setDescription(`Birşey belirt *aç/kapat*`))

if(args[0] == "aç") {
      let sayac2 = db.fetch(`yapayzeka_${message.guild.id}`)
    if(sayac2) return message.channel.send(new Discord.MessageEmbed() .setDescription(`amk daha ne uğraşıon sistem saten açık`))
let engin = message.mentions.channels.first()
if(!engin) return message.inlineReply(`kanal belirtsene amk`)
db.set(`yapayzekakanal_${message.guild.id}`, engin.id)
db.set(`yapayzeka_${message.guild.id}`, 'aktif')
return message.inlineReply(`sistem açıldı afrm`)
};

if(args[0] == "kapat") {
      let sayac2 = db.fetch(`yapayzeka_${message.guild.id}`)
    if(sayac2) return message.channel.send(new Discord.MessageEmbed() .setDescription(`sistem saten kapalı amk ne uğraşıon`))
db.delete(`yapayzekakanal_${message.guild.id}`)
db.delete(`yapayzeka_${message.guild.id}`)
return message.inlineReply(`sistem kapandı`)
}; 

};
exports.conf = {
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'yapay-zeka'
}; 