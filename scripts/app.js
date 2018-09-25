const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("../config.js")

client.on("ready", () => { 
console.log("[READY]", "Logged In As " client.user.username + "!")
client.user.setStatus("dnd")
client.user.setActivity("With " + client.users.size + " Users!")
});
