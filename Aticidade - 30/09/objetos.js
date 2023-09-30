var carro1 = new Carro("Toyota", "Corolla", 4, 3, 470, "Gasolina");
var moto1 = new Moto("Honda", "CB1000r", 1, "Gasolina");
var onibus1 = new Onibus("MarcoPolo SA", "Paradiso G6 1800 DD", 1, 42, "Desconhecido", "Gasolina", 8)
var jetski1 = new Jetski("Honda", "Gtx 100", 1, "Gasolina Premium");
var estoque = new EstoqueDeVeiculos();

estoque.adicionarVeiculo(carro1)
estoque.adicionarVeiculo(moto1)
estoque.adicionarVeiculo(onibus1)
estoque.adicionarVeiculo(jetski1)
console.log(estoque)