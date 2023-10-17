class Personagem{
    constructor(nome, ataque, vida){
        this.nome = nome;
        this.ataque = ataque;
        this.vida = vida;
    }

    atacar(oponente){
        console.log(`${this.nome} atacou ${oponente.nome}`)
        oponente.sofrerDano(this.ataque)
    }

    sofrerDano(dano){
        this.vida -= dano
        console.log(`Sua vida agora é ${this.vida}`)
    }
}