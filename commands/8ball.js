const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('8ball')
        .setDescription('Réponds à votre question.')
        .addStringOption(option =>
            option.setName('question')
                .setDescription('La question que vous voulez posez.')
                .setRequired(true)),
    async execute(interaction) {
        let question = interaction.option.getString('question');
        console.log(question);
    }
}