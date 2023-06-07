class Passageiro{
    constructor(andarPretendido){
        this.andarPretendido = andarPretendido;
    }
}

class Elevador{
    constructor(){
        this.andarAtual = 0;
        this.quantidadeMaximaDePassageiros = 9;
        this.listaDePassageiros = [];
    }

    adicionarPassageiro(passageiro){
        
        if(this.listaDePassageiros.length <= 9){
            this.listaDePassageiros.push(passageiro);
            console.log(`1 passageiro que deseja ir ao andar 
            ${this.listaDePassageiros[this.listaDePassageiros.length -1 ].andarPretendido} ENTROU no elevador. 
            Agora o elevador tem ${this.listaDePassageiros.length} passageiros`)
        }else{
            console.log(`O passageiro não pode entrar. O elevador já atingiu a capacidade máxima: ${this.listaDePassageiros.length} passageiros`)
        }

    }
    movimentar(andarDestino){
        this.andarAtual = andarDestino;
        console.log(`=====================================================`)
        console.log(`MOVIMENTAÇÂO`)
        console.log(`Agora o elevador está no ANDAR ${this.andarAtual}`)

        let sairam = 0;
        for (let i = 0; i < this.listaDePassageiros.length; i++) {
            if(this.listaDePassageiros[i].andarPretendido == this.andarAtual){
                this.listaDePassageiros.splice(i, 1);
                sairam++
            }
           
        }
        if(sairam == 0){
            console.log(`NENHUM passageiros SAÍRAM do elevador`);
        }else{
            console.log(`${sairam} passageiros SAÍRAM do elevador`);
        }
        console.log(`${this.listaDePassageiros.length} passageiros CONTINUAM no elevador`);
        console.log(this.listaDePassageiros)

    }

}