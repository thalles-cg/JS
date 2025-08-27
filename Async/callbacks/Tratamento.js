function enviarEmail(corpo, para, callback) {
   setTimeout(() => {
      
      // ... Lógica

      let deuErro = false;

      if (deuErro) callback(12, 'O envio do e-mail falhou!')
      else callback(12)
   }, 2000)
}

console.log('Início do envio do email')
enviarEmail('Oi, seja bem-vindo.', 'email-teste@gmail.com', (time, erro) => {
// O parâmetro de erro de callback é geralmente sempre o último
   if(erro === undefined) {
      console.log('Tudo OK')
      console.log('Tempo: ' + time + 's')
      
   } else console.log('Ocorreu um erro: ' + erro)
})