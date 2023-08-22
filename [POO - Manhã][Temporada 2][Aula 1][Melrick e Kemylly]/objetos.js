let alune1 = new Alunes("912A", "Fabricio Arcanjo Guimarães Costa", 16, 101, 'https://lh3.googleusercontent.com/d/17jAtucgnXEUVT06_Rhm-n1xQazWmsuM5', 'fagc1@aluno.ifal.edu.br');
let alune2 = new Alunes("912A","Melrick Davison Fonseca Ribeiro", 16, 102, 'https://lh3.googleusercontent.com/d/1XUZw8EtjRqL7ouVNORZIVGii2FJxxL_F ', "mdfr1@aluno.ifal.edu.br");
let alune3 = new Alunes("912A","Kemylly Gabrielly Gomes Rodrigues", 17, 103, 'https://lh3.googleusercontent.com/d/1uWL4Z7JRW478UM_pObd4dGNp--USG5or');

let listaDeAlunes = [];
listaDeAlunes.push(alune1);
listaDeAlunes.push(alune2);
listaDeAlunes.push(alune3);
document.getElementById("text").innerHTML = ""
for (let i = 0; i < listaDeAlunes.length; i++) {

    document.getElementById("text").innerHTML += (
        `<div class='card'> 
        <div class='cabecalho'>
            <div>
                <p class='turma'>
             Turma: ${listaDeAlunes[i].turma}
             </p>
                <h3 class='nome'>${listaDeAlunes[i].nome}</h3>
             </div>
            <img class='logoifal' src='img/ifal.png'>
        </div>

        <div class='conteudo'>
        <img class='foto' src='${listaDeAlunes[i].foto}'>
         <div class='info'>
              <div>
                 <p class='label'> Idade:</p>
                 <p class='valor's>  ${listaDeAlunes[i].idade}  </p>
              </div>
              <div>
                    <p class='label'> Matricula:</p>
                    <p class='valor's>  ${listaDeAlunes[i].matricula}  </p>
                </div>
                <div>
                    <p class='label'> Email:  </p>
                    <p class='valor'> ${listaDeAlunes[i].email} </p>
                </div>
         </div>
        </div>

      
           


         </div>
    
    `);

}