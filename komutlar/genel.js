const Discord = require("discord.js");

exports.run = function(client, message) {
  // Beyefendi Kod Paylaşım
  const bikod = new Discord.MessageEmbed()
    .setColor("#304FFE")
    .setTitle("genel Komutlar")
    .setTimestamp()
    .addField("!stats", "Botun İstatistiklerine Bakarsın")
    .addField("!davet", "Botun Linklerini Görürsün")
    .addField("!rank", "Rankına Bakarsın")
    .addField("!sil", "Yazdığınız Sayı Kadar Mesaj Siler")
    .addField("!sa-as aç/kapat", "sa-as Sistemini Açar/Kapatır")
    .addField("!uyar @kişi sebep", "Yazdığınız Kişiyi Uyarır")
    .addField('!öneri','bota veya herhangi birşeyi önerirsiniz')
    .addField('!kullanıcı-bilgi @kişi ','etiketlediğiniz kişinin bilgilerine bakarsınız')
    .addField( "!uyarı-sil @kişi sayı","Yazdığınız Kişinin Yazdığınız Sayısı Kadar Uyarısını Siler")
    .addField("!uyarı-ölç", "Yazdığınız Kişinin Kaç Uyarısı Olduğunu Ölçer")
    .addField("Botu Sunucuna Ekle", "[TIKLA!](https://discord.com/api/oauth2/authorize?client_id=856820108815237130&permissions=8&scope=bot)")
    .addField("Botun Web Sitesi", "[TIKLA!](https://kylee.tk/)")
    .addField("Destek Sunucumuza Katıl","[TIKLA!](https://discord.gg/FchgyE2sDM)")
    .setTimestamp()
    .setThumbnail(client.user.avatarURL);
  message.channel.send(bikod);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "genel",
  description: "Tüm komutları gösterir.",
  usage: "genel"
};