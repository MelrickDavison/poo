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

