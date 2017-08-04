var TelegramBot = require('node-telegram-bot-api'),
    // Be sure to replace YOUR_BOT_TOKEN with your actual bot token on this line.
    telegram = new TelegramBot("408073316:AAHnV7PTCAHGES5pucgaOUOZu4OiHDqlyLk", { polling: true });

    frases1 = ["rr se la come","herman manda weas con preview","fabio qwasho culio deja de preguntar weas","ff chua la caca","slack es para cosas serias"];

    var a = function(lista){
      frase = lista[Math.floor(Math.random() * lista.length)]
      return frase;
    }

telegram.on("text", (message) => {
  if(message.text.toLowerCase().indexOf("/dilotuyo") === 0){   
    texto = a(frases1);
    telegram.sendMessage(message.chat.id, texto);
  }
});
