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
        let question = interaction.options.getString('question');

        let possibleAnswersArray = [
            'Non',
            'Peut-être',
            'Probablement',
            'Certainement',
            'Oui',
            'C\'est sûr!'
        ];

        let chosenAnswer = Math.floor(Math.random() * possibleAnswersArray.length)

        let ballEmbed = new EmbedBuilder()
        .setTitle('Réponse de la boule magique')
        .setColor('Blurple')
        .addFields(
            {
                name: 'Votre question :',
                value: question,
                inline: true
            },
            {
                name: 'Réponse de la boule magique : ',
                value: possibleAnswersArray[chosenAnswer],
                inline: true
            }
        )
        console.log(`${interaction.user.tag} a demandé à la boule magique -> ${question}`);
        interaction.reply({ embeds: [ballEmbed] });
    }
}