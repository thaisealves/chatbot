const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();
 

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', (message) =>{
    console.log(message.body)
})

client.on('message', async (message)=>{
    let myname = client.info
    let clientName = await message.getContact()
    
    if (message.body === "Oi" || "oi") {
        await message.reply("Olá, " + clientName.pushname + " bem vindo ao atendimento da " + myname.pushname+ ", tudo bem? Eu sou o seu assistente virtual e vou te ajudar!!")
        let chatLabel = await message.getChat()
        
        console.log(chatLabel.labels)
        
    }
})

client.initialize();