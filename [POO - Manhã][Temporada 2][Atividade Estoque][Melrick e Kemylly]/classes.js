class Produto {
    constructor(descricao, precoUnitario, quantidade) {
        this.descricao = descricao;
        this.precoUnitario = precoUnitario;
        this.quantidade = quantidade;
    }
}

class Estoque {
    constructor() {
        this.listaDeProdutos = [];
    }

    adicionarProduto(produto) {
        this.listaDeProdutos.push(produto);
    }
    calcularValorTotal() {
        var total = 0;
        for (let i = 0; i < this.listaDeProdutos.length; i++) {
            total += this.listaDeProdutos[i].quantidade * this.listaDeProdutos[i].precoUnitario;
        }
        console.log(total);
    }
}
