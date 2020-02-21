const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
client.user.setPresence({ game: { name: 'Blue Dragon' , type: 'PLAYING' , url: 'https://www.digitranslators.ml/' }, status: 'dnd' })
    .then(console.log)
    .catch(console.error);

});

client.on('ready', () => {
var channel = client.channels.get('630927816657076234')
  channel.sendMessage('**```fix\r\n DIGIMON ADVENTURE: LAST EVOLUTION KIZUNA - 2nd Trailer [English Sub]```** \r\n https://youtu.be/3h-ZjRwPL6M');
});

client.login('NDkzNTk0MjM5ODMwMzI3MzE1.XgXysw.HjK9ijjhIpqX8Xt9SSnnySz0_IM');