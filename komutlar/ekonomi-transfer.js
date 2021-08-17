const Discord = require('discord.js')
const db = require('quick.db');
var ayarlar = require('../ayarlar.json');



exports.run = async (client, message, args) => {
  
  let transkllanç = message.mentions.users.first()
  if(!transkllanç) return message.channel.send("Lütfen Birini Etiketleyin.");
  let kllanç = message.author
  let para = args[1]
  if(transkllanç == kllanç) return message.channel.send(`Kendinize para gönderemezsiniz.`)
  if(transkllanç.bot == true) return message.channel.send(`Botlara para gönderemezsiniz.`)
  if(!transkllanç) return message.channel.send(`Bir kullanıcı girmelisiniz. Doğru Kullanım;\n\`${client.ekoayarlar.botunuzunprefixi}transfer @${client.user.tag} 50\``)
  if(!para) return message.channel.send(`Bir miktar girmelisiniz. Doğru Kullanım;\n\`${client.ekoayarlar.botunuzunprefixi}transfer @${client.user.tag} 50\``)
  const bakiye = await db.fetch(`bakiyeulash-${kllanç.id}`);
  const hesapdurumu = await db.fetch(`hesapdurumulash-${kllanç.id}`);
  const hesapismi = await db.fetch(`hesapismiulash-${kllanç.id}`);
  
  const transbakiye = await db.fetch(`bakiyeulash-${transkllanç.id}`);
  const transhesapdurumu = await db.fetch(`hesapdurumulash-${transkllanç.id}`);
  const transhesapismi = await db.fetch(`hesapismiulash-${transkllanç.id}`);
  
  if(!hesapdurumu) {
    message.reply(`İlk olarak hesap oluşturmalısın. ${client.ekoayarlar.botunuzunprefixi}hesap-oluştur <Hesap İsmi>`)
  } else {
    if(hesapdurumu) {
      if(!hesapismi) {
        message.reply(`İlk olarak hesap oluşturmalısın. ${client.ekoayarlar.botunuzunprefixi}hesap-oluştur <Hesap İsmi>`)
      } else {
        if(hesapdurumu) {
          if(hesapismi) {
            if(bakiye < para) return message.channel.send(`:warning: Paranız Yetersiz!`)
            if(!transhesapdurumu) return message.channel.send(`Transfer etmek istediğin kullanıcının bir hesabı bulunmamakta.`)
            if(transhesapdurumu) {
                db.add(`bakiyeulash-${message.author.id}`, -para)
                db.add(`bakiyeulash-${transkllanç.id}`, para)
                transkllanç.send(`${message.author.tag} adlı kullanıcı size \`${para} ${client.ekoayarlar.parabirimi}\` yolladı`)
                message.channel.send(`${transkllanç} adlı kullanıcıya başarıyla \`${para} ${client.ekoayarlar.parabirimi}\` yolladınız.`)
              }
          }
        }
      }
    }
  }
}
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['paragodsadsadander', 'paragdsadsadasönder', 'pardsadsaa-gonder', 'para-gönsadsadsadader'],
    permLevel: 0,
    katagori: "Ekonomi"
}
exports.help = {
    name: 'transfdsadsadsaer',
    description: 'ulash',
    usage: 'ulash',
}
