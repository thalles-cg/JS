function pegarUsuarios() {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve([
            {name: 'Victor', lang: 'JS'},
            {name: 'Lima', lang: 'C#'},
            {name: 'Daniel', lang: 'Java'}
         ])
      }, 3000)
   })
}

// pegarUsuarios().then(usuarios => {
//    console.log(usuarios)
// })


async function principal() {
   let usuarios = await pegarUsuarios();
   console.log(usuarios)
}

principal()


