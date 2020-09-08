const discord = require('discord.js');
const {prefix} = require('../settiings/config.json');

module.exports.run = async (bot, message, args) => {

    let embed = new discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(bot.user.avatarURL)
        .setTitle(`-=- Help -=- Vamo ajudar esse viadinho aqui`)
        .addField(`${prefix}play <music/url>`, 'Toca musica!')
        .addField(`${prefix}search <music>`, 'Ṕrocura a musica no youtoba')
        .addField(`${prefix}skip`, 'Coloca a proxima musica da fila')
        .addField(`${prefix}volume [volume]`, 'Altera o volume')
        .addField(`${prefix}pause`, 'Pausa a musica')
        .addField(`${prefix}resume`,'Volta a musica a tocar')
        .addField(`${prefix}stop`, 'Para a musica e mete o pe na bunda do bot');

    message.channel.send(embed);

};

module.exports.help = {
    name: 'help',
    aliases: []
};