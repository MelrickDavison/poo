let quadrado = new Quadrado("Azul", 2);
quadrado.descrever();

let circulo = new Circulo("rosa", 9)
circulo.descrever();

if(quadrado instanceof Forma){
    console.log(`é uma forma`)
} else{
    console.log(`não é uma forma`)
}

if(circulo instanceof Forma){
    console.log(`é uma forma`)
} else{
    console.log(`não é uma forma`)
}   