const Discord = require('discord.js');
const client = new Discord.Client();
const newUsers = new Discord.Collection();
		  
client.on('ready', () => {
client.user.setPresence({ game: { name: 'The Legend of Heroes Trails in the Sky' , type: 'PLAYING' , url: 'https://www.digitranslators.ml/' }, status: 'dnd' })
    .then(console.log)
    .catch(console.error);

});


client.on('message', message => {
	let myRole = message.guild.roles.find(role => role.name === "Canal Hentai");
    let member = message.mentions.guildMember.first();
    if (message.content === 'addRole') {
    member.addRole(myRole).catch(console.error);
    }
});


client.login('NTIwMDM1OTEyNjQ2NjU2MDE3.XaNLIw.tItYg7tEBlaJ1ebqb81sjzPndG8');