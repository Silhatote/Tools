const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
client.user.setPresence({ game: { name: 'Blue Dragon' , type: 'PLAYING' , url: 'https://www.digitranslators.ml/' }, status: 'dnd' })
    .then(console.log)
    .catch(console.error);

});

client.on('ready', () => {
var channel = client.channels.get('631282690527592479')
const embed = new Discord.RichEmbed()
  .setTitle("Changelog Progress")
  .setColor(0x00AE86)
  .setDescription("This is the main body of text, it can hold 2048 characters.")
  .setImage("https://i.imgur.com/zPfdhec.jpg")
  .setThumbnail("https://2.bp.blogspot.com/-sHFT6oYkyCQ/XUJgR6vrWXI/AAAAAAAAAPE/FUe8R0dcGtoWAZ5uUK2szndwC5fMdAW9ACLcBGAs/s1600/Digi-Translators_3.png")
  .setTimestamp()
  .setURL("https://www.digitranslators.ml/p/digimon-adventure.html")
  .addBlankField(true)
  channel.sendMessage({embed});
});

client.login('NDkzNTk0MjM5ODMwMzI3MzE1.XgXysw.HjK9ijjhIpqX8Xt9SSnnySz0_IM');