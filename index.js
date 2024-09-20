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
 .setAssetsLargeImage('https://media.discordapp.net/attachments/501611739671166987/1286739812316877010/tumblr_3fb3404232d8903df7f1457a7f42a641_618a9385_500.gif?ex=66ef0155&is=66edafd5&hm=05aed2b2512727f9ee0966c6ba4f963f6f386567e71f8ff7bdafc295760b2adc&') //You can put links in tenor or discord and etc.
.setAssetsLargeText('𝐈𝐕.ᖾ͟ᥱ͟ᥲ͟ʋ͟ᥱ͟ᥒ') //Text when you hover the Large image

.setAssetsSmallText('loser') //Text when you hover the Small image 
    .addButton('⟬ 𝑋 ༚ 𝑂 ⟭', 'https://open.spotify.com/track/5ZicFGBDAi9J2YCVesboUp?si=KCmQHJnhSPG2uoFoblg_xQ')
 

  client.user.setActivity(r);
client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
