class Personagem{
    constructor(nome, ataque){
        this.nome = nome;
        this.ataque = ataque;
        this.vida = 100;
    }

    atacar(oponente){
        console.log(`${oponente.nome} foi atacado por ${this.nome}`)
        oponente.sofrerDano(this.ataque)
    }

    sofrerDano(dano){
        this.vida -= dano
        console.log(`Vida de ${this.nome}: ${this.vida}`)
    }
}