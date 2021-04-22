const Discord = require('discord.js');
const client = new Discord.Client();
const swear = require('./commands/swear')
const {token}= require('./config.json')
client.on('ready', () => {
  swear(client, ['amk','aq','31','orospu','anan','anani sikim','30+1','29+2','10+21','69','hentai','pic','piç'], msg => {
    msg.delete({timeout:300});
  })
  client.user.setActivity('Yeni özellikler çok yakında!')
  console.log(`Logged in as ${client.user.tag}!`);


});

client.on('message', msg =>{

  if (msg.member.hasPermission('KICK_MEMBERS')) {
    if (msg.content.startsWith('!kick'))
    {
      const user = msg.mentions.users.first()
  
      if (user) {
        const member = msg.guild.members.resolve(user)
        if (member){
          member.kick() 
        }
      }
      
    }
  }

  if (msg.member.hasPermission('BAN_MEMBERS')) {
    if (msg.content.startsWith('!ban'))
    {
      const user = msg.mentions.users.first()
  
      if (user) {
        const member = msg.guild.members.resolve(user)
        if (member){
          member.ban() 
        }
      }
      
    }
  }
})

client.login(token)
