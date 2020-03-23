//import discordjs and secret token
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./secret/config.json");
const prefix = config.prefix;
const infectionRate = 2;

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

    if(command == "cough") {
        infectTC();

        async function infectTC() {
            const seconds = message.createdAt.getSeconds() + 60;
            //implement recent messages only
            console.log(seconds);
            //fetches previous five messages
            const mAll = await message.channel.messages.fetch({ limit: 5});
            //ignores bot role
            const mNoBot = mAll.filter(m => {
                if (m.member.roles.cache.has(config.botRole)) {
                    return false;
                } else {
                    return true;
                }
            });
            var mArray = mNoBot.array();
            var subjects = [];
            var arrayLength = mArray.length;
            for (var i = 0; i < arrayLength; i++) {
                subjects[i] = mArray[i].author.id;
            }
            //choose who to infect
            let infectChoice = Math.floor(Math.random() * mArray.length);
            //infect
            let risk = Math.floor(Math.random() * infectionRate);
            if (risk == 0) {
                message.channel.send(`${subjects[infectChoice]} has been infected!`);
            }
            message.channel.send(`Ew.. ${message.member.nickname} coughed. ${subjects.length} messages in this conversation has a chance of getting the virus. The chance of then being infected is currently ${100 / infectionRate}%.`);
            
            
            
        }
    }
});

client.login(config.token);
