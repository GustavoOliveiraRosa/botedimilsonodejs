const {token} = require('../settiings/credentials.json');

module.exports = {

    ready : (bot) => {
        bot.login(token)
        bot.on('ready', () => {
            bot.user.setActivity('Music', {type: 'LISTENING'});
            bot.user.setStatus('dnd');
            console.log('-----------------------------------------------------');
            console.log('Hisoka - BOT EDIMILSON');
            console.log('Link repositorio GITHUB: https://github.com/GustavoOliveiraRosa/botedimilsonodejs');
            console.log('-----------------------------------------------------');
        });
    }
    
};
