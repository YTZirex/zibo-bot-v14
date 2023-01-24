const { SlashCommandBuilder } = require('discord.js');

const messageMotivantsArray = [
    '« Vis comme si tu devais mourir demain, apprends comme si tu devais vivre toujours. », Gandhi.',
    '« Le succès n\'est pas final, l\'échec n\'est pas fatal. C\'est le courage de continuer qui compte. », Winston Churchill.',
    '« Tout est possible à qui rêve, ose, travaille et n\'abandonne jamais. », Xavier Dolan.',
    '« La seule limite à notre épanouissement de demain sera nos doutes d\'aujourd\'hui. », Franklin Delano Roosevelt.',
    '« Ceux qui ne font rien ne se trompent jamais. », Théodore de Banville.',
    '« Je ne perds jamais. Soit je gagne, soit j\'apprends. », Nelson Mandela.',
    '« Vous ne pouvez pas être ce gamin qui reste figé en haut du toboggan en réfléchissant. Vous devez glisser. », Tina Fey.',
    '« J\'ai appris il y a longtemps qu\'il y a quelque chose de pire que de rater l\'objectif : ne pas passer à l\'action. », Mia Hamm.'
];

const messageMotivant = Math.floor(Math.random() * messageMotivantsArray.length);

module.exports = {
    data: new SlashCommandBuilder()
        .setName('messagemotivant')
        .setDescription('Donne un message motivant au hasard parmit notre liste.'),
    async execute(interaction) {
        interaction.reply({ content: messageMotivantsArray[messageMotivant] });
    }
}