//import discordjs and secret token
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require(".secret/config.json");
const prefix = config.prefix;

//on startup
client.on("ready", () => {
    console.log("login successful");
})

//rest of code