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
    .setDetails(`.`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/828552178746654721/1227859209769713724/Picsart_24-04-11_01-53-48-163.jpg?ex=6629f000&is=66177b00&hm=8b388a5bc8b323d599154a3fd9b99fc6eafa0cdfdd237457993832a1569f2551&') //You can put links in tenor or discord and etc.
.setAssetsLargeText('.') //Text when you hover the Large image

.setAssetsSmallText('loser') //Text when you hover the Small image 
    .addButton('⟬ 𝑋 ༚ 𝑂 ⟭', 'https://open.spotify.com/track/5ZicFGBDAi9J2YCVesboUp?si=KCmQHJnhSPG2uoFoblg_xQ')
 

  client.user.setActivity(r);
client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
