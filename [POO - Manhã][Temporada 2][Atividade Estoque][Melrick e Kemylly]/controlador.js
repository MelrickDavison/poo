var preco = document.getElementById("iptPreco");
var desc = document.getElementById("iptDescricao");
var button = document.getElementById("btnCadastrar");
var quant = document.getElementById("iptQuant")

var estoque = new Estoque();
var containerCards = document.getElementById("container");
button.addEventListener("click", quandoClicarNoBotaoCadastrar);
function quandoClicarNoBotaoCadastrar() {
    var produtoTemp = new Produto(desc.value, Number(preco.value), Number(quant.value));

    estoque.adicionarProduto(produtoTemp);


    desenharCard(estoque, containerCards);
    estoque.calcularValorTotal()
}