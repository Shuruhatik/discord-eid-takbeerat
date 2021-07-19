const broadcast = require(`discord-broadcast`)//npm i discord-broadcast
const Discord = require('discord.js');//npm i discord.js@dev
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES", 'GUILD_MESSAGES', 'GUILD_VOICE_STATES']});
const discordvoice = require('@discordjs/voice');//npm i @discordjs/voice

client.on(`ready`, async () => {
  console.log(`Bot Ready`)
  await broadcast.start({
    channel: process.env['channel'], //The ID of the audio channel or stage channel that you want
    youtube:  process.env['youtube'] || `https://www.youtube.com/watch?v=tkNS43oYxwY`, //The link to the live broadcast you want from YouTube
    client:client, //Put the value of your client in discordjs
    discordvoice:discordvoice //Put the value of your discordvoice in @discordjs/voice
  })
})


client.login(process.env['token'])