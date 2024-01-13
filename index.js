require('dotenv').config();
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Self Bot Rich Presence working');
});
app.listen(process.env.PORT, () => {
    console.log('Self Bot Rich Presence working on port ' + process.env.PORT);
});

const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
    checkUpdate: false
});

custom_status = ".gg/chillzone | gg/socialized" 

client.on('ready', async () => {

  function onliner(token, status) {
    var auth, cstatus, heartbeat, start, ws;
    ws = new websocket.WebSocket();
    ws.connect("wss://gateway.discord.gg/?v=9&encoding=json");
    start = json.loads(ws.recv());
    heartbeat = start["d"]["heartbeat_interval"];
    auth = {
      "op": 2,
      "d": {
        "token": token,
        "properties": {
          "$os": "Windows 10",
          "$browser": "Google Chrome",
          "$device": "Windows"
        },
        "presence": {
            "status": status,
            "afk": false
          }
        },
      "s": null,
      "t": null
    };
    ws.send(json.dumps(auth));
    cstatus = {
      "op": 3,
      "d": {
        "since": 0,
        "activities": [{
          "type": 4,
          "state": custom_status,
          "name": "Custom Status",
          "id": "custom",
          "emoji": {
            "name": "Crown",
            "id": "1116655072751910922",
            "animated": true
          }
        }],
        "status": status,
        "afk": false
      }
    };
  }

    console.log(`${client.user.tag} is ready!`);
});

//Account Token
client.login(process.env.TOKEN);
