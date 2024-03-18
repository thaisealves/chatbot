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

let nomeCompleto = '';
let telefone = '';
let dataNascimento = '';
let convenio = '';

// Estado atual da coleta de dados
let perguntaAtual = 'inicial';




client.on('message', (message) => {
    switch (perguntaAtual) {
      
      case 'inicial':
        
        perguntaAtual = 'nomeCompleto';
        message.reply('Olá, bem vindo(a), Primeiramente, qual o seu nome completo?');
        break;  
      case 'nomeCompleto':
        nomeCompleto = message.body;
        perguntaAtual = 'telefone';
        message.reply('Qual o seu número de telefone com DDD?');
        break;
      case 'telefone':
        telefone = message.body;
        perguntaAtual = 'dataNascimento';
        message.reply('Qual a sua data de nascimento?');
        break;
      case 'dataNascimento':
        dataNascimento = message.body;
        perguntaAtual = 'convenio';
        message.reply('Qual o seu convênio? Se não tiver nenhum, coloque PARTICULAR');
        break;
      case 'convenio':
        convenio = message.body;
        perguntaAtual = 'confirmation'
        message.reply( `
        *Confirme seus dados:* 
        *Nome:* ${nomeCompleto}
        *Telefone:* ${telefone}
        *Data de Nascimento:* ${dataNascimento}
        *Convenio:*  ${convenio}
        
        Se seus dados estão corretos
        *Digite 1*
        Se quiser corrigir:
        *Digite 2*`);
        
        
        // Exemplo de envio dos dados para um sistema de CRM
        // ...
        // Reiniciar a coleta de dados
        
        break;
      case 'confirmation':
        if(message.body === '2'){
            message.reply("Para começar, qual seu nome completo?")
            perguntaAtual = 'nomeCompleto'
            

        }else if(message.body === '1'){
            message.reply("Estaremos te transferindo para um atendente para finalizar o seu agendamento")
            perguntaAtual = ""
            console.log("opçao 2")
        }
        
        
        break
    }
  });

    
    
    
    
    

    

    

client.initialize();