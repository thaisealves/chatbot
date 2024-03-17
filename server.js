const qrcode = require('qrcode-terminal');
const { Location, Poll, List, Buttons, LocalAuth } = require('whatsapp-web.js');

const { Client } = require('whatsapp-web.js');
const client = new Client();
 

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', async (message) =>{
    console.log(message.body)
})

client.on('message', async (message)=>{
    let myname = client.info
    let client = {
        name,
        telephone,
        healthInsurance,
        birthday,
        
    }

    
    
    if (message.body === "0") {
        greetings()
        firstMenu()
        

     }
     if (message.body === "1"){
        budget()
        
     }



     async function greetings(){
        
       

        return message.reply("Olá, seja bem vindo, Eu sou o seu assistente virtual e vou te ajudar"); 
         
     }
     async function name(){
         return  client.sendMessage(message.from, 'Primeiramente, Qual o nome completo do paciente?');
         
         
     }
     async function typeName(){
        


     }
     async function firstMenu(){
        name()
        
        schedule()
     }
     async function schedule(){
         
         
         return client.sendMessage(message.from, `Selecione uma das opções:
                                                                      1- Orçamento
                                                                      2- Agendamento
                                                                      3- Financeiro
                                                                      4- Outros`)
     }
     async function budget(){
        return client.sendMessage(message.from, `Selecione qual exame:
                                     1- Ressonancia
                                     2- Ultrassom
                                     3- Densitometria
                                     4- Mamografia`)

        
     }
     

}  
    

    
    
    
    
    

    

    
)

client.initialize();