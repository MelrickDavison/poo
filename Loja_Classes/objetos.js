let celular1 = new Celular(
    "Apple",
    "Iphone 8",
    "8GB",
    "60GB",
    "processador",
    "5",
    "iphone8.webp"
);
let celular2 = new Celular(
    "Apple",
    "Iphone 10",
    "",
    "",
    "",
    ""
);
let celular3 = new Celular(
    "Apple",
    "Iphone 11",
    "",
    "",
    "",
    ""
);
let celular4 = new Celular(
    "Apple",
    "Iphone 12",
    "",
    "",
    "",
    ""
);
let celular5 = new Celular(
    "Apple",
    "Iphone 13",
    "",
    "",
    "",
    ""
);


// document.write(`
//     <div class='card'>
//         <img class='foto' src='img/${celular1.foto}' />
//         <div class='info'>
//             <h3 class='modelo'>${celular1.modelo}</h3>
//             <p class='marca'>${celular1.marca}</p>
            
//             <span class='outros'>${celular1.processador}</span>
//             <span class='separador'>|</span>
//             <span class='outros'>${celular1.armazenamento}</span>
//             <span class='separador'>|</span>
//             <span class='outros'>${celular1.ram}</span>
//             <span class='separador'>|</span>
//             <span class='outros'>${celular1.qtdDeCameras}</span>
//             <span class='outros'>câmeras</span>
//         </div>
//     </div>
// `);

let televisao1 = new Tv("LG", "UN43JTIOERUOETE", "43", "teste.jpg");

// Criando 2 listas de Favoritos:
let meusProdutosTop = new Favoritos();
let produtosTopDaDarline = new Favoritos();

// Adicionando produtos À primeira lista de favoritos
meusProdutosTop.adicionarProduto(celular1);
meusProdutosTop.adicionarProduto(televisao1);

// Adicionando produtos À segunda lista de favoritos
produtosTopDaDarline.removerProduto(celular1);
// produtosTopDaDarline.adicionarProduto(celular5);

// Exibindo os produtos da primeira lista no HTML:
// meusProdutosTop.exibirNoHTML();

// Exibindo os produtos da segunda lista no HTML:
// produtosTopDaDarline.exibirNoHTML();








