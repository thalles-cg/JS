// Fazer o mesmo código abaixo, porém com async await

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
         let deuErro = true;

         if (!deuErro) resolve({time: 6, to: 'email2@gmail.com'})
         else reject('Fila cheia')

      }, 4000)
   })
}

async function principal() {
   let id = await pegarId();
   let email = await buscarEmailNoBanco(id);
   try{
      await enviarEmail('Olá, como vai?', email);
      console.log('Email enviado com sucesso')
   } catch (erro){
      console.log(erro)
   }
   
}

principal()

// pegarId().then((id) =>{
//    buscarEmailNoBanco(id).then((email) => {
//       enviarEmail('Olá, como vai?', email).then(() => {
//          console.log('Email enviado, para o usuário com id ' + id)
//       }).catch((err) => {
//          console.log(err)
//       })
//    })
// })