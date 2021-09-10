const express = require('express');
const app = express();
app.use(express.static("public"));
const queue = new Map();
const { apikey } = require('./ayarlar.json');
const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json')
const YouTube = require('simple-youtube-api');
const ffmpeg = require('ffmpeg');
const DCanvas = require("discord-canvas");
const youtube = new YouTube('apikey');
const ytdl = require('ytdl-core');
const prefix = ayarlar.prefix;
const fs = require('fs');
const moment = require('moment');
const Jimp = require('jimp');
const chalk = require('chalk');
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});

const http = require('http');
    app.get("/", (request, response) => {
    console.log(`[PING] Açık tutuyorum...`);
    response.sendStatus(200);
    });
    
    setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    }, 280000);





const db = require("quick.db")

require('./util/eventLoader')(client);

//////////////////////////////////////////////
client.ayarlar = {
"durum":"dnd",//online , idle , dnd 
"oynuyor":"oyna.ytsworld.ml'nin koruması",
"prefix":"!",
"sahip":"852588815927214181",
}
client.ekoayarlar = {
  parabirimi: "KY", //Para Birimi TL İsterseniz Dolar Euro Vb. Para Birimleri Girebilirsiniz.
  botunuzunprefixi: "!",
  botunuzunidsi: "856820108815237130",
  botismi: "Kylee",
  renk: "BLUE", //İNGİLİZCE TERCİH ETTİĞİNİZ RENGİ YAZINIZ! EĞER BÖYLE BIRAKIRSANIZ RASTGELE ATAR!
  isimsiz: "Bilinmiyor", //İSİMSİZ KİŞİLERİN HANGİ İSİM İLE GÖZÜKECEĞİNİ BELİRLEYEBİLİRSİNİZ!
  rastgelepara: true, //EĞER BUNU TRUE YAPARSANIZ RASTGELE PARA VERME ÖZELLİĞİ AKTİF OLUR VE GÜNLÜK PARALARI RASTGELE VERİR!
  minpara: 100, //EĞER RASTGELE PARA DURUMUNU AKTİF ETTİYSENİZ BURADAN RASTGELE PARA PARAMETRESİNİNİN MİNUMUM PARASINI BELİRTİNİZ!
  maxpara: 500, //EĞER RASTGELE PARA DURUMUNU AKTİF ETTİYSENİZ BURADAN RASTGELE PARA PARAMETRESİNİNİN MAXİMUM PARASINI BELİRTİNİZ!
  günlükpara: 100, //EĞER RASTGELE PARAYI TRUE YAPTIYSANIZ BURAYI ELLEMENİZE GEREK YOK!
  dbloy: false, //EĞER BOTUNUZ DBL (DİSCORD BOT LİST) DE KAYITLIYSA GÜNLÜK ÖDÜL ALMAK İÇİN OY İSTER FALSE KAPALI, TRUE AKTİF DEMEK!
  dblkey: "KEY", //EĞER DBLOY U AKTİF ETMEDİYSENİZ BURAYA KEY EKLEMENİZE GEREK YOK EĞER AKTİF ETTİYSENİZ DBL SİTESİNDEN BULABİLİRSİNİZ!
  dblmsj: "Bu komutu kullanabilmek için bota oy vermelisiniz. Oy vermek için !oyver", //EĞER DBLOY U AKTİF ETMEDİYSENİZ BURAYA MESAJ YAZMANIZA GEREK YOK! EĞER AKTİF ETTİYSENİZ BOTA OY VERMEK İÇİN HANGİ MESAJI YAZACAĞINI AYARLAYABİLİRSİNİZ.
  başlangıçparası: 50, //EĞER RASTGELE PARAYI TRUE YAPTIYSANIZ BURAYI ELLEMENİZE GEREK YOK!
  admin: ["852588815927214181"]//["id","",""]
}
const kurulum = message => {
  console.log(`Kurulum: ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  kurulum(`${files.length} komut kurulacak.`);
   kurulum(`-------------------------`);
   files.forEach(f => {
    let pingKodları = require(`./komutlar/${f}`);
  
    kurulum(`Kurulan komut ~ ${pingKodları.help.name}.`);
    client.commands.set(pingKodları.help.name, pingKodları); 
    kurulum(`-------------------------`);
    client.commands.set(pingKodları.help.name, pingKodları);
    pingKodları.conf.aliases.forEach(alias => {
    client.aliases.set(alias, pingKodları.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let pingDosya = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, pingDosya);
      pingDosya.conf.aliases.forEach(alias => {
        client.aliases.set(alias, pingDosya.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};


client.on("message", async msg => {
  const gereksiz = await db.fetch(`saas_${msg.guild.id}`);
  if (gereksiz === "aktif") {
    if (
      msg.content.toLowerCase() == "selam" ||
      msg.content.toLowerCase() == "selamun aleyküm" ||
      msg.content.toLowerCase() == "s.a" ||
      msg.content.toLowerCase() == "sea" ||
      msg.content.toLowerCase() == "sa" ||
      msg.content.toLowerCase() == "selamm" ||
      msg.content.toLowerCase() == "saa" ||
      msg.content.toLowerCase() == "saaa"
    )
      return msg.reply("Aleyküm selam hoşgeldin nasılsın, İyimisin?");
  } else if (gereksiz === "deaktif") {
  }
  if (!gereksiz) return;
});

client.on("ready", () => {
  client.user.setActivity(
    `✨ !yardım -en hızlı gelişip yükselen bot!`
  );
})

client.on("guildMemberAdd", async member => {
  const Discord = require('discord.js')
  const Canvas = require('canvas')
  const db = require('quick.db')

   const canvas = Canvas.createCanvas(640, 360);
  const rctx = canvas.getContext('2d');
  const background = await Canvas.loadImage(`
 https://cdn.discordapp.com/attachments/832252656205955113/832253724176547900/devhg.png`);

 
  rctx.drawImage(background, 0, 0, canvas.width, canvas.height); 
  rctx.font = '38px Sans-serif';
    rctx.fillStyle = '#ffffff';
    rctx.fillText(`${member.user.username}` , 200, 255);
rctx.font = '36px Sans-serif';
    rctx.fillStyle = '#ffffff';
    rctx.fillText(`#${member.guild.memberCount}. Kişi!` , 15, 75);
rctx.font = '35px Helvetica';
    rctx.fillStyle = '#000000';
    rctx.fillText(`Kylee` , 30, 30);
            
  rctx.beginPath()
  rctx.arc(310, 125, 85, 0, Math.PI * 2, true)
  rctx.closePath();
  rctx.clip();

  const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: "jpg" }))
    rctx.drawImage(avatar, 210, 25, 200, 200);
  
  
 const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'devilscode-hg.png');
  const kanal = db.fetch(`devcanvas_${member.guild.id}`)
  var rzm = member.guild.channels.cache.get(kanal)
  if(!rzm) return;
  rzm.send(attachment)
})


client.on("guildMemberRemove", async member => {
  const Discord = require('discord.js')
  const Canvas = require('canvas')
  const db = require('quick.db')

   const canvas = Canvas.createCanvas(640, 360);
    const rctx = canvas.getContext('2d');
  const background = await Canvas.loadImage(`
 https://cdn.discordapp.com/attachments/832252656205955113/832253730296430592/devbb.png`);

rctx.strokeStyle = "#f0f0f0";
rctx.strokeRect(0, 0, canvas.width, canvas.height);
  rctx.drawImage(background, 0, 0, canvas.width, canvas.height); 
  rctx.font = '38px Sans-serif';
    rctx.fillStyle = '#ffffff';
    rctx.fillText(`${member.user.username}` , 200, 255);
rctx.font = '32px Sans-serif';
    rctx.fillStyle = '#ffffff';
    rctx.fillText(`#${member.guild.memberCount} Kişi kaldık!` , 9, 75);
rctx.font = '35px Helvetica';
    rctx.fillStyle = '#000000';
    rctx.fillText(`Kylee` , 30, 30);
            
  rctx.beginPath()
  rctx.arc(310, 125, 85, 0, Math.PI * 2, true)
  rctx.closePath();
  rctx.clip();

  const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: "jpg" }))
    rctx.drawImage(avatar, 210, 25, 200, 200);
  
 const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'devilscode-bb.png');
  const kanal = db.fetch(`devcanvas_${member.guild.id}`)
  var rzm = member.guild.channels.cache.get(kanal)
  if(!rzm) return;
  rzm.send(attachment)
})

