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
    .setState('𝖘𝖊𝖊 ɴᴏ ᴇᴠɪʟ  ꞉ 𝖍𝖊𝖆𝖗 ɴᴏ ᴇᴠɪʟ')
    .setName('mrnekrozyt')
    .setDetails(`═一 ᴄ ᴜ ʀ ꜱ ᴇ ᴅ ﹐﹐﹐`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.discordapp.net/attachments/828552196114743296/1188659067695140945/New_Project_59_3BA47F4.gif?ex=659b5405&is=6588df05&hm=cf54bdce1d7f61d7d95918c174ce0b736e5b9253acac39c331c671e319f80af1&=&width=1664&height=936') //You can put links in tenor or discord and etc.

    .setAssetsSmallImage('https://media.discordapp.net/attachments/828552196114743296/1188659603240661024/XO-Logo.png?ex=659b5485&is=6588df85&hm=656f7befec3c46cf1999d1e2&=&format=webp&quality=lossless&width=1664&height=936') //You can put links in tenor or discord and etc.

    .addButton('⟬ 𝑋 ༚ 𝑂 ⟭', 'https://open.spotify.com/track/5ZicFGBDAi9J2YCVesboUp?si=KCmQHJnhSPG2uoFoblg_xQ')
 

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
