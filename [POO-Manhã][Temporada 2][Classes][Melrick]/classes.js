class Produto{
    constructor(descricao, precoUnitario, fabricante){
        this.descricao = descricao;
        this.precoUnitario = precoUnitario;
        this.fabricante = fabricante;
    }
}

class Celular extends Produto{
    constructor(descricao, precoUnitario, fabricante, armazenamento, ram, processador, tamanhoDeTela){
        super(descricao, precoUnitario, fabricante);
        this.armazenamento = armazenamento;
        this.ram = ram;
        this.processador = processador;
        this.tamanhoDeTela = tamanhoDeTela;
    }
}

class CaixinhaDeSom extends Produto{
    constructor(descricao, precoUnitario, fabricante, potencia, dimensoes, temLed){
        super(descricao, precoUnitario, fabricante);
        this.potencia = potencia;
        this.dimensoes = dimensoes;
        this.temLed = temLed;
    }
}

class Estoque{
    constructor(){
        this.listaDeProdutos = [];
    }

    adicionarProduto(produto){
        if(produto instanceof Produto){
        this.listaDeProdutos.push(produto);
        }else{
            console.error("A entrada não é da classe Produto")
        }
    }
}