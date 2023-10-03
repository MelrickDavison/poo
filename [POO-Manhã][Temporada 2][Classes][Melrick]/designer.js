function desenharcard(container, elemento) {

        container.innerHTML +=
            `<div class='card'> 
        <div class='cabecalho'>
            <div>

                <h3 class='nome'>${elemento.descricao}</h3>
             </div>
        </div>

        <div class='conteudo'>
         <div class='info'>
              <div>
                 <p class='label'> Valor:</p>
                 <p class='valor's>  ${elemento.precoUnitario}  </p>
              </div>
              <div>
                    <p class='label'> Fabricante:</p>
                    <p class='valor's>  ${elemento.fabricante}  </p>
                </div>
         </div>
        </div>

      
           


         </div>
    
    `;
if(elemento instanceof Celular){
    container.innerHTML +=
    `
    <div>
    <p class='label'> Armazenamento:  ${elemento.armazenamento}  </p>
</div>
<div>
<p class='label'> Ram: ${elemento.ram}  </p>
</div>
    `
}
    }
