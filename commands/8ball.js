const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('8ball')
        .setDescription('Réponds à votre question.')
        .addStringOption(option =>
            option.setName('Question')
                .setDescription('La question que vous voulez posez.')),
    async execute(interaction) {
        let question = interaction.getString('Question');
        console.log(question);
    }
}