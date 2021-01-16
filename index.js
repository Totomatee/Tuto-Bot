const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json")
const prefix = config.prefix
const token = config.token



client.on("ready", ()=> {console.log("Connecté")})

client.login(token)




client.on("message", async message =>{
    let embed = new Discord.MessageEmbed()
    .setTitle('Latence du bot')
    .setFooter(message.author.username, message.author.displayAvatarURL())
    .setImage('https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg')
    .setDescription(`Ping Api : ${client.ws.ping} MS\n\n Ping de modification : ${Date.now() - message.createdTimestamp} MS`)
    .setColor('#00FFD4')
.setThumbnail('https://www.alarabia.com.tn/4692-large_default/raquette-ping-pong-lisheng-0571.jpg')
.addField('Patate', 'patatessssss')
    if(message.author.bot) return
    if(message.content.startsWith(`${prefix}ping`)) {

message.reply(embed)
    }
    
    
    
    const Embedaprofondi = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Titre')
	.setURL('https://discord.js.org/')
	.setAuthor('Un nom', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.gg/qCAMmgU')
	.setDescription('Une description')
	.setThumbnail('https://images-ext-2.discordapp.net/external/FGajrDizjsgdTOQjt-ImLibxyr9BInMbIjxVBuqdDOw/%3Fsize%3D512/https/cdn.discordapp.com/avatars/663437246678171689/b706cb94999938749ba7c0f1af608843.png')
	.addFields(
		{ name: 'Titre des attachés', value: 'Une valeur ici 1' },
		{ name: '\u200B', value: '\u200B' },
		{ name: "Titre d'un attaché", value: 'Une valeur ici 2', inline: true },
		{ name: "Titre d'un attaché", value: 'Une valeur ici 3', inline: true },
	)
	.addField("Titre d'un attaché solitaire", 'Une valeur ici 4', true)
	.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
	.setFooter('Un bas de page ici', 'https://images-ext-2.discordapp.net/external/FGajrDizjsgdTOQjt-ImLibxyr9BInMbIjxVBuqdDOw/%3Fsize%3D512/https/cdn.discordapp.com/avatars/663437246678171689/b706cb94999938749ba7c0f1af608843.png');
    
    
    
    
    
    
    
    
    
    
})