client.on('message', async msg => {
  let prefix = ayarlar.prefix 
const embed = new Discord.MessageEmbed()
.setAuthor(`Selam Ben Kylee`, `https://cdn.discordapp.com/attachments/844998840347918426/846436682912104458/6.jpg`)
.setDescription('PREFIXIM !')
.addField("Botu Sunucuna Ekle", "[TIKLA!](https://discord.com/api/oauth2/authorize?client_id=856820108815237130&permissions=8&scope=bot)")
.addField("Botun Web Sitesi", "[TIKLA!](https://kylee.tk/)")
.addField("Destek Sunucumuza Katıl", "[TIKLA!](https://discord.gg/yYVhnh7Wfa)")
.setColor('RANDOM')
  if(msg.content == `<@!856820108815237130>`) return msg.channel.send(embed); //botunuzun idsi
});

client.on("message", async message => {
    if(message.author.bot) return;
    
    let i = await db.fetch(`reklamFiltre_${message.guild.id}`)  
          if (i == 'acik') {
              const reklam = ["https://","http://","discord.gg",
      "discord.gg",
      ".com",
      ".net",
      ".xyz",
      ".tk",
      ".pw",
      ".io",
      ".me",
      ".gg",
      "www.",
      "https",
      "http",
      ".gl",
      ".org",
      ".com.tr",
      ".biz",
      ".party",
      ".rf.gd",
      ".az",
      "sunucuma gelin",
      "sunucum var"]
      
              if (reklam.some(word => message.content.toLowerCase().includes(word))) {
                try {
                  if (!message.member.hasPermission("MANAGE_GUILD")) {
                    message.delete();                                       
                    return message.channel.send(`<@${message.author.id}> Reklam Yapmak Yasak!`).then(message => message.delete(10000));
                  }              
                } catch(err) {
                  console.log(err);
                }
              }
          }
          if (!i) return;
          }); 

client.on("guildCreate", async guild => {
  guild.owner.send("beni sunucuna eklediğin için teşekürler!!");
  guild.owner.send("bu destek sunucusuna detaylı bilgi almak için gel sunucu linki için", "[TIKLA!](https://discord.gg/6myc7NDHhs)");
});

client.on("guildDelete", async guild => {
  guild.owner.send("Bot Sunucudan Atıldı!!!");
    guild.owner.send("sen atmadıysan veya geri eklemek istersen bot linki için", "[TIKLA!](https://discord.com/api/oauth2/authorize?client_id=856820108815237130&permissions=8&scope=bot)");
});

client.on("message", async msg => {
 
 
 const i = await db.fetch(`kufur_${msg.guild.id}`)
    if (i == "acik") {
        const kufur = ["oç","sik","orospi","am","göt","sik","meme","orospu","orrospu çocuğu","orrospu","31","napim","domal","anan","taşşak","salak"];
        if (kufur.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();
                          
                      return msg.reply('Bu Sunucuda Küfür Filtresi Aktiftir.')
            }             
          } catch(err) {
            console.log(err);
          }
        }
    }
    if (!i) return;
});

client.on("messageUpdate", (oldMessage, newMessage) => {
 
 
 const i = db.fetch(`${oldMessage.guild.id}.kufur`)
    if (i) {
        const kufur = ["küfürler","küfürler","küfürler",];
        if (kufur.some(word => newMessage.content.includes(word))) {
          try {
            if (!oldMessage.member.hasPermission("BAN_MEMBERS")) {
                  oldMessage.delete();
                          
                      return oldMessage.reply('Bu Sunucuda Küfür Filtresi Aktiftir.')
            }             
          } catch(err) {
            console.log(err);
          }
        }
    }
    if (!i) return;
});

