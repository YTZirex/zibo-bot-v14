const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("solotimer")
    .setDescription("Lance un chronomètre de 90 secondes (1m30s)."),
  async execute(interaction) {
    let sleep = async (ms) => await new Promise((r) => setTimeout(r, ms));

    console.log("Je lance un chronomètre de 90 secondes!");

    for (let i = 90; i > 0; ) {
      await sleep(100);
      i--;
      // if (i == 90) {
      //     console.log('1 minute 30 secondes restante.');
      // }
      // if (i == 60) {
      //     console.log('1 minute restante.');
      // }
      // if (i == 30) {
      //     console.log('30 secondes restante.');
      // }
      // if (i == 10) {
      //     console.log('10 secondes restante.');
      // }
      // if (i == 5)
      switch (i) {
        case 90:
          console.log("1 minute 30 secondes restante.");
          break;
        case 60:
          console.log("1 minute restante.");
          break;
        case 30:
          console.log("30 secondes restante.");
          break;
        case 10:
          console.log("10 secondes restante.");
          break;
        case 5:
          console.log("5 secondes restante.");
          break;
        case 4:
          console.log("4 secondes restante.");
          break;
        case 3:
          console.log("3 secondes restante.");
          break;
        case 2:
          console.log("2 secondes restante.");
          break;
        case 1:
          console.log("1 seconde restante.");
          break;
        case 0:
          console.log("Fin du chronomètre!");
          let timerEnded = true;
          break;
      }
      console.log(i + "s");
    }
  },
};
