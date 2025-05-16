module.exports.config = {
  name: "Hotgirl",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "PREM BABU",
  description: "hot girl dp",
  commandCategory: "Random-IMG",
  usages: "hotgirldp",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }

};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = ["https://i.imgur.com/7IR0kAq.jpeg","https://i.imgur.com/qrkh5tv.jpeg","https://i.imgur.com/fey5P6o.jpeg","https://i.imgur.com/mVQtEs3.jpeg","https://i.imgur.com/ssSFVY5.jpeg","https://i.imgur.com/5riiuJ4.jpeg","https://i.imgur.com/BUQAJkv.jpeg"           ];
     var callback = () => api.sendMessage({body:`💝💝💝`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
