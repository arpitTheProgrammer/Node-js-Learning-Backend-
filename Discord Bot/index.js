const {Client, GatewayIntentBits} = require("discord.js")


const client = new Client({ intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages, 
    GatewayIntentBits.MessageContent] 
});

client.on('messageCreate', (message) => {
    console.log(message.content) //  When message create call this function
    if(message.author.bot){
        return;
    }
    message.reply({
        content: "hay From Bot"
    })
})

client.login('MTMzMjM0MzA2ODI2MjkyODQxNA.GAtS_y.si07kRh91W2FmNzhTFLYVwIp2FhDEmCteBjMRk')

client.on('interactionCreate', (interaction)=> {
    // console.log(interaction)
    interaction.reply({
        content: "Pong"
    })
})