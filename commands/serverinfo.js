const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('serverinfo')
        .setDescription('Donnes des informations sur le serveur'),
    async execute(interaction) {
        let partneredStatus = interaction.guild.partnered;
        let description = interaction.guild.description;

        if (description == null) {
            description = 'Aucune';
        } else {
            description = interaction.guild.description;
        }

        if (partneredStatus === true) {
            partneredStatus = ':white_check_mark:';
        } else {
            partneredStatus = ':x:';
        }
        let premiumTier = interaction.guild.premiumTier;

        if (premiumTier == 0) {
            premiumTier = 'Aucun';
        } else if (premiumTier == 1) {
            premiumTier = 'Niveau 1';
        } else if (premiumTier == 2) {
            premiumTier = 'Niveau 2';
        } else if (premiumTier == 3) {
            premiumTier = 'Niveau 3';
        } 

        const { guild } = interaction;
        const { createdTimestamp, ownerId, members, memberCount, channels, emojis, stickers, roles } = guild;

        const serverEmbed = new EmbedBuilder()
        .setColor('Blurple')
        .setThumbnail(guild.iconURL({ dynamic: true, size: 4096 }))
        .setTimestamp()
        .setTitle(`Informations sur ${interaction.guild.name}`)
        .addFields(
            {
                name: 'GÉNÉRAL ',
                value: [
                    `- Nom : ${guild.name}`,
                    `- Crée : <t:${parseInt(createdTimestamp / 1000)}:R>`,
                    `- Propriétaire : <@${ownerId}>`,
                    `- Partenaire : ${partneredStatus}`,
                    `- Description : ${description}`
                ].join('\n')
            },
            {
                name: ':person_standing: | UTILISATEURS ',
                value: [
                    `- Membres : ${members.cache.filter((m) => !m.user.bot).size}`,
                    `- Bots : ${members.cache.filter((m) => m.user.bot).size}`,
                    `Total : ${memberCount}`
                ].join('\n')
            },
            // {
            //     name: ':bookmark: | SALONS ',
            //     value: [
            //         `- Textuels : ${channels.cache.filter(c => c.type === 'GUILD_TEXT').size}`,
            //         `- Vocals : ${guild.channels.cache.filter(c => c.type === 'GUILD_VOICE').size}`,
            //         `- Threads : ${channels.cache.filter(c => c.type === 'GUILD_PUBLIC_THREAD' && 'GUILD_PRIVATE_THREAD' && 'GUILD_NEWS_THREAD').size}`,
            //         `- Catégories : ${channels.cache.filter(c => c.type === 'GUILD_CATEGORY').size}`,
            //         `- Stages : ${channels.cache.filter(c => c.type === 'GUILD_STAGE_VOICE').size}`,
            //         `- Annonces : ${channels.cache.filter(c => c.type === 'GUILD_NEWS').size}`,
            //         `Total : ${channels.cache.size}`
            //     ].join('\n')
            // },
            {
                name: ':smile: | EMOJIS & STICKERS',
                value: [ 
                    `- Animés : ${emojis.cache.filter((e) => e.animated).size}`,
                    `- Statiques : ${emojis.cache.filter((e) => !e.animated).size}`,
                    `- Stickers : ${stickers.cache.size}`,
                    `Total : ${stickers.cache.size + emojis.cache.size}`
                ].join('\n')
            },
            {
                name: '✨ | STATISTIQUES NITROS',
                value: [
                    `- Niveau de boost : ${premiumTier}`,
                    `- Nombre de boosts : ${guild.premiumSubscriptionCount}`,
                    `- Boosters : ${members.cache.filter((m) => m.premiumSince).size}`
                ].join('\n')
            }
            
            // {
            //     name: 'Propriétaire : ',
            //     value: `<@${interaction.guild.ownerId}>`,
            //     inline: true,
            // },
            // {
            //     name: 'Partenaire : ',
            //     value: partneredStatus,
            //     inline: true,
            // },
            // {
            //     name: 'Niveau de boost : ',
            //     value: premiumTier,
            //     inline: true,
            // },
            //  {
            //      name: 'Nombre de boosts : ',
            //      value: `${interaction.guild.premiumSubscriptionCount}`,
            //      inline: true,
            //  },

        );

       await interaction.reply({ embeds: [serverEmbed] });
    },
};