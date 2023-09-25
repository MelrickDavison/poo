function desenharCard(container) {
    container.innerHTML = "";

    for (let i = 0; i < estoque.listaDeProdutos.length; i++) {
        container.innerHTML += `
            <div>
                <p>
                Descricao:
                <p>
                    ${estoque.listaDeProdutos[i].descricao}
                </p>
                </p>
            </div>
            

            <div>
            <p>
            Preço:
            <p>
                ${estoque.listaDeProdutos[i].precoUnitario}
            </p>
            </p>
        </div>
        `;
    }
}