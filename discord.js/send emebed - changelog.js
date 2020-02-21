const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
client.user.setPresence({ game: { name: 'Blue Dragon' , type: 'PLAYING' , url: 'https://www.digitranslators.ml/' }, status: 'dnd' })
    .then(console.log)
    .catch(console.error);

});

client.on('ready', () => {
var channel = client.channels.get('532349191826178058')
const embed = new Discord.RichEmbed()
  .setTitle(`Changelog:`)
  .setDescription(`<:DigiTranslators:622303333050482688> | Erros passados consertados
<:DigiTranslators:622303333050482688> | Adicionado a opção de baixar a ROM no Client (Se não tiver nenhuma iso na pasta aparece a opção para baixá-la).
<:DigiTranslators:622303333050482688> | Todos os Episódios Prinicipais e Sub-Episódios adicionados.

<:logo_set1:622303473454546957> | Patch_Version: 1.6.7
<:Adventure_Digivice:457003010820800513> | Aplicador_Version: 1.0.9
`)
  .setColor(0x00AE86)
  .setThumbnail('https://gallery.withthewill.net/albums/userpics/10002/raster_2_5A300.png')
  channel.sendMessage({embed});
});

client.login('NDkzNTk0MjM5ODMwMzI3MzE1.XlA8HA.iAgEOwME3otOTNQlQU-YlR6g3Sw');