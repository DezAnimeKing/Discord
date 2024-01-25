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
    .setState('ぷ ▸ ᴋɪɴɢ ᴏғ ᴄᴜʀsᴇs♦︎')
    .setName('mrnekrozyt')
    .setDetails(`𝙔𝙤𝙪 𝙁𝙤𝙤𝙡.`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.discordapp.net/attachments/828552196114743296/1199976701216690186/Picsart_24-01-25_02-18-00-666.png?ex=65c48064&is=65b20b64&hm=4b5318c1d64236fb1e570e37f3aa2744ad43269127a2124d354378165ceb9d1b&') //You can put links in tenor or discord and etc.

    .setAssetsSmallImage('https://media.discordapp.net/attachments/828552196114743296/1199978015279562843/New_Project_69_0C6154F.gif?ex=65c4819d&is=65b20c9d&hm=cded3e796732b4b2811b7f31f92cbe5348e73b1f0e6e770641d9f6d420863929&') //You can put links in tenor or discord and etc.

    .addButton('⟬ 𝑋 ༚ 𝑂 ⟭', 'https://open.spotify.com/track/5ZicFGBDAi9J2YCVesboUp?si=KCmQHJnhSPG2uoFoblg_xQ')
 

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
