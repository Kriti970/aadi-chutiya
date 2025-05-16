const fs = require("fs");
module.exports.config = {
        name: "RuhaNi",
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
        if (event.body.indexOf("Pihu")==0 || event.body.indexOf("pihu")==0 || event.body.indexOf("PIHU")==0 || event.body.indexOf("@◄───╬❆🩷❅╬───► 🩷Pîhū🩷 ◄───╬❆")==0) {
                var msg = {
                                body: "=𝐎𝐰𝐧𝐞𝐫 ➻  𝐏𝐢𝐇𝐮 𝐛𝐚𝐁𝐮 \n\n\n🙂💔",
                                attachment: fs.createReadStream(__dirname + `/noprefix/255c9fde397fdf1cb0f09fc380af5a0f.jpg`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😳", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }