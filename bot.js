//import discordjs and secret token
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./secret/config.json");
const prefix = config.prefix;

//on startup
client.on("ready", () => {
    console.log("login successful");
});

//rest of code
client.on("message", async (message) => {
    const command = message.content.toLocaleLowerCase();

    //bot-specific commands
    if(command == prefix + "help") {
        //help command, maybe link to online document
        message.channel.send("help command");
    }

    if(command == prefix + "about") {
        message.channel.send("Hi I'm Plague Doctor (aka PlagueBot)! Learn more about me at https://github.com/c0range/plaguebot");
    }

    if(command == prefix + "start") {
        //start game
    }

    if(command == "cough" || command == "sneeze" || command =="spit") {
        cough();

        async function cough() {
            const seconds = message.createdAt.getSeconds() + 60;
            console.log(seconds);
            message.channel.send(`${message.member.nickname} coughed at ${message.createdAt}`);
            const mAll = await message.channel.messages.fetch({ limit: 10});
            const mNoBot = mAll.filter(m => m.author.id !== '691029385846849566');
            mNoBot.first(message => console.log(message.content));
            
            
            
        }
    }
});

client.login(config.token);