const {
  SlashCommandBuilder,
  EmbedBuilder,
  PermissionFlagsBits,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("pban")
    .setDescription("Ban un utilisateur à vie.")
    .addUserOption((option) =>
      option
        .setName("utilisateur")
        .setDescription("Utilisateur à bannir de façon permanente.")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("raison")
        .setDescription("Raison du bannissement.")
        .setRequired(false)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
  async execute(interaction) {
    let user = interaction.options.getUser("utilisateur");

    let member = await interaction.guild.members.fetch(user.id);

    let reason = interaction.options.getString('raison') || 'Aucune raison donnée.';

    if (
      member.roles.highest.position >= interaction.member.roles.highest.position
    ) {
      return interaction.reply(
        "L'utilisateur que vous souhaitez bannir est plus Haut-Gradé que vous!"
      );
    } else {
      member.ban({ reason });
    }

    interaction.reply({
      content: `${user} a été banni par ${interaction.user.tag}.\nRaison: ${reason}`,
    });
  },
};
