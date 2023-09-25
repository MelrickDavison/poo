var preco = document.getElementById("iptPreco");
var desc = document.getElementById("iptDescricao");
var button = document.getElementById("btnCadastrar");

var estoque = new Estoque();
var containerCards = document.getElementById("container");
button.addEventListener("click", quandoClicarNoBotaoCadastrar);
function quandoClicarNoBotaoCadastrar() {
    var produtoTemp = new Produto(desc.value, preco.value);

    estoque.adicionarProduto(produtoTemp);


    desenharCard(containerCards);
}