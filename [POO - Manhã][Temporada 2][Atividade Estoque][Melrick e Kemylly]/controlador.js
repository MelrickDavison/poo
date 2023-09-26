var preco = document.getElementById("iptPreco");
var desc = document.getElementById("iptDescricao");
var button = document.getElementById("btnCadastrar");

var teste = new Produto("desc", "Nome")

console.log(teste.amassou)
teste.teste = "Aii"
console.log(teste.amassou)
teste.precoUnitario = "oi"
console.log(teste.precoUnitario)

var estoque = new Estoque();
var containerCards = document.getElementById("container");
button.addEventListener("click", quandoClicarNoBotaoCadastrar);
function quandoClicarNoBotaoCadastrar() {
    var produtoTemp = new Produto(desc.value, preco.value);

    estoque.adicionarProduto(produtoTemp);


    desenharCard(containerCards);
}