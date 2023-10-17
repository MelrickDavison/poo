class Personagem{
    constructor(nome, ataque, vida){
        this.nome = nome;
        this.ataque = ataque;
        this.vida = vida;
    }

    atacar(oponente){
        oponente.sofrerDano(this.ataque)
        console.log(`${this.nome} atacou ${oponente.nome}`)
    }

    sofrerDano(dano){
        this.vida -= dano
        console.log(`Sua vida agora é ${this.vida}`)
    }
}