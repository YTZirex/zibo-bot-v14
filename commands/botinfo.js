const { SlashCommandBuilder, EmbedBuilder, version } = require('discord.js');
const { botId } = require('../config.json');
const { os } = require('os')
require('moment-duration-format');

function uptimeString(seconds) {
    // eslint-disable-next-line prefer-const
    let days = Math.floor(seconds / (3600 * 24));
    seconds -= days * 3600 * 24;
        // eslint-disable-next-line prefer-const
    let hours = Math.floor(seconds / 3600);
    seconds -= hours * 3600;
        // eslint-disable-next-line prefer-const
    let minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;f
    return `${days} Jours, ${hours} Heures, ${minutes} Minutes, et ${seconds} secondes`;
}

module.exports = {uptimeString};

module.exports = {
    data: new SlashCommandBuilder()
        .setName('botinfo')
        .setDescription('Donne des informations sur le bot'),
    async execute(interaction) {
        const botEmbed = new EmbedBuilder()
            .setTitle('Informations sur moi')
            .setColor('Random')
            // .setDescription('Voici quelques informations sur moi!\n')
            .addFields(
                {
                    name: 'Mon ID : ',
                    value: botId,
                    inline: true,
                },
                {
                    name: 'Connecté depuis : ',
                    value: uptimeString(Math.floor(process.uptime())),
                    inline: true,
                },
                {
                    name: 'Version DiscordJS : ',
                    value: version,
                    inline: true,
                },
                {
                    name: 'Version NodeJS : ',
                    value: process.version,
                    inline: true,
                },
                {
                    name: 'Plateforme : ',
                    value: process.platform,
                    inline: true,
                },
                {
                    name: 'Utilisation RAM : ',
                    value: (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + ' MB' + ' / ' + '65 536 MB',
                    inline: true,
                },
            );
        await interaction.reply({ embeds: [botEmbed] });
      //  await interaction.reply(`Uptime: ${duration}`);
    },
};