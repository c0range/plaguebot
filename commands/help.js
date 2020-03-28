const Discord = require('discord.js');
exports.run = (client, message, args) => {
    const helpEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('CoronaBot help')
        .setURL('https://github.com/c0range/plaguebot')
        .setAuthor('CoronaBot', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg0.etsystatic.com%2F015%2F0%2F5288709%2Fil_fullxfull.445939980_fek6.jpg', 'https://github.com/c0range/plaguebot')
        .setDescription(`Command list for CoronaBot. Add the Prefix("${client.config.prefix}") in order to run a command.\nYou can append "help" after each command to display further information about that command.`)
        .addFields(
            {name: 'help', value: 'Displays this message.'},
            {name: 'about', value: 'Displays information about this bot.'},
            {name: 'start', value: 'Initiates the game.'},
            {name: 'cough', value: 'Coughs on another human being.'},
            {name: 'coronastats', value: 'Displays IRL Covid-19 statistics by country.'},
        );
    message.reply(helpEmbed);
}