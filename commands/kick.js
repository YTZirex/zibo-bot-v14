const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { execute } = require('./botinfo');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kick')
        .setDescription('Permet d\'exclure un utilisateur du serveur.')
        .addUserOption(option =>
            option.setName('utilisateur')
                .setDescription('Choisissez l\'utilisateur à exclure du serveur.')
                .setRequired(true)),
    async execute(interaction) {
        let member = interaction.options.getMember('utilisateur')
        interaction.reply({content: `${member} a été expulsé!`, ephemeral: false })
        member.kick();
    }
}
