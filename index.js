const broadcast = require(`discord-broadcast`)
const Discord = require('discord.js');//npm i discord.js@dev
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", 'GUILD_MESSAGES', 'GUILD_VOICE_STATES'] });
const discordvoice = require('@discordjs/voice');
const Monitor = require('ping-monitor');
const url = `https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co/`
const myMonitor = new Monitor({website: url,title: process.env.REPL_SLUG,interval: 2 });

client.on(`ready`, async () => {
  console.log(`Bot Ready\nﻞﺼﺘﻣ ﺕﻮﺒﻟﺍ`)
  await broadcast.start({
    channel: process.env['channel'], 
    youtube: process.env['youtube'] || `https://www.youtube.com/watch?v=tkNS43oYxwY`,
    client: client,
    discordvoice: discordvoice 
  })
})

client.login(process.env['token'])
