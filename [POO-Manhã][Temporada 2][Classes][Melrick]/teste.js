let celular1 = new Celular("Celular bom", 10, "Anatel", "10GB", 1, "Não tem", "Grande");
let celular2 = new Celular("Celular Ruim", 1000, "Apple", "64GB", 4, "de Iphone", "Pequena");
let celular3 = new Celular("A23", 1500, "Samsung", "128GB", 4, "Sei lá", "Boa");
let caixinha1 = new CaixinhaDeSom("Som alto e bom", 100, "EU", "Desconhecido", "Enorme", false);
let caixinha2 = new CaixinhaDeSom("Som baixo e ruim", 50, "TU", "100mp", "Pequena", true);

var celularDiv = document.getElementById("celular")
var caixinhaDiv = document.getElementById("caixinha")

let estoqueUm = new Estoque;

estoqueUm.adicionarProduto(celular1)
estoqueUm.adicionarProduto(celular2)
estoqueUm.adicionarProduto(celular3)
estoqueUm.adicionarProduto(caixinha1)
estoqueUm.adicionarProduto(caixinha2)

console.log(estoqueUm);


for(let i = 0; i < estoqueUm.listaDeProdutos.length; i++){
    if(estoqueUm.listaDeProdutos[i] instanceof Celular){
        desenharcard(celularDiv, estoqueUm.listaDeProdutos[i])
        console.log("Celular")
    }else{
        desenharcard(caixinhaDiv, estoqueUm.listaDeProdutos[i])
    }
}