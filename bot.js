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
client.on("message", async (message) => {
    const command = message.content.toLocaleLowerCase();

    //bot-specific commands
    if(command == prefix + "help") {
        //help command, maybe link to online document
        message.channel.send();
    }

    if(command == prefix + "start") {
        //start game
    }
})