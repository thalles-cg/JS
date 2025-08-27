function enviarEmail(corpo, para, callback) {
   setTimeout(() => {
      console.log(`
         Para: ${para}
         ---------------------------
         ${corpo}
         ---------------------------
         De: Victor Lima
         
      `)
      callback("OK", 5, '8s')
   }, 8000)
}

console.log('Início do envio do email')
enviarEmail('Oi, seja bem-vindo.', 'email-teste@gmail.com', (status, amount, time) => {
   console.log(`
      Status: ${status}
      -------------------
      Contatos: ${amount}
      -------------------
      Tempo de envio ${time}
   `)
   console.log('Email enviado')
})