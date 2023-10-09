class Animal{
    constructor(nome){
        this.nome = nome;
    }
    emitiSom(){
        console.log("RAWH");
    }
}

class Cachorro extends Animal{
    constructor(nome){
        super(nome);
    }
}

class Gato extends Animal{
    constructor(nome){
        super(nome);
    }

    emitiSom(){
        console.log('MIAU');
    }
}

class Siames extends Gato{
    //Sobrecarga
    constructor(nome, cor="Cinza"){
        super(nome);
        this.cor = cor;
    }

    emitiSom(){
        console.log('MIAU CARALHO');
    }
}

