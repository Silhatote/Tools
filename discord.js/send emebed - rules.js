const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
client.user.setPresence({ game: { name: 'Blue Dragon' , type: 'PLAYING' , url: 'https://www.digitranslators.ml/' }, status: 'dnd' })
    .then(console.log)
    .catch(console.error);

});

client.on('ready', () => {
var channel = client.channels.get('630929478310297638')
const embed = new Discord.RichEmbed()
  .setColor(0xb91f1f)
  .setTitle("RULES:")
  .setDescription(`<:DigiTranslators:622303333050482688> **Não pergunte nada relevantes a datas para os administradores, ou vai levar ban.**
<:DigiTranslators:622303333050482688> **Nada de floods, ou vai levar ban também.**
<:DigiTranslators:622303333050482688> **Nada de conteúdos para +18, use o canal feito para isso.**
<:DigiTranslators:622303333050482688> **Proibido cobranças, se não é ban.**
<:DigiTranslators:622303333050482688> **Não enche o saco dos ADM ou tradutores, se não é ban**
<:DigiTranslators:622303333050482688> ***Link do convite:*** https://discord.me/digitranslators `)
  .setThumbnail('https://i.imgur.com/RyFLRow.gif')
  channel.sendMessage({embed});
});

client.login('NDkzNTk0MjM5ODMwMzI3MzE1.XgXysw.HjK9ijjhIpqX8Xt9SSnnySz0_IM');