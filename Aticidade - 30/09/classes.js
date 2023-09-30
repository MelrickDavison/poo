class Veiculo{
    constructor(fabricante, modelo, qtdPassageiros, tipoDeCombustivel){
        this.fabricante = fabricante;
        this.modelo = modelo;
        this.qtdPassageiros = qtdPassageiros;
        this.tipoDeCombustivel = tipoDeCombustivel;
    }
}

class Carro extends Veiculo{
    constructor(fabricante, modelo, qtdPortas, qtdPassageiros, volumeDoPortaMalas, tipoDeCombustivel){
        super(fabricante, modelo, qtdPortas, qtdPassageiros, tipoDeCombustivel);
        this.volumeDoPortaMalas = volumeDoPortaMalas;     
        this.qtdPortas = qtdPortas;
    }
}

class Moto extends Veiculo{
    constructor(fabricante, modelo, qtdPassageiros, tipoDeCombustivel){
        super(fabricante, modelo, qtdPassageiros, tipoDeCombustivel);
    }
}

class Onibus extends Veiculo{
    constructor(fabricante, modelo, qtdPortas, qtdPassageiros, volumeDoPortaMalas, tipoDeCombustivel, qtdPneus){
        super(fabricante, modelo, qtdPortas, qtdPassageiros, tipoDeCombustivel, qtdPneus);
        this.volumeDoPortaMalas = volumeDoPortaMalas;    
        this.qtdPortas = qtdPortas;
        this.qtdPneus = qtdPneus;
    }
}

class Jetski extends Veiculo{
    constructor(fabricante, modelo, qtdPassageiros, tipoDeCombustivel){
        super(fabricante, modelo, qtdPassageiros, tipoDeCombustivel);
    }
}

//--------------------------------------------------------------------------------

class EstoqueDeVeiculos{
    constructor(){
        this.listaDeVeiculos = [];
    }

    adicionarVeiculo(veiculo){
        if(veiculo instanceof Veiculo && !(veiculo instanceof Jetski)){
            this.listaDeVeiculos.push(veiculo)
        } else{
            console.error("Só é permitido Veiculos terrestre")
        }
    }
}