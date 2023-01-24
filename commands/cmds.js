const { SlashCommandBuilder, EmbedBuilder, version } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cmds')
        .setDescription('Donne des informations sur les commandes du bot.'),
    async execute(interaction) {
        const cmdsEmbed = new EmbedBuilder()
            .setTitle("Commandes")
            .setColor('Blurple')
            .setDescription('Plus de commandes seront disponibles au fur et à mesure.')
            .addFields(
                {
                    name: 'botinfo',
                    value: ['Permet d\'avoir des informations sur moi tel que ma RAM, ma platforme, mes versions, etc...'].join('\n'),
                    inline: false,
                },
                {
                    name: 'serverinfo',
                    value: ['Permet d\'avoir des informations sur le serveur tel que le niveau de boost, le partenaire, le nom, etc...'].join('\n'),
                    inline: false,
                },
                {
                    name: 'userinfo',
                    value: ['Permet d\'avoir des informations sur soi-même.'].join('\n'),
                    inline: false,
                },
                {
                    name: 'cmds',
                    value: ['Permet de connaître les commandes du bot.'].join('\n'),
                    inline: false,
                },
                {
                    name: 'messagemotivant',
                    value: ['Donne un message motivant au hasard parmit notre liste.'].join('\n'),
                    inline: false,
                }
            );
        await interaction.reply({ embeds: [cmdsEmbed] });
    }
}