function desenharCard(estoque, container) {
    container.innerHTML = "";

    for (let i = 0; i < estoque.listaDeProdutos.length; i++) {
        container.innerHTML += `
            <div class='card'>
                <p class='descricao'>
                Descrição Produto:
                    ${estoque.listaDeProdutos[i].descricao}
                </p>
            </div>

            <div class='card'>
                <p class='preco'>
                Preço:
                R$ ${estoque.listaDeProdutos[i].precoUnitario}
                </p>
                </div> 
        `;
    }
}