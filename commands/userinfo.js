const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
let i = 0;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('userinfo')
        .setDescription('Donne des infos sur l\'utilisateur.'),
    async execute(interaction) {

        let user_bot = interaction.user.bot;
        
        
        if (user_bot == false) {
            user_bot = ':x:';
        } else {
            user_bot = ':white_check_mark:';
        }
     const embed = new EmbedBuilder()
        .setColor('Random')
        .setThumbnail(interaction.user.displayAvatarURL({ dynamic: true }))
        .setTitle(`Informations sur ${interaction.user.tag}`)
         .addFields(
            {
                name: 'Informations Utilisateur ',
                value: [
                    `- Pseudo : ${interaction.user.username}`,
                    `- Tag : ${interaction.user.tag}`,
                    `- ID : ${interaction.user.id}`,
                    `- Bot : ${user_bot}`
                ].join('\n')
            },
            {
                name: 'Informations Compte ',
                value: [
                    `- A rejoint : <t:${parseInt(interaction.member.joinedTimestamp / 1000)}:R>`,
                    `- Compte crée : <t:${parseInt(interaction.user.createdTimestamp / 1000)}:R>`
                ].join('\n')
            }
            //  {
            //      name: ':robot:Robot :',
            //      value: user_bot,
            //      inline: true,
            //  },
            //  {
            //     name: 'ID :',
            //     value: interaction.user.id,
            //     inline: true,
            //  },
            //  {
            //     name: 'Compte crée : ',
            //     value: `<t:${parseInt(interaction.user.createdTimestamp / 1000)}:R>`, // interaction.user.createdAt.toString(),
            //     inline: true,
            //  },
            //  {
            //     name: 'Serveur rejoint le : ',
            //     value: `<t:${parseInt(interaction.member.joinedTimestamp / 1000)}:R>`
            //  },
            //  {
            //     name: 'Status : ',
            //     value: `${interaction.user.presence.activities}`
            //  }
         )
        i++;
        console.log(`The command has been used ${i} times since bot has been started.`);
        await interaction.reply({ embeds: [embed] });
    },
};