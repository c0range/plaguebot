exports.run = (client, message, args) => {
    if (message.member.hasPermission("ADMINISTRATOR") || message.author.id == client.config.creator) {
        message.channel.send("are you sure you want to initiate the game?");
    } else {
        message.channel.send("I'm sorry. You do not have the permission to use this command.");
    }
}