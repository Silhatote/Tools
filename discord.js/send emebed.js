const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
client.user.setPresence({ game: { name: 'Blue Dragon' , type: 'PLAYING' , url: 'https://www.digitranslators.ml/' }, status: 'dnd' })
    .then(console.log)
    .catch(console.error);

});

client.on('ready', () => {
var channel = client.channels.get('678384671175999559')
const embed = new Discord.RichEmbed()
  .setTitle(`<:logo_set1:622303473454546957>|Download|<:logo_set1:622303473454546957>`)
  .setDescription(`<:DigiTranslators:622303333050482688> Client: http://tiny.cc/DigiTranslators_Apply 
<:logo_set1:622303473454546957> ROM LINK: http://bit.do/digimon_adventure_japan-zip 
OBS: O Client vai baixar todas as versões que vão ser lançadas em releases, por isso, não há necessidade de baixá-lo novamente.
`)
  .setColor(0x00AE86)
  .setThumbnail('https://i.imgur.com/rfbKsWE.png')
  channel.sendMessage({embed});
});

client.login('NDkzNTk0MjM5ODMwMzI3MzE1.XlA8HA.iAgEOwME3otOTNQlQU-YlR6g3Sw');