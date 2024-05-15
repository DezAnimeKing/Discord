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
    .setState('ㅤ ⠀⠀⠀⠀⠀⠀⠀⠀⠀ᥱ͟ᥲ͟ɾ͟t͟ᖾ.𝐗𝐗𝐕𝐈𝐈')
    .setName('mrnekrozyt')
    .setDetails(`:𝟐𝟎𝟎𝟒 • || 𝐀𝐟𝐭𝐞𝐫 𝐇𝐨𝐮𝐫𝐬。`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/828552196114743296/1240155757366739015/Picsart_24-05-15_00-15-52-214.png?ex=6645888d&is=6644370d&hm=4ae067de0e301c4df20bc45645c101d634bd5f1b720097e63e32b5c732b23b8c&') //You can put links in tenor or discord and etc.
.setAssetsLargeText('𝐈𝐕.ᖾ͟ᥱ͟ᥲ͟ʋ͟ᥱ͟ᥒ') //Text when you hover the Large image

.setAssetsSmallText('loser') //Text when you hover the Small image 
    .addButton('⟬ 𝑋 ༚ 𝑂 ⟭', 'https://open.spotify.com/track/5ZicFGBDAi9J2YCVesboUp?si=KCmQHJnhSPG2uoFoblg_xQ')
 

  client.user.setActivity(r);
client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
