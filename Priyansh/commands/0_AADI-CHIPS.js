const fs = require("fs");
module.exports.config = {
        name: "chips",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "AADI BABU", 
        description: "ITZ BOT AADI SHRIVTASTAV",
        commandCategory: "no prefix",
        usages: "Chips",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("chips")==0 || event.body.indexOf("Chips")==0 || event.body.indexOf("CHIPS ")==0 || event.body.indexOf("Chipas")==0) {
                var msg = {
                                body: "=𝐎𝐰𝐧𝐞𝐫 ➻  𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 \n\n\n𝐘𝐚𝐚 𝐋𝐨𝐨 𝐁𝐚𝐁𝐲 𝐜𝐇𝐚𝐔𝐦𝐈𝐧",
                                attachment: fs.createReadStream(__dirname + `/noprefix/Pinterest-mini-aesthetics-snack-party.mp4`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥟", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }