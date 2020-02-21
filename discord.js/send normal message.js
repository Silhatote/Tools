const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
client.user.setPresence({ game: { name: 'Blue Dragon' , type: 'PLAYING' , url: 'https://www.digitranslators.ml/' }, status: 'dnd' })
    .then(console.log)
    .catch(console.error);

});

client.on('ready', () => {
var channel = client.channels.get('679319920768450610')
  channel.sendMessage(`Como o <@!335495862723805185> foi removido do cargo por motivos pessoais, o usuário <@!300052660655226880> assume o cargo.
Logo o será adicionado <:DigiTranslators:622303333050482688>.`);
});

client.login('NDkzNTk0MjM5ODMwMzI3MzE1.XgXysw.HjK9ijjhIpqX8Xt9SSnnySz0_IM');