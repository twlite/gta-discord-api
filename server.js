const express = require("express");
const app = express();

const Discord = require("discord.js");
const client = new Discord.Client();

app.get("/", (req, res) => {
  let gtaGuild = client.guilds.get(process.env.GTAID);
  if(!gtaGuild) return res.send({ error: "Cannot find GTA server." });
  let memberCount = gtaGuild.memberCount;
  res.send({ success: memberCount });
});

// listen for requests :)
app.listen(process.env.PORT);
console.log("Your app is listening on port " + process.env.PORT);

client.login(process.env.TOKEN);