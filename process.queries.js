const mem = require('./mem');
module.exports = {
    queries :async (data) => {
        let bannedWords = await mem.getBannedWords();
        let content = data['text'];
        let id = data['user_id'];
        let words = bannedWords.split('\n');
        let result = false;
        /*let regex;
        *let match;*/

        for (var word in words) {
            // regex = new RegExp(words[word], 'g');
            // match = bannedWords.match(regex);
            if(content.indexOf(words[word]) >= 0){
                result = true;
                mem.set(id);
            }
        }
        return result;
    },
    status: function (id) {
        return mem.get(id);
    },
};