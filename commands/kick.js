const {
  SlashCommandBuilder,
  EmbedBuilder,
  PermissionFlagsBits,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("kick")
    .setDescription("Permet d'expulser un utilisateur.")
    .addUserOption((option) =>
      option
        .setName("utilisateur")
        .setDescription("Utilisateur à expulser.")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("raison")
        .setDescription("Permet d'ajouter une raison à l'expulsion.")
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),
  async execute(interaction) {
    let user = interaction.options.getUser("utilisateur");
    let member = interaction.guild.members.fetch(user.id);

    let reason = interaction.options.getStringOption("raison");

    if (
      member.roles.highest.position >= interaction.member.roles.highest.position
    ) {
      return interaction.reply(
        "L'utilisateur que vous voulez expulser est plus haut-gradé que vous!"
      );
    } else {
      member.kick({ reason });
    }
  },
};
