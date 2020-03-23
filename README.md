# PlagueBot

This Discord bot is a fun project that I started to spend time during the quarantine and also have fun with friends on Discord servers.

## Idea

The idea of the bot is to have a game inside a server where members engage in a Plague Inc.-like game.

## Installation

This bot uses discord.js to function. Clone this repo, go to the directory in terminal and type `npm init -y`. Then, install discord.js with `npm install discord.js @discord/opus`.
Create a folder in the root directory called `secret`. Here, create a config.json file.
The file content should be like this:
```JSON
{
    "token" : "YOUR-TOKEN-HERE",
    "prefix" : "YOUR-PREFIX-HERE",
    "botRole" : "BOT-ROLE-ID"
}
```
In the `token` field, insert your bot secret token obtained from Discord's developer portal.
For `prefix`, choose your own command symbol like "!" or "$" so it does not conflict with existing bots.
For `botRole`, put in the id of the role that the server uses to classify bots. To get the id, right click on a role and click "Copy ID." Doing this will effetively ignore all bot actions to optimize gameplay.

## The Game

