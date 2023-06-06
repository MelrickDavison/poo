let celular1 = new Celular(
    "01",
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
    "02",
    "Celular",
    "Apple",
    "Iphone 10",
    "",
    "",
    "",
    ""
);
let celular3 = new Celular(
    "03",
    "Celular",
    "Apple",
    "Iphone 11",
    "",
    "",
    "",
    ""
);
let celular4 = new Celular(
    "Apple",
    "Celular",
    "Iphone 12",
    "",
    "",
    "",
    ""
);
let celular5 = new Celular(
    "Apple",
    "Celular",
    "Iphone 13",
    "",
    "",
    "",
    ""
);



let televisao1 = new Tv("77", "tv", "SAMSUNG", "UN43JTIOERUOETE", "43", "lg.jpg");

// Criando 2 listas de Favoritos:
let meusProdutosTop = new Favoritos();

// Adicionando produtos À primeira lista de favoritos
meusProdutosTop.adicionarProduto(celular1);
meusProdutosTop.adicionarProduto(televisao1);
console.log(meusProdutosTop[0])




// Exibindo os produtos da primeira lista no HTML:
// meusProdutosTop.exibirNoHTML();

// Exibindo os produtos da segunda lista no HTML:
// produtosTopDaDarline.exibirNoHTML();








