let alune1 = new Alunes("Fabricio", 16, 101, 'https://lh3.googleusercontent.com/d/17jAtucgnXEUVT06_Rhm-n1xQazWmsuM5');
let alune2 = new Alunes("Melrick", 16, 102, 'https://lh3.googleusercontent.com/d/1XUZw8EtjRqL7ouVNORZIVGii2FJxxL_F ');
let alune3 = new Alunes("Kemylly", 17, 103, 'https://lh3.googleusercontent.com/d/1uWL4Z7JRW478UM_pObd4dGNp--USG5or');

let listaDeAlunes = [];
listaDeAlunes.push(alune1);
listaDeAlunes.push(alune2);
listaDeAlunes.push(alune3);
document.getElementById("text").innerHTML = ""
for (let i = 0; i < listaDeAlunes.length; i++) {

    document.getElementById("text").innerHTML += (
        `<div > 
        <img src='${listaDeAlunes[i].foto}'>
        <div> Nome: ${listaDeAlunes[i].nome} </div>
         <div> Idade: ${listaDeAlunes[i].idade} </div>
         <div> Matricula: ${listaDeAlunes[i].matricula} </div>
         </div>
    
    `);

}