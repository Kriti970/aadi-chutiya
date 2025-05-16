const fs = require("fs");
module.exports.config = {
  name: "Basanti",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "PRINCE RAJPUT", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("Basanti") ||
     react.includes("nach") ||
     react.includes("🍼") ||
react.includes("🛩️")) {
    var msg = {
        body: `KAISA LAGA MERA DANCE🙈👈`,attachment: fs.createReadStream(__dirname + `/noprefix/kokal.mp4`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😡", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
