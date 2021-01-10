const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json")
const prefix = config.prefix
const token = config.token



client.on("ready", ()=> {console.log("Connecté")})

client.login(token)
