const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
client.user.setPresence({ game: { name: 'Blue Dragon' , type: 'PLAYING' , url: 'https://www.digitranslators.ml/' }, status: 'dnd' })
    .then(console.log)
    .catch(console.error);

});

client.on('ready', () => {
var channel = client.channels.get('679319920768450610')
const embed = new Discord.RichEmbed()
  .setTitle("Announcement:")
  .setDescription(`@everyone
Estamos precisando de jogadores para testar e reportar erros da beta. <:AKUN_2:440620963340746762> 

**O que vou fazer?**
Apenas jogar e reportar erros de acentuação, locais que poderiam estar bugados e frases sem sentido.

**O que é necessário?**
Apenas possua conciência das regras de português, ter muita atenção para visualizar locais que poderiam estar possívelmente bugados e um computador para aplicar o patch.

**Como posso participar?**
Apenas preencha o formulário do site abaixo e escreva na caixa de mensagem: "Eu amo 100% a White." no campo "Nome" coloque seu nick do Discord.
https://www.digitranslators.ml/p/selecao-betas.html

OBS: Quem tiver o interesse, será selecionado apenas duas pessoas.
`)
  .setColor(0x00AE86)
  .setThumbnail('https://i.imgur.com/We96Utm.png')
  channel.sendMessage({embed});
});

client.login('NDkzNTk0MjM5ODMwMzI3MzE1.XgXysw.HjK9ijjhIpqX8Xt9SSnnySz0_IM');