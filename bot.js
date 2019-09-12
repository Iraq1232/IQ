const Discord = require("discord.js");
const client = new Discord.Client();
var adminprefix = "$";
client.on('message', message => {
    if (message.author.id === client.user.id) return;
    if (message.guild) { 
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == '$bc') { // غير امر او برفكس
    if (!args[1]) { 
message.channel.send("**$bc <Messages> :incoming_envelope:  **");
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .setThumbnail(client.user.avatarURL)
            .addField(':beginner: Server :beginner: :twisted_rightwards_arrows: ', `${message.guild.name}`)
            .addField(':heartpulse:  Sender :heartpulse: :twisted_rightwards_arrows: ', `${message.author.username}#${message.author.discriminator}`)
            .addField(':scroll: Message :scroll: :twisted_rightwards_arrows: ', args)
            .setFooter('Devolope Code By !   R___X')
            .setColor('RANDOM')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});


client.login(process.env.BOT_TOKEN);
