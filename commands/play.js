const utils = require('../global/utils');
const config = require('../settiings/config.json');

module.exports.run = async (bot, message, args) => {

    let VC = message.member.voiceChannel;
    if (!VC) return [message.delete(), utils.timed_msg(utils.cmd_fail(`${message.author}, Entra em um canal de voz arrombado, nao sou mágico!`, `${config.prefix}play <music/url>`), 5000)];

    let url = args[0] ? args[0].replace(/<(.+)>/g, '$1') : '';
    let pl = /^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/

    let searchString = args.join(' ');
    if (!url || !searchString) return [message.delete(), utils.timed_msg(utils.cmd_fail(`${message.author}, Coloca o nome ou a url, fdp!`, `${config.prefix}play <music/url>`), 5000)];

    let perms = VC.permissionsFor(message.client.user);
    if (!perms.has('CONNECT')) return [message.delete(), utils.timed_msg(utils.cmd_fail(`${message.author}, Eu não tenho permissão pra entrar ai, to preso no rabo da sua mãe!`, `${config.prefix}play <music/url>`), 5000)];
    if (!perms.has('SPEAK')) return [message.delete(), utils.timed_msg(utils.cmd_fail(`${message.author}, Não posso falar aqui fdp, to chupando sua mãe`, `${config.prefix}play <music/url>`), 5000)];

    if (url.match(pl)) {
        let playlist = await bot.youtube.getPlaylist(url);
        let videos = await playlist.getVideos();

        for (const vid of Object.values(videos)) {
            let video = await bot.youtube.getVideoByID(vid.id)
            await bot.handleVideo(video, message, VC, true)
        }

        return message.channel.send(`🎵 **${playlist.title}** has been added to queue.`);
    } else {

        try {
            var video = await bot.youtube.getVideo(url);
        } catch (err) {
            if (err) undefined;
            try {
                var vid = await bot.youtube.searchVideos(searchString, 1);
                var video = await bot.youtube.getVideoByID(vid[0].id);
            } catch (err) {
                console.error(err);
                return [message.delete(), utils.timed_msg(utils.cmd_fail(`${message.author}, no videos can be found with the argument \`${searchString}\``, `${config.prefix}play <music/url>`), 5000)];
            }
        }
        return bot.handleVideo(video, message, VC);
    }
};

module.exports.help = {
    name: 'play',
    aliases: ['join']
};