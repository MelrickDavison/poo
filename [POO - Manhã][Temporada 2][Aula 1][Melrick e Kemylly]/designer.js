function desenharcard(container) {


    container.innerHTML = ""
    for (let i = 0; i < listaDeAlunes.length; i++) {

        container.innerHTML +=
            `<div class='card'> 
        <div class='cabecalho'>
            <div>
                <p class='turma'>
             Turma: ${listaDeAlunes[i].turma}
             </p>
                <h3 class='nome'>${listaDeAlunes[i].getNome()}</h3>
             </div>
            <img class='logoifal' src='img/ifal.png'>
        </div>

        <div class='conteudo'>
        <img class='foto' src='${listaDeAlunes[i].foto}'>
         <div class='info'>
              <div>
                 <p class='label'> Idade:</p>
                 <p class='valor's>  ${listaDeAlunes[i].getIdade()}  </p>
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
    
    `;

    }
}