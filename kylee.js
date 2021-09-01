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
          `${message.author} tebrikler seviye **${level1}** oldun! Seviyen hakkında detaylı bilgi için **k!rank**.`
        )
        .catch(() => {});
    }

    const xp = db.get(`xp_${message.author.id}`);
    const level = db.get(`level_${message.author.id}`);

    if (message.content === "k!rank") {
      const image = await new DCanvas.RankCard()
        .setAvatar(message.author.displayAvatarURL({ format: "png" }))
        .setXP("current", +xp)
        .setXP("needed", 500)
        .setLevel(+level)
        .setRankName(message.guild.name)
        .setRank()
        .setUsername(message.author.username)
        .setBackground(
          "https://cdn.discordapp.com/attachments/841372349433511976/844092026055295005/abstract-wallpaper-1557232187mc4.png"
        )
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
    `k!yardım | ${client.guilds.cache.size} Sunucu`
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
.addField("Botu Sunucuna Ekle", "[TIKLA!](https://discord.com/api/oauth2/authorize?client_id=800091499475501086&permissions=8&scope=bot)")
.addField("Botun Web Sitesi", "[TIKLA!](https://kylee.tk/)")
.addField("Destek Sunucumuza Katıl", "[TIKLA!](https://discord.gg/NdNMzVhk65)")
.setColor('RANDOM')
  if(msg.content == `<@!800091499475501086>`) return msg.channel.send(embed); //botunuzun idsi
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

client.login(process.env.TOKEN);