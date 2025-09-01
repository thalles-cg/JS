const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

let DB = {
   games: [
      {
         id: 23,
         title: 'Call of duty',
         year: 2019,
         price: 60
      },
      {
         id: 65,
         title: 'Sea of Thieves',
         year: 2018,
         price: 40
      },
      {
         id: 2,
         title: 'Minecraft',
         year: 2012,
         price: 20
      }
   ],
   users: [
      {
         id: 1,
         name: "Victor",
         email: "victor@gmail.com",
         password: "nodejs"
      },
      {
         id: 20,
         name: "Guilherme",
         email: "guilherme@gmail.com",
         password: "java"
      }
   ]

}

app.get('/games', (req, res) => {
   res.statusCode = 200;
   res.json(DB.games)
})

app.get('/game/:id', (req, res) => {
   const game = DB.games.find(e => e.id == req.params.id);

   if (game) {
      res.status(200).json(game);
   } else {
      res.status(404).json({ error: 'Game not found' });
   }
})

app.post('/game', (req, res) => {
   let{title, price, year} = req.body;

   DB.games.push({
      id: 2323,
      title,
      price,
      year
   })

   res.sendStatus(200)

})

app.delete('/game/:id', (req, res) => {
   const index = DB.games.findIndex(e => e.id == req.params.id);
   console.log(index);
   if (index != -1) {
      res.status(200).json(DB.games.splice(index, 1));
   } else {
      res.status(404).json({ error: 'Game not found' });
   }
})

app.put('/game/:id', (req, res) => {
   const game = DB.games.find(e => e.id == req.params.id);

   if (game) {
      let{title, price, year} = req.body;
      
      if (title != undefined) game.title = title;
      if (price != undefined) game.price = price;
      if (year != undefined) game.year = year;

      res.status(200).json(game);
   } else {
      res.status(404).json({ error: 'Game not found' });
   }
})

app.post('/auth', (req, res) => {
   let {email, password} = req.body;

   if (email != undefined){

      let user = DB.users.find(u => u.email == email)
      if (user != undefined){

         if (user.password == password) res.status(200).json({token: "Token falso"})
         else res.status(401).json({err: "Credenciais inválidas"})
      } else res.status(404).json({err: "O email enviado não exista na base de dados"})

   }
   else {
      res.status(400).json({err: "O email enviado é inválido"})
   }
})

app.listen(3000, () => {
   console.log('API rodando')
})

