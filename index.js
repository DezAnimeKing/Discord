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
    .setDetails(`    ﹐﹐ㅤㅤㅤㅤ/:𝟐𝟎𝟎𝟒 • || 𝐓𝐚𝐤𝐞 𝐦𝐲 𝐁𝐫𝐞𝐚𝐭𝐡。`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.discordapp.net/attachments/828552196114743296/1230382870049067058/200w_1.gif?ex=66331e57&is=6620a957&hm=074e82a884019bc4ad62cc0a02537b524427e47a3cd072358fa5b26c7fbc89e3&') //You can put links in tenor or discord and etc.
.setAssetsLargeText('𝐈𝐕.ᖾ͟ᥱ͟ᥲ͟ʋ͟ᥱ͟ᥒ') //Text when you hover the Large image

.setAssetsSmallText('loser') //Text when you hover the Small image 
    .addButton('⟬ 𝑋 ༚ 𝑂 ⟭', 'https://open.spotify.com/track/5ZicFGBDAi9J2YCVesboUp?si=KCmQHJnhSPG2uoFoblg_xQ')
 

  client.user.setActivity(r);
client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