client.on("ready", () => {
client.channels.cache.get('883077048644542484').join();
});

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("MANAGE_MESSAGES")) permlvl = 1;
  if (message.member.hasPermission("MANAGE_ROLES")) permlvl = 2;
  if (message.member.hasPermission("MANAGE_CHANNELS")) permlvl = 3;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 4;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 5;
  if (message.author.id === client.ayarlar.sahip) permlvl = 6;
  return permlvl;
};
client.on('guildMemberAdd', async member => {
  let rol = await db.fetch(`otoR_${member.guild.id}`);
  let kanal = await db.fetch(`otoK_${member.guild.id}`);
  
  if (!rol) return
  if (!kanal) return
  
  member.addRole(member.guild.roles.get(rol)).catch(err => {
    console.log(err);
  })
  client.channels.get(kanal).send(`${member} Kullanıcısına \`${member.guild.roles.get(rol).name}\` rolü verildi!`)
})
client.on('guildMemberAdd', async member => {
  let kanal = await db.fetch(`sayacK_${member.guild.id}`);
  let sayis = await db.fetch(`sayac_${member.guild.id}`);
  if (!kanal) return
  client.channels.get(kanal).send(`\`${member.user.tag}\` Sunucuya katıldı! **${sayis}** kişi olmamıza **${sayis - member.guild.members.size}** Kişi Kaldı!`)
});
client.on('guildMemberRemove', async member => {
  let kanal = await db.fetch(`sayacK_${member.guild.id}`);
  let sayis = await db.fetch(`sayac_${member.guild.id}`);
  if (!kanal) return
  client.channels.get(kanal).send(`\`${member.user.tag}\` Sunucudan Ayrıldı! **${sayis}** kişi olmamıza **${sayis - member.guild.members.size}** Kişi Kaldı!`)
});

// Pâyidar Code - Pâyidar

client.on('guildMemberAdd', member => {
  let sistem = db.fetch(`otorol_${member.guild.id}`)

  // Eğer Sistem Açıksa Kod Döndürelim
  if(sistem === 'acik'){
    // Data Veri Çekme İşlemi
    let rol = db.fetch(`orol_${member.guild.id}`)
    let kanal = db.fetch(`okanal_${member.guild.id}`)
    let mesaj = db.fetch(`omesaj_${member.guild.id}`)

    // Rol Verme
    member.roles.add(rol)

    // Mesaj
    client.channels.cache.get(kanal).send(
      new Discord.MessageEmbed()
      .setDescription(`${mesaj}`)
      .setColor('BLACK')
    )
  } else if(sistem != "acik") {
    // Eğer Sistem Kapalıysa...
    return;
  }
})


client.on('guildMemberAdd', async member => {
  const database = require('quick.db');
  const guild = member.guild;
  const user = member.user;
  
  if(database.fetch(`kayıt-kayıtsız.${guild.id}`)) {
    if(!guild.roles.cache.get(database.fetch(`kayıt-kayıtsız.${guild.id}`)) || member.roles.cache.has(database.fetch(`kayıt-kayıtsız.${guild.id}`))) return;
    const kadınData = database.fetch(`kayıt-kadın.${guild.id}`);
    if(!kadınData) return;
    const kadın = guild.roles.cache.get(kadınData);
    const erkekData = database.fetch(`kayıt-erkek.${guild.id}`);
    if(!erkekData) return;
    const erkek = guild.roles.cache.get(erkekData);

    member.roles.add(database.fetch(`kayıt-kayıtsız.${guild.id}`));
    member.setNickname('İsiminizi Yazın');

    const kayıtkanal = guild.channels.cache.get(await database.fetch(`kayıt-kanal.${guild.id}`));
    if(!kayıtkanal) return;

    if(database.fetch(`k.${guild.id}.${user.id}`)) {
      member.roles.remove(database.fetch(`kayıt-kayıtsız.${guild.id}`));
      const data = await database.fetch(`k.${guild.id}.${user.id}`);
      if(data.sex == 'K') {
        member.roles.add(kadın.id);
      } else {
        member.roles.add(erkek.id);
      };

      member.setNickname(`${database.fetch(`kayıt-tag.${guild.id}`) ? `${database.fetch(`kayıt-tag.${guild.id}`)} ` : ''}${data.name} | ${data.yaş}`);
      return kayıtkanal.send(`Kayıt başarıyla tamamlandı. **Otomatik** olarak kayıt edildin. İyi eğlenceler **${data.name}**`);

    };

    var ç = false;
    var s = false;

    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setImage('https://images-ext-1.discordapp.net/external/u4K5o1w8mfZ4ejvgLgIgd928hGr3vjQOi4hcbEtM1cc/https/media.discordapp.net/attachments/724722014283104306/727861420162809876/cortexKaytOlmak.gif')
    kayıtkanal.send(`<@${member.user.id}> lütfen **ismini yaz** ve hemen kayıt işlemin bitsin.`);
    kayıtkanal.send(embed);

    const filter = m => m.author.id === member.user.id;
    const collector = kayıtkanal.createMessageCollector(filter, { time: 0 });

    collector.on('collect', async collected => {
      if(s == true) return;
          if(ç == false) {
          const cm = collected;
          if(cm.content.split('').some(x => !isNaN(x))) cm.reply('**Sadece ismini yaz.** *Yaşını değil.*');

            const isimler = require('./isimler.json').map(x => x);
            if(!isimler.some(x => x.name.toLowerCase() === cm.content.toLowerCase())) cm.reply(`**İsmini yazman gerekiyor dostum!**\n**Bilgi:**\` İsminiz Elifnur gibiyse Elif yazın, sadece isim yazın.\``);
            const data = isimler.find(x => x.name.toLowerCase() === cm.content.toLowerCase());
            const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setFooter(`Bilgi: İsmini yanlış yazdıysan: !ksıfırla`, `https://images-ext-2.discordapp.net/external/6eGBGtaebZg_DNdSL4jVLiZ2YQuovw227N4TKd30gzo/https/images-ext-2.discordapp.net/external/H1DYiroEN5EFPujb_YvV-LhXsuIWi3w8gqs69BQbAJ0/%253Fsize%253D2048/https/cdn.discordapp.com/avatars/602585371489861634/59d888f59b9e01bdebb98e8f0548ac2d.png`)
            .setDescription(`Merhaba, ${data.name.split('')[0].toUpperCase()}${data.name.split('').slice(1).join('')}, şimdi **yaşını yaz.**`)
            kayıtkanal.send(embed);
            ç = true;
            if(s == false) {
            const collectorr = kayıtkanal.createMessageCollector(filter, { time: 0 });
            var x = false;
            collectorr.on('collect', collectedd => {
              if(x == true) return;
              const cd = collectedd;
              if(isNaN(cd.content)) return cd.reply(`**Yaşını **\`(sayı)\`** olarak sadece yaz.**`);
              if(cd.content == 31) return cd.reply(`Aaaa. 31 ne alaka! 31 yaşında olamazsın sanırım öyle değil mi :3`);
              if(Number(cd.content) > 32) return cd.reply(`Merhaba saygı değer büyüğümüz. ${cd.content} yaşında olduğunuzu tespit edmemiz gerek. Yetkili birisine yazın.`);
              member.roles.remove(database.fetch(`kayıt-kayıtsız.${guild.id}`));
              if(data.sex == 'K') {
                member.roles.add(kadın.id);
              } else {
                member.roles.add(erkek.id);
              };
              database.set(`k.${guild.id}.${user.id}`, { 
                name: `${data.name.split('')[0].toUpperCase()}${data.name.split('').slice(1).join('')}`,
                sex: data.sex,
                yaş: Number(cd.content)
              });
              s = true;
              x = true;
              member.setNickname(`${database.fetch(`kayıt-tag.${guild.id}`) ? `${database.fetch(`kayıt-tag.${guild.id}`)} ` : ''}${data.name.split('')[0].toUpperCase()}${data.name.split('').slice(1).join('')} | ${cd.content}`);
              return kayıtkanal.send(`Kayıt başarıyla tamamlandı. İyi eğlenceler **${data.name.split('')[0].toUpperCase()}${data.name.split('').slice(1).join('')}**`);
      
            });
          };
        };
        });

  };

});

client.on("message", async message => {
  try {
    if (message.author.bot || !message.guild) return;

    if (!db.get(`xp_${message.author.id}`)) {
      db.set(`xp_${message.author.id}`, 0);
      db.set(`level_${message.author.id}`, 0);
    }

    if (db.get(`xp_${message.author.id}`) >= "500") {
      let xp1 = db.get(`xp_${message.author.id}`);
      db.set(`xp_${message.author.id}`, +xp1 - 500);
      db.add(`level_${message.author.id}`, 1);
      let level1 = db.get(`level_${message.author.id}`);
      message.channel
        .send(
          `${message.author} tebrikler seviye **${level1}** oldun! Seviyen hakkında detaylı bilgi için **!rank**.`
        )
        .catch(() => {});
    }

    const xp = db.get(`xp_${message.author.id}`);
    const level = db.get(`level_${message.author.id}`);

    if (message.content === "!rank") {
      const image = await new DCanvas.RankCard()
        .setAvatar(message.author.displayAvatarURL({ format: "png" }))
        .setXP("current", +xp)
        .setXP("needed", 500)
        .setLevel(+level)
        .setRankName(message.guild.name)
        .setRank()
        .setUsername(message.author.username)
        .setBackground("https://i.hizliresim.com/p5lvmpn.png")
        .toAttachment();
      const attachment = new Discord.MessageAttachment(
        image.toBuffer(),
        "rank-card.png"
      );
      message.channel.send(attachment).catch(() => {});
    }

    await db.add(`xp_${message.author.id}`, 3);
  } catch (h) {
    console.trace(h);
  }
});

function extension(attachment) {// can#0002
  let imageLink = attachment.split('.');
  let typeOfImage = imageLink[imageLink.length - 1];
  let image = /(jpg|jpeg|png|gif)/gi.test(typeOfImage);
  if (!image) return '';
  return attachment;
}// codare ♥

client.on('messageReactionAdd', async (messageReaction, user) => {// can#0002
if(user.bot) return;
const database = require('quick.db');

if(messageReaction.emoji.name === '⭐') {
/*if(messageReaction.count <= 1) return;*/

let starboardChannel = client.channels.cache.get('');// id gir
if(!starboardChannel) return;

if(messageReaction.message.content == null) return user.send('You added a reaction to an old message.');

let emojiCheck;
let color;
if(messageReaction.count <= 7) {
emojiCheck = '⭐';
color = '#ffdf81';
};
if(messageReaction.count >= 8) {
emojiCheck = '🌟';
color = '#ffd65e';
};
if(messageReaction.count >= 14) {
emojiCheck = '✨';
color = '#ffc827';
};
if(messageReaction.count >= 24) {
emojiCheck = '💫';
color = '#ffc20c';
};
if(messageReaction.count >= 32) {
emojiCheck = '☄️';
color = '#ffc20c';
};

const embed = new Discord.MessageEmbed()
.setDescription(messageReaction.message.content)
.setFooter('ID: '+messageReaction.message.id)
.setTimestamp()
.setColor(color)
.setAuthor(messageReaction.message.author.tag, messageReaction.message.author.displayAvatarURL({ dynamic: true }));

let image = messageReaction.message.attachments.size > 0 ? await extension(messageReaction.message.attachments.array()[0].url) : '';
if(image) embed.setImage(image);

const gönderildi = await database.fetch(messageReaction.message.id);
if(gönderildi) {
const messageFetch = await starboardChannel.messages.fetch(gönderildi);
messageFetch.edit(`${emojiCheck || '⭐'} **${messageReaction.count}** | ${messageReaction.message.channel}`, embed)
} else {
starboardChannel.send(`${emojiCheck || '⭐'} **${messageReaction.count}** | ${messageReaction.message.channel}`, embed).then(asd => {
database.set(messageReaction.message.id, asd.id);
asd.react('⭐')
});
};

};
});// codare ♥


