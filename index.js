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
})