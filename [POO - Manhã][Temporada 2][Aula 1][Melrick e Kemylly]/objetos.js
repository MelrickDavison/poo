let alune1 = new Alunes("Fabricio", 16, 101);
let alune2 = new Alunes("Melrick", 16, 102);
let alune3 = new Alunes("Kemylly", 17, 103);

let listaDeAlunes = [];
listaDeAlunes.push(alune1);
listaDeAlunes.push(alune2);
listaDeAlunes.push(alune3);
 document.getElementById("text").innerHTML = ""
for (let i = 0; i < listaDeAlunes.length; i++) {

    document.getElementById("text").innerHTML += (
        `<div > 
        <div> Nome: ${listaDeAlunes[i].nome} </div>
         <div> Idade: ${listaDeAlunes[i].idade}   </div>
         <div>Matricula: ${listaDeAlunes[i].matricula}</div>
         </div>
    
    `);
    
}