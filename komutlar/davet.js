const Discord = require("discord.js");

exports.run = (client, message, params) => {
  const umutice = new Discord.MessageEmbed()
    .setAuthor("Selam Ben Kylee! Prefixim: !")
   .addField("Botu Sunucuna Ekle", "[TIKLA!](https://discord.com/api/oauth2/authorize?client_id=856820108815237130&permissions=8&scope=bot)")
   .addField("Botun Web Sitesi", "[TIKLA!](https://kylee.tk/)")
   .addField("Destek Sunucumuza Katıl", "[TIKLA!](https://discord.gg/yYVhnh7Wfa)")

    .setColor("RANDOM") 
  .setThumbnail(message.author.avatarURL())
    
  message.channel.send(umutice)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["davet"],
  permLevel: 0
};

exports.help = {
  name: "davet",
  description: "NarcosCode",
  usage: ""
};