exports.help = {
    name: "ping",
    aliases: ["pong","ping"],
}
exports.run = async (bot, message, args, functions) => {
const Discord = require('discord.js')
//ping
            var states = "🟢 Excellent";
            var states2 = "🟢 Excellent";
            var msg = `${Date.now() - message.createdTimestamp}`;
            var api = `${Math.round(bot.ws.ping)}`;
            if (Number(msg) > 70) states = "🟢 Good";
            if (Number(msg) > 170) states = "🟡 Not Bad";
            if (Number(msg) > 350) states = "🔴 Soo Bad";
            if (Number(api) > 70) states2 = "🟢 Good";
            if (Number(api) > 170) states2 = "🟡 Not Bad";
            if (Number(api) > 350) states2 = "🔴 Soo Bad";
    let pingEmbed = new Discord.MessageEmbed()
      pingEmbed.setThumbnail(bot.user.displayAvatarURL())
      pingEmbed.setColor("#2F3136");
      pingEmbed.setDescription(`**Pong🏓!**
      📱${bot.user.username} Ping `);
      pingEmbed.addField("**Time Taken:**", `\`${msg + " ms 📶 | " + states}\``, true)
      pingEmbed.addField("**WebSocket:**", `\`${api + " ms 📶 | " + states2}\``, true)
      pingEmbed.setTimestamp();
      pingEmbed.setFooter(`Requested by ${message.author.username}`, `${message.author.displayAvatarURL()}`);
   message.channel.send(pingEmbed);
    
     
   }