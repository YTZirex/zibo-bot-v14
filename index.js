// /* eslint-disable brace-style */
// /* eslint-disable indent */
// const dotenv = require('dotenv');
// dotenv.config();

// const fs = require('node:fs');
// const path = require('node:path');
// const { Client, GatewayIntentBits, Collection } = require('discord.js');
// const { token } = require('./config.json');

// const client = new Client({ intents: [GatewayIntentBits.Guilds] });
// client.commands = new Collection();

// const commandsPath = path.join(__dirname, 'commands');
// const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
// for (const file of commandFiles) {
// 	const filePath = path.join(commandsPath, file);
// 	const command = require(filePath);

// 	if ('data' in command && 'execute' in command) {
// 		client.commands.set(command.data.name, command);
// 	} else {
// 		console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
// 	}
// }

// const eventsPath = path.join(__dirname, 'events');
// const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('js'));

// for (const file of eventFiles) {
// 	const filePath = path.join(eventsPath, file);
// 	const event = require(filePath);
// 	if (event.once) {
// 		client.once(event.name, (...args) => event.execute(...args));
// 	} else {
// 		client.on(event.name, (...args) => event.execute(...args));
// 	}
// }

// client.login(token);
// function _0x5484(_0x334c8d,_0x52c89b){const _0x59b3d1=_0x59b3();return _0x5484=function(_0x548463,_0x5a2c15){_0x548463=_0x548463-0x186;let _0x3092d9=_0x59b3d1[_0x548463];return _0x3092d9;},_0x5484(_0x334c8d,_0x52c89b);}function _0x59b3(){const _0x4e5771=['login','512wcDOlC','751865rqrJVf','once','dotenv','commands','config','101058HsbPbR','endsWith','1575684rcDPCd','readdirSync','name','events','72628RYjqhi','1114305HdaWyW','8xKetls','50ZiBGvG','data','join','./config.json','execute','238PZiHeo','16NfPuvf','node:path','.js','48510WJIZLO','log','filter','discord.js','5392464ELHQbG'];_0x59b3=function(){return _0x4e5771;};return _0x59b3();}const _0x46b1f5=_0x5484;(function(_0x3a383f,_0x3f6ffa){const _0x14b496=_0x5484,_0x2e3b60=_0x3a383f();while(!![]){try{const _0x1c81b9=parseInt(_0x14b496(0x19b))/0x1*(-parseInt(_0x14b496(0x19d))/0x2)+parseInt(_0x14b496(0x19c))/0x3+parseInt(_0x14b496(0x186))/0x4*(parseInt(_0x14b496(0x190))/0x5)+-parseInt(_0x14b496(0x195))/0x6*(-parseInt(_0x14b496(0x1a3))/0x7)+-parseInt(_0x14b496(0x18f))/0x8*(parseInt(_0x14b496(0x189))/0x9)+parseInt(_0x14b496(0x19e))/0xa*(-parseInt(_0x14b496(0x197))/0xb)+parseInt(_0x14b496(0x18d))/0xc;if(_0x1c81b9===_0x3f6ffa)break;else _0x2e3b60['push'](_0x2e3b60['shift']());}catch(_0x82d2b9){_0x2e3b60['push'](_0x2e3b60['shift']());}}}(_0x59b3,0x9d0c5));const dotenv=require(_0x46b1f5(0x192));dotenv[_0x46b1f5(0x194)]();const fs=require('node:fs'),path=require(_0x46b1f5(0x187)),{Client,GatewayIntentBits,Collection}=require(_0x46b1f5(0x18c)),{token}=require(_0x46b1f5(0x1a1)),client=new Client({'intents':[GatewayIntentBits['Guilds']]});client['commands']=new Collection();const commandsPath=path['join'](__dirname,_0x46b1f5(0x193)),commandFiles=fs[_0x46b1f5(0x198)](commandsPath)[_0x46b1f5(0x18b)](_0x389f21=>_0x389f21['endsWith'](_0x46b1f5(0x188)));for(const file of commandFiles){const filePath=path[_0x46b1f5(0x1a0)](commandsPath,file),command=require(filePath);'data'in command&&_0x46b1f5(0x1a2)in command?client[_0x46b1f5(0x193)]['set'](command[_0x46b1f5(0x19f)][_0x46b1f5(0x199)],command):console[_0x46b1f5(0x18a)]('[WARNING]\x20The\x20command\x20at\x20'+filePath+'\x20is\x20missing\x20a\x20required\x20\x22data\x22\x20or\x20\x22execute\x22\x20property.');}const eventsPath=path['join'](__dirname,_0x46b1f5(0x19a)),eventFiles=fs[_0x46b1f5(0x198)](eventsPath)['filter'](_0x11d64b=>_0x11d64b[_0x46b1f5(0x196)]('js'));for(const file of eventFiles){const filePath=path['join'](eventsPath,file),event=require(filePath);event[_0x46b1f5(0x191)]?client[_0x46b1f5(0x191)](event[_0x46b1f5(0x199)],(..._0x5942ed)=>event[_0x46b1f5(0x1a2)](..._0x5942ed)):client['on'](event['name'],(..._0x50bcf2)=>event[_0x46b1f5(0x1a2)](..._0x50bcf2));}client[_0x46b1f5(0x18e)](token);

// we need to deobfuscate the code
/* eslint-disable brace-style */
/* eslint-disable indent */
const dotenv = require('dotenv');
dotenv.config();

const fs = require('node:fs');
const path = require('node:path');
const { Client, GatewayIntentBits, Collection } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);

	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);
	} else {
		console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
	}
}

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

client.login(token);