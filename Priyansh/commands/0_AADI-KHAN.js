const fs = require("fs");
module.exports.config = {
        name: "AAshi",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "AADI BABU", 
        description: "ITZ BOT AADI",
        commandCategory: "no prefix",
        usages: "RuhaNi",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("Aashi")==0 || event.body.indexOf("aashi")==0 || event.body.indexOf("AASHI")==0 || event.body.indexOf("@一 ᛃᰔᩚAʌsʜɩꜛฬᰔᩚː᭄ꜛᜊ")==0) {
                var msg = {
                                body: "=𝐎𝐰𝐧𝐞𝐫 ➻  𝐈𝐓𝐙 𝐀𝐚𝐬𝐇𝐢 \n\n\n🙂💔",
                                attachment: fs.createReadStream(__dirname + `/noprefix/FB_IMG_1747400625094.jpg`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😉", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }