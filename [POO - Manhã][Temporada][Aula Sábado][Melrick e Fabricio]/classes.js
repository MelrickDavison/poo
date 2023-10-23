class Player {
    constructor(nome, qtdLados, raio, cor, velocidadeMaxDoTiro, ataque) {
        this.nome = nome;
        this.qtdLados = qtdLados;
        this.raio = raio;
        this.cor = cor;
        this.velocidadeMaxDoTiro = velocidadeMaxDoTiro;
        this.vida = 100;
        this.ataque = ataque;
        this.bala = new Bala(ataque, cor);
    }
}

class Bala {
    constructor(raio, cor) {
        this.raio = raio;
        this.cor = cor;
    }
}

class GerenciadorDeDuelo{
    constructor(player1, player2){
        this.player1 = player1;
        this.player2 = player2;
    }

    getLadoPlayer1(){
        return "esquerda"
    }

    getLadoPlayer2(){
        return "direita"
    }
}