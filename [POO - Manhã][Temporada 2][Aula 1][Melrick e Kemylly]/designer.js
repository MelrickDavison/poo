function desenharcard(container) {


    container.innerHTML = ""
    for (let i = 0; i < turma2ano.listaDeAlunes.length; i++) {

        container.innerHTML +=
            `<div class='card'> 
        <div class='cabecalho'>
            <div>

                <h3 class='nome'>${turma2ano.listaDeAlunes[i].getNome()}</h3>
             </div>
            <img class='logoifal' src='img/ifal.png'>
        </div>

        <div class='conteudo'>
        <img class='foto' src=''>
         <div class='info'>
              <div>
                 <p class='label'> Idade:</p>
                 <p class='valor's>  ${turma2ano.listaDeAlunes[i].getIdade()}  </p>
              </div>
              <div>
                    <p class='label'> Matricula:</p>
                    <p class='valor's>  ${turma2ano.listaDeAlunes[i].matricula}  </p>
                </div>
         </div>
        </div>

      
           


         </div>
    
    `;

    }
}