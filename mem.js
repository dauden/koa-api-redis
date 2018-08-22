const co = require('co');
const redis = require("redis");
const coRedis = require("co-redis");
const fileHelper = require("./filehelper");

let db  = redis.createClient(process.env.REDIS_URL);
let dbCo = coRedis(db);
const  bannedwordsKey = "MyBadwordsKey";
let mem = {
    set: async (id) => {
        let value  = await mem.get(id);
        dbCo.set(id, ++value);
    },
    get: async (id) => {
        let value  = await dbCo.get(id);
        value = parseInt(value);
        return value;
    },
    setBannedWords: async (content) => {
        await dbCo.set(bannedwordsKey, content);
    },
    getBannedWords: async () => {
        let value;
        if(!dbCo.hasOwnProperty(bannedwordsKey)) {
            value = await  fileHelper.getConent();
            mem.setBannedWords(value);
        }
        value = dbCo.get(bannedwordsKey);
        return value;
    },
};
module.exports = mem;

