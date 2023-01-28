const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const { execute } = require("./8ball");
const whitelistedIds = ["860281357014794241"];

module.exports = {
  data: new SlashCommandBuilder()
    .setName("shutdown")
    .setDescription("Permet d'éteindre le bot discord."),
  async execute(interaction) {
    let sleep = async (ms) => await new Promise((r) => setTimeout(r, ms));
    let d = new Date();
    var dateTime =
      "Date Time: " +
      d.getDate() +
      "/" +
      (d.getMonth() + 1) +
      "/" +
      d.getFullYear() +
      " @ " +
      d.getHours() +
      ":" +
      d.getMinutes() +
      ":" +
      d.getSeconds();

    for (i = 0; i < whitelistedIds.length; i++) {
      if (interaction.user.id === whitelistedIds[i]) {
        let shutdownEmbed = new EmbedBuilder()
          .setTitle("Mise en veille")
          .setThumbnail(interaction.user.displayAvatarURL())
          .setFooter({ text: `Commande exécutée par ${interaction.user.tag}` })
          .addFields({
            name: "Heure d'extinction: ",
            value: dateTime,
            inline: true,
          });
        interaction.reply({ embeds: [shutdownEmbed] });
        await sleep(1000);
        console.log('Bot shutted down by', interaction.user.tag);
        await sleep(1000);
        process.exit();
        
      } else {
        interaction.reply({
          content: "Tu n'as pas la permission d'exécuter cette commande!",
          ephemeral: true,
        });
      }
    }
  },
};
