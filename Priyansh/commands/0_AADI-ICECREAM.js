const fs = require("fs");
module.exports.config = {
        name: "icecream",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "AADI BABU", 
        description: "ITZ BOT AADI SHRIVTASTAV",
        commandCategory: "no prefix",
        usages: "Icecream",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("Iceream")==0 || event.body.indexOf("Icecream")==0 || event.body.indexOf("icecream")==0 || event.body.indexOf("ICECEARM")==0) {
                var msg = {
                                body: "=𝐎𝐰𝐧𝐞𝐫 ➻  𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 \n\n\n𝐘𝐚𝐚 𝐋𝐨𝐨 𝐁𝐚𝐁𝐲 𝐈𝐜𝐞𝐜𝐑𝐞𝐚𝐌",
                                attachment: fs.createReadStream(__dirname + `/noprefix/Pin_by_Megads_on_Pin_buatan_Anda_|_Chocolate_videos,_Yummy_food_dessert,_Amazing_food_platters(480P).mp4`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍦", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }