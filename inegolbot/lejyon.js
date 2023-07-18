const Discord = require('discord.js');
const client = new Discord.Client();
const isaret = require('./isaret.json');
const { Client, MessageEmbed } = require('discord.js')

var prefix = isaret.prefix 

//Botun aktivitesi
client.on('ready', () => {
  console.log(`inegolden nefret ediyorum ${client.user.tag}!`);
  client.user.setActivity('inegole sovuyor', { type: 'STREAMING'})
  .then(presence => console.log('inegol online'))
});

//Sunucuya katılanları loglar.
client.on('guildMemberAdd', member =>{
  const gelengiden = member.guild.channels.cache.find(channel => channel.name === 'gelen-giden');
  const embed = new MessageEmbed()

  .setTitle('inegolbot Log Sistemi')
  .setDescription(`${member}`)
  .setAuthor('Kullanıcı Girişi')
  .setTimestamp()
  .setColor("57F287")
  .setThumbnail('https://d.newsweek.com/en/full/1904169/paul-miller-gypsy-crusader.jpg')
  .addField(member, 'made by inegol');

  gelengiden.send(embed)
})

//Sunucudan quit atanları loglar.
client.on('guildMemberRemove', member => {
  const gelengiden = member.guild.channels.cache.find(channel => channel.name === 'gelen-giden');
  const embed = new MessageEmbed()

  .setTitle('inegolbot Log Sistemi')
  .setDescription(`${member}`)
  .setAuthor('Kullanıcı Çıkışı')
  .setTimestamp()
  .setColor("ED4245")
  .setThumbnail('https://d.newsweek.com/en/full/1904169/paul-miller-gypsy-crusader.jpg')
  .addField(member, 'made by inegol');

  gelengiden.send(embed)

})

//inegol yazılınca mesaj kanalına atılacak mesaj
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'inegol') {
    msg.channel.send('inegolde okunur mu moruk');
  }
});

//Arap selamı verilince özelden atılacak mesaj.
client.on('message', msg => {
  if (msg.content.toLowerCase() ==='lol') {
    msg.author.send('sunucu icerisinde lol hakkında konusmak yasak');
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'onder') {
    const kanal = new MessageEmbed()

    .setTitle('onder gypsy a saygı duyun')
    .setDescription('onder gypsy a saygı duyun')
    .setAuthor('onder gypsy a saygı duyun')
    .setColor("RANDOM")
    .setThumbnail('https://d.newsweek.com/en/full/1904169/paul-miller-gypsy-crusader.jpg')
    .addField(':heart: onder gypsy a saygı duyun', 'yasasin buyuk onder');
    message.channel.send(kanal);
  }
});

//Bot tokeni
client.login('MTExOTMwMDQwNzkwMzEzMzcwOA.GhIssl.E1I0crAG-23DIRrfr4u_IPqV0ezuzX2Lhx7m1w');