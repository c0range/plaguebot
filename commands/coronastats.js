exports.run = (client, message, args) => {  
    const covid = require('novelcovid');
    console.log(args);
    (async () => {
        let specCountry = await covid.getCountry({country: args});
        if (args[0] == 'help') {
            message.channel.send('This command fetches the current Covid-19 cases and deaths of each country. Please enter a valid country name. Make sure they are properly capitalized, and that countries such as the United States are abbreviated (in this case "US")');
        } else if (specCountry.cases == null) {
            message.channel.send('Please enter a valid country name. Make sure they are properly capitalized, and that countries such as the United States are abbreviated (in this case "US")');
        } else {
            message.channel.send(`In ${args[0]}, there are ${specCountry.cases} confirmed cases and ${specCountry.deaths} deaths.`);
        }
        
    })();
}