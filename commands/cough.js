exports.run = (client, message, args) => {
    infectTC();

    async function infectTC() {
        const seconds = message.createdAt.getSeconds() + 60;
        //implement recent messages only
        console.log(seconds);
        //fetches previous five messages
        const mAll = await message.channel.messages.fetch({ limit: 5});
        //ignores bot role
        const mNoBot = mAll.filter(m => {
            if (m.author.bot) {
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
        let risk = Math.floor(Math.random() * client.config.infectionRate);
        if (risk == 0) {
            message.channel.send(`${mArray[infectChoice].member.nickname} has been infected!`);
        }
        infect(mArray[infectChoice].member);

        message.channel.send(`Ew.. ${message.member.nickname} coughed. ${subjects.length} messages in this conversation has a chance of getting the virus. The chance of then being infected is currently ${100 / client.config.infectionRate}%.`);

        
        
    }

    async function infect(patient) {
        //infection (give role infected)
        const infectedRole = await message.guild.roles.fetch('691565851945467904'); //replace with proper config variable
        patient.roles.add([infectedRole.id]);
        console.log(`infected ${patient.nickname}`);
        
    }
    
}