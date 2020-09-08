let disc;
let b;
let conf;
let msg;
let a;
let g;

module.exports = {

    load: (discord, bot, config, message, args, guild) => {
        disc = discord;
        b = bot;
        conf = config;
        msg = message;
        a = args;
        g = guild;
    },

    timed_msg: (string, time) => {
        return msg.channel.send(string).then(msg => msg.delete(time));
    },

    no_perm: (error) => {
        let embed = new disc.RichEmbed()
            .setColor('#d30000')
            .setAuthor('ERROR: Você não tem permissão para isto!', b.user.displayAvatarURL)
            .setThumbnail(b.user.avatarURL)
            .setDescription(error)
            .setFooter('Permissões insuficientes!');

        return embed;
    },

    cmd_fail: (error, syntax) => {
        let embed = new disc.RichEmbed()
            .setColor("#8e0000")
            .setAuthor('ERROR: SINTAX INCORRETA', b.user.displayAvatarURL)
            .setThumbnail(b.user.avatarURL)
            .setDescription(error)
            .setFooter(syntax);
        return embed;
    }
}