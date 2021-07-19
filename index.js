const broadcast = require(`discord-broadcast`)
const Discord = require('discord.js');//npm i discord.js@dev
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", 'GUILD_MESSAGES', 'GUILD_VOICE_STATES'] });
const discordvoice = require('@discordjs/voice');
const fetch = require("node-fetch")

client.on(`ready`, async () => {
  console.log(`Bot Ready`)
  await broadcast.start({
    channel: process.env['channel'], 
    youtube: process.env['youtube'] || `https://www.youtube.com/watch?v=tkNS43oYxwY`,
    client: client,discordjs
    discordvoice: discordvoice 
  })
})

setInterval(async () => {
  const url = `https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co/`
  const response = await fetch(url, { headers: { 'User-Agent': 'by shuruhatik' } }).catch(err => {
    console.log(`Failed to ping ${url}: ${err}`);
  });
  console.log(`\u001b[32mSuccessfully pinged ${url}\u001b[0m`);
  status = response.status;
}, 120000);

client.login(process.env['token'])
