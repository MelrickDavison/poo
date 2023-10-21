class Player {
    constructor(nome, qtdLados, raio, cor, velocidadeMaxDoTiro, ataque, bala) {
        this.nome = nome;
        this.qtdLados = qtdLados;
        this.raio = raio;
        this.cor = cor;
        this.velocidadeMaxDoTiro = velocidadeMaxDoTiro;
        this.vida = 100;
        this.ataque = ataque;
        this.bala = bala;
    }
}

class Bala {
    constructor(raio, cor) {
        this.raio = raio;
        this.cor = cor;
    }
}

