let celular1 = new Celular(
    01,
    "Celular",
    "Apple",
    "Iphone 8",
    "8GB",
    "60GB",
    "processador",
    "5",
    "iphone8.webp"
);
let celular2 = new Celular(
    02,
    "Celular",
    "Apple",
    "Iphone 10",
    "8GB",
    "60GB",
    "sanpDragon 25",
    "4",
    "iphone10.jpeg"
);
let celular3 = new Celular(
    03,
    "Celular",
    "Apple",
    "Iphone 11",
    "8GB",
    "60GB",
    "sanpDragon 25",
    "4",
    "iphone11.jpg"
);
let celular4 = new Celular(
    04,
    "Apple",
    "Celular",
    "Iphone 12",
    "3GB",
    "12GB",
    "sanpDragon 1",
    "8",
    "iphone12.webp"
);
let celular5 = new Celular(
    05,
    "Apple",
    "Celular",
    "Iphone 13",
    "8GB",
    "60GB",
    "sanpDragon 25",
    "4",
    "iphone13.jpg"
);



let televisao1 = new Tv("77", "tv", "SAMSUNG", "UN43JTIOERUOETE", "43", "lg.jpg");


// Criando 2 listas de Favoritos:
let meusProdutosTop = new Produtos();

// Adicionando produtos À primeira lista de favoritos
meusProdutosTop.adicionarProduto(celular1);
meusProdutosTop.adicionarProduto(celular2);
meusProdutosTop.adicionarProduto(celular3);
meusProdutosTop.adicionarProduto(celular4);
meusProdutosTop.adicionarProduto(celular5);
meusProdutosTop.adicionarProduto(televisao1);

meusProdutosTop.adicionarFavorito(celular1);

meusProdutosTop.adicionarFavorito(celular5);






// Exibindo os produtos da primeira lista no HTML:
// meusProdutosTop.exibirNoHTML();

// Exibindo os produtos da segunda lista no HTML:
// produtosTopDaDarline.exibirNoHTML();




// let i = 0;

// let soldado = new Soldado("Ryan");
// soldado.andar(10);
// soldado.atirar(5);
// soldado.andar(5);
// soldado.atirar(10);


// // ---------------------------
// let soldado2 = new Soldado("Steve")

// soldado.andar(10);
// while (i < 5) {
//     soldado2.pular();
//     i++
// }

// i = 0;

// soldado.andar(5);
// while (i < 10) {

//     soldado2.pular();
//     i++
// }




