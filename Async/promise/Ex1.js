function pegarId(){
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve(5)
      }, 1500)
   })
}

function buscarEmailNoBanco(id) {
   return new Promise ((resolve, reject) => {
      setTimeout(() => {
         resolve('email@gmail.com')
      })
   }, 2000)
}

function enviarEmail(corpo, para){
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         let deuErro = false;

         if (!deuErro) resolve({time: 6, to: 'email2@gmail.com'})
         else reject('Fila cheia')

      }, 4000)
   })
}

pegarId().then((id) =>{
   buscarEmailNoBanco(id).then((email) => {
      enviarEmail('Olá, como vai?', email).then(() => {
         console.log('Email enviado, para o usuário com id ' + id)
      }).catch((err) => {
         console.log(err)
      })
   })
})