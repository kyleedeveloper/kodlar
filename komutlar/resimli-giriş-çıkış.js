const dc = require("discord.js");
const db = require("quick.db");
exports.run = async (client, message, args) => {
 
    if (!message.member.hasPermission("MANAGE_GUILD"))
    return message.reply( `Bu komutu kullanabilmek için **Sunucuyu Yönet** iznine sahip olmalısın!`);
  
  if (!args[0])
    return message.channel.send(
      ":x: `Resimli Giriş Çıkış` Mesajı Seçenekleri ``ayarla / sıfırla``"
    );

  if (args[0] === "ayarla") {
    var kanal = message.mentions.channels.first();
    if (!kanal)
      return message.channel.send(
        "Bir Kanal belirtmelisin"
      );
    db.set(`devcanvas_${message.guild.id}`, kanal.id);
    return message.channel.send(
      ":white_check_mark: ``Resimli Giriş Çıkış`` Başarıyla Ayarlandı"
    );
  }
  if (args[0] === "sıfırla") {
    if (db.has(`devcanvas_${message.guild.id}`)) {
      db.delete(`devcanvas_${message.guild.id}`);
      return message.channel.send(
        ":white_check_mark:  ``Resimli Giriş Çıkış`` Başarıyla Sıfırlandı"
      );
    } else {
      return message.channel.send(
        ":x: ``Resimli Giriş Çıkış`` Zaten Ayarlı Değil"
      );
    }
  }
};
exports.conf = {
  aliases: [],
  permLevel: 4

};
exports.help = {
  name: "giriş-çıkış"
};