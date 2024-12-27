# **GodArgon Bot**

**GodArgon** is a powerful and destructive Discord bot designed to take control of servers by changing server names, deleting channels, and sending spam messages. It can be used for educational purposes or testing but can be dangerous if deployed carelessly. Please use it responsibly!

---

## **Key Features:**

- **Channel Creation**: Automatically creates multiple channels with dark, chaotic names.
- **Server Name Change**: Randomly changes the server name to something ominous.
- **Spam Messages**: Sends aggressive, chaotic messages to newly created channels.
- **Console Output**: Console logs are styled with neon blue for better visibility.
- **Customizable**: Easily adjust settings like the bot’s prefix, token, and other parameters.

---

## **Installation:**

### 1. Clone the Repository:
```bash
git clone https://github.com/yourusername/godargon-bot.git
cd godargon-bot
```
2. Install Dependencies:
Ensure you have Node.js installed (version 16 or above recommended).

Run the following command to install required dependencies:

bash
Copy code
npm install
3. Set Up the Bot:
Create a new bot on the Discord Developer Portal.
Copy the bot token.
Open the config.js (or similar) file and paste your bot token into the godArgonToken field.
4. Run the Bot:
Once everything is set up, you can start the bot by running:

bash
Copy code
node index.js
How It Works:
Command Prefix:
The bot listens for commands that start with !. The primary command is !god, which triggers the following actions:

Changes the server name to a randomly chosen name from the godArgonServerNames list.
Deletes all existing channels in the server.
Creates new channels with random names from the godArgonChannelNames array.
Spam Messages:
Once new channels are created, the bot will send aggressive messages to each channel, such as:

Warnings and system malfunction alerts.
20 messages will be sent per channel with a 50ms delay between each.
Commands:
!god [option]
Changes the server's name, deletes all channels, and creates new ones based on the option.

Options:
!god 1 - Changes the server name to "GODARGON TERMINATION MODE" and performs destructive actions.
!god 2 - Changes the server name to "GODARGON CHAOS STATE" and performs destructive actions.
!god 3 - Changes the server name to "GODARGON FINAL STAGE" and performs destructive actions.
!god 4 - Changes the server name to "GODARGON END OF DAYS" and performs destructive actions.
If no option is provided, it defaults to the first server name.

Important Notes:
Permissions: The bot requires administrator permissions to delete channels and send messages in the server. Make sure it has full access.
Destructive Nature: The bot performs destructive actions such as deleting channels and sending aggressive messages. Use with caution. Misuse can lead to Discord account/server bans.
Bot Token: Don’t forget to paste your bot's token into the godArgonToken field.
Customization:
You can modify several aspects of the bot, including:

Prefix: Change the bot’s command prefix from ! to another character.
Channel Names: Edit the list of channel names in godArgonChannelNames.
Server Names: Customize the list of server names in godArgonServerNames.
Spam Messages: Modify the spam messages in the godArgonSpamMessages array.
Disclaimer:
This bot is meant for educational purposes or testing only. Using it recklessly on a server could result in bans or violations of Discord’s Terms of Service. Use responsibly.

License:
This project is licensed under the MIT License - see the LICENSE file for details.


