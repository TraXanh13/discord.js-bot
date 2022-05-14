const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('uptime')
        .setDescription('Total time bot has been up'),
    async execute(interaction) {
        await interaction.reply(`Bots been up for: ${interaction.client.uptime/1000}s`)
    }
}