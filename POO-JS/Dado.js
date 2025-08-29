class Dado {
   constructor(faces){
      this.faces = faces;
   }

   girar(){
      return Math.floor(Math.random() * this.faces + 1);
   }
}

let dado = new Dado(20);
console.log(dado.girar())