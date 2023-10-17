class Personagem{
    constructor(nome, ataque){
        this.nome = nome;
        this.ataque = ataque;
        this.vida = 100;
    }

    atacar(oponente){
        if(oponente instanceof Personagem){
        oponente.sofrerDano(this) //Passando o próprio objeto
        }else{
            console.error("Você não pode atacar isso");
        }
    }

    //Será utilizado no outro objeto
    sofrerDano(oponente){
        if(oponente instanceof Personagem){
            this.vida -= oponente.ataque
            console.log(`${this.nome} foi atacado por ${oponente.nome}`)
            console.log(`Vida de ${this.nome}: ${this.vida}`)
            }else{
                console.error("Você não pode atacar isso");
            }

    }
}