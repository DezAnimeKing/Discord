const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1188655662880784484')
    .setType('STREAMING')
    .setURL('https://www.twitch.tv/developer') //Must be a youtube video link 
    .setState('ぷ ▸')
    .setName('mrnekrozyt')
    .setDetails(``)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/828552178746654721/1227820598584021002/1227820522272854067remix-1712805641636.png?ex=6629cc0a&is=6617570a&hm=7b7daf5aa1eff7a840358c9550d2816b7a6002b6a4070e9c7f7dad6dd8d39b3d&') //You can put links in tenor or discord and etc.

    .addButton('⟬ 𝑋 ༚ 𝑂 ⟭', 'https://open.spotify.com/track/5ZicFGBDAi9J2YCVesboUp?si=KCmQHJnhSPG2uoFoblg_xQ')
 

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