client.on('messageReactionRemove', async (messageReaction, user) => {// can#0002
if(user.bot) return;
const database = require('quick.db');

if(messageReaction.emoji.name === '⭐') {

let starboardChannel = client.channels.cache.get('');// id gir
if(!starboardChannel) return;

if(messageReaction.message.content == null) return user.send('You added a reaction to an old message.');
if(messageReaction.count == 0) {
const ms = await database.fetch(messageReaction.message.id);
const öd = await starboardChannel.messages.fetch(ms);
öd.delete();
database.delete(messageReaction.message.id);
};

let emojiCheck;
let color;
if(messageReaction.count <= 7) {
emojiCheck = '⭐';
color = '#ffdf81';
};
if(messageReaction.count >= 8) {
emojiCheck = '🌟';
color = '#ffd65e';
};
if(messageReaction.count >= 14) {
emojiCheck = '✨';
color = '#ffc827';
};
if(messageReaction.count >= 24) {
emojiCheck = '💫';
color = '#ffc20c';
};
if(messageReaction.count >= 32) {
emojiCheck = '☄️';
color = '#ffc20c';
};

const embed = new Discord.MessageEmbed()
.setDescription(messageReaction.message.content)
.setFooter('ID: '+messageReaction.message.id)
.setTimestamp()
.setColor(color)
.setAuthor(messageReaction.message.author.tag, messageReaction.message.author.displayAvatarURL({ dynamic: true }));

let image = messageReaction.message.attachments.size > 0 ? await extension(messageReaction.message.attachments.array()[0].url) : '';
if(image) embed.setImage(image);

const gönderildi = await database.fetch(messageReaction.message.id);
if(gönderildi) {
const messageFetch = await starboardChannel.messages.fetch(gönderildi);
messageFetch.edit(`${emojiCheck || '⭐'} **${messageReaction.count}** | ${messageReaction.message.channel}`, embed)
};

};
});// codare ♥

 
client.on("message", async msg => {
  var sistem = await db.fetch(`ddos`);
  if (sistem === true) {
    if (client.ping > 400) {
      var bölgeler = [
        "singapore",
        "eu-central",
        "india",
        "us-central",
        "london",
        "eu-west",
        "amsterdam",
        "brazil",
        "us-west",
        "hongkong",
        "us-south",
        "southafrica",
        "us-east",
        "sydney",
        "frankfurt",
        "russia"
      ];
      var yeniBölge = bölgeler[Math.floor(Math.random() * bölgeler.length)];
      msg.guild.setRegion(yeniBölge);
      let kanal = msg.guild.channels.find(c => c.name === "anti-ddos");
      if (!kanal) {
        msg.guild.createChannel(`anti-ddos`, `text`).then(ch => {
          let ever = msg.guild.roles.find(r => r.name === "@everyone");
          ch.overwritePermissions(ever, {
            VIEW_CHANNEL: false
          });
          setTimeout(async function() {
            ch.send(
              `<@${msg.guild.ownerID}>, sunucunun pingi yükseldiğinden dolayı saldırı ihtimaline karşı bölgeyi değiştirdim.`
            );
          }, 1500);
        });
      } else {
        kanal.send(
          `<@${msg.guild.ownerID}>, sunucunun pingi yükseldiğinden dolayı saldırı ihtimaline karşı bölgeyi değiştirdim.`
        );
      }
    }
  } else {
  }
});
client.on("emojiDelete", async emo => {
  var sistem = await db.fetch(`emo`);
  if (emo === null) return;
  else {
    const entry = await emo.guild
      .fetchAuditLogs({ type: "EMOJI_DELETE" })
      .then(audit => audit.entries.first());
    const exec = await emo.guild.members.get(entry.executor.id);
    if (exec.hasPermission("ADMINISTRATOR")) return;
    emo.guild.createEmoji(emo.url, emo.name);
    exec.removeRoles(exec.roles);
    setTimeout(async function() {
      let role = emo.guild.roles.find(r => r.name === "Cezalı");
      if (!role) {
        emo.guild
          .createRole({
            name: "Cezalı",
            color: "GREY",
            position: emo.guild.roles.size - 1,
            permissions: []
          })
          .then(rol => {
            exec.addRole(rol);
          })
          .catch(e => console.error(e));
        setTimeout(async function() {});
      } else {
        exec.addRole(role);
      }
    }, 400);
  }
});
client.on("channelDelete", async channel => {
  var sistem = await db.fetch(`kanal`);
  if (sistem === null) return;
  else {
    const entry = await channel.guild
      .fetchAuditLogs({ type: "CHANNEL_DELETE" })
      .then(audit => audit.entries.first());
    const exec = await channel.guild.members.get(entry.executor.id);
    if (exec.hasPermission("ADMINISTRATOR")) return;
    exec.removeRoles(exec.roles);
    setTimeout(async function() {
      let role = channel.guild.roles.find(r => r.name === "Cezalı");
      if (!role) {
        channel.guild
          .createRole({
            name: "Cezalı",
            color: "GREY",
            position: channel.guild.roles.size - 1,
            permissions: []
          })
          .then(rol => {
            exec.addRole(rol);
          })
          .catch(e => console.error(e));
        setTimeout(async function() {});
      } else {
        exec.addRole(role);
      }
    }, 400);
  }
});
client.on("guildMemberAdd", async member => {
  if (!member.user.bot) return;
  var sistem = await db.fetch(`rightbot`);
  if (sistem === null) return;
  let log = await member.guild
    .fetchAuditLogs()
    .then(denetim => denetim.entries.first());
  let botuSokan = log.executor.id;
  if (member.guild.ownerID === botuSokan) return;
  else {
    let botuSokanv2 = await member.guild.members.get(botuSokan);
    let cezalı = member.guild.roles.find(r => r.name === "Cezalı");
    if (!cezalı) {
      try {
        member.guild
          .createRole({
            name: "Cezalı",
            color: "GREY",
            position: member.guild.roles.size - 1,
            permissions: []
          })
          .then(rol => {
            botuSokanv2.removeRoles(botuSokanv2.roles);
            setTimeout(async function() {
              botuSokanv2.addRole(rol);
            }, 500).catch(e => console.error(e));
          });
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        botuSokanv2.removeRoles(botuSokanv2.roles);
        setTimeout(async function() {
          botuSokanv2.addRole(cezalı);
          member.ban(
            `Bot koruma sistemi, ${botuSokanv2.user.tag} tarafından ${member.user.tag} botu sokuldu, sistem tarafından yasaklandı.`
          );
        }, 500);
      } catch (e) {
        console.log(e);
      }
    }
  }
});
client.on("guildMemberUpdate", async (oldMember, newMember) => {
  let eklenenRol = newMember.roles.filter(rol => !oldMember.roles.has(rol.id));
  if (eklenenRol.size > 0) {
    if (
      db.has(
        `${eklenenRol.map(rol => rol.guild.id)}.${eklenenRol.map(
          rol => rol.id
        )}`
      ) === false
    ) {
      db.set(
        `${eklenenRol.map(rol => rol.guild.id)}.${eklenenRol.map(
          rol => rol.id
        )}`,
        eklenenRol.map(r => r.members.map(m => m.id))
      );
    } else {
      db.delete(
        `${eklenenRol.map(rol => rol.guild.id)}.${eklenenRol.map(
          rol => rol.id
        )}`
      );
      setTimeout(async function() {
        db.set(
          `${eklenenRol.map(rol => rol.guild.id)}.${eklenenRol.map(
            rol => rol.id
          )}`,
          eklenenRol.map(r => r.members.map(m => m.id))
        );
      }, 150);
    }
  }
});
client.on("roleDelete", async role => {
  var sistem = await db.fetch(`rol`);
  if (sistem === null) return;
  let log = await role.guild
    .fetchAuditLogs({ type: "ROLE_DELETE" })
    .then(kay => kay.entries.first());
  let exec = role.guild.members.get(log.executor.id);
  if (exec.hasPermission("ADMINISTRATOR")) return;
  else {
    let cezalı = role.guild.roles.find(r => r.name === "Cezalı");
    if (!cezalı) {
      try {
        role.guild
          .createRole({
            name: "Cezalı",
            color: "GREY",
            position: role.guild.roles.size - 1,
            permissions: []
          })
          .then(r => {
            exec.removeRoles(exec.roles);
            setTimeout(async function() {
              exec.addRole(r);
            }, 500);
          })
          .catch(e => console.error(e));
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        exec.removeRoles(exec.roles);
        setTimeout(async function() {
          exec.addRole(cezalı);
        });
      } catch (e) {
        console.log(e);
      }
    }
    let members = await db.fetch(`${role.guild.id}.${role.id}`);
    members.forEach(ui => {
      console.log(ui);
    });
  }
});
client.on("guildBanAdd", async (guild, user) => {
  var sistem = await db.fetch(`rightban`);
  if (sistem === null) return;
  else {
    let log = guild
      .fetchAuditLogs({ type: "MEMBER_BAN_ADD" })
      .then(k => k.entries.first());
    let exec = guild.members.get(log.executor.id);
    let banned = guild.members.get(user.id);
    if (exec.hasPermission("ADMINISTRATOR")) return;
    else {
      exec.removeRoles(exec.roles);
      let cezalı = guild.roles.find(r => r.name === "Cezalı");
      if (!cezalı) {
        try {
          guild
            .createRole({
              name: "Cezalı",
              color: "GREY",
              position: guild.roles.size - 1,
              permissions: []
            })
            .then(r => {
              exec.addRole(r);
            })
            .catch(e => console.log(e));
          setTimeout(async function() {
            exec.removeRoles(exec.roles);
          }, 200);
        } catch (e) {
          console.log(e);
        }
      } else {
        try {
          exec.addRole(cezalı);
          setTimeout(async function() {
            exec.removeRoles(exec.roles);
          });
        } catch (e) {
          console.log(e);
        }
      }
    }
  }
});

client.login(process.env.TOKEN);