const fs = require('fs');
const path = require('path');
module.exports = {
    getConent: async () => {
        let  bannedwordsFile = path.resolve(__dirname, "banned.txt");
        let contents = await fs.readFileSync(bannedwordsFile, 'utf8', );
        return contents;
    }
};