const utils = require('../global/utils');

module.exports.run = async (bot, message, args) => {

    let queue = bot.queue.get(message.guild.id);
    
    if (queue && !queue.playing) {
        queue.playing = true;
        queue.connection.dispatcher.resume();
        return message.channel.send(`🎵 Soltei essa jossa! Arroxa papai`);
    }

    return [message.delete(), utils.timed_msg('⚠ Não tem musica tocando, tu é surdo?', 5000)];
    
};

module.exports.help = {
    name: 'resume',
    aliases: []
};