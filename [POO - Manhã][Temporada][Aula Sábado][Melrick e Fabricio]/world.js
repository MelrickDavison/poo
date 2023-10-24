// Parede
function parede(x, y, width, height) {
    return Matter.Bodies.rectangle(x, y, width, height, {
        isStatic: true,
        render: {
            fillStyle: '#868e96'
        }
    });
}

// Player
function dueloVisual(gerente) {
    let player1Visual = Matter.Bodies.polygon(90, 330, gerente.player1.qtdLados, gerente.player1.raio, {
        label: gerente.player1.nome,
        isStatic: true,
        restitution: 0.5,
        render: {
            fillStyle: gerente.player1.cor
        }
    });
    let player2Visual = Matter.Bodies.polygon(900, 330, gerente.player2.qtdLados, gerente.player2.raio, {
        label: gerente.player2.nome,
        isStatic: true,
        restitution: 0.5,
        render: {
            fillStyle: gerente.player2.cor
        }
    });
    return [player1Visual, player2Visual];
}

// Bala
function balaVisual(player, lado) {
    if (lado === 'esquerda') {
        return Matter.Bodies.circle(140, 200, player.bala.raio, {
            label: `balaEsquerda`,
            restitution: 0.5,
            render: {
                fillStyle: player.bala.cor
            }
        });
    } else
        if (lado === 'direita') {
            return Matter.Bodies.circle(820, 320, player.bala.raio, {
                label: `balaDireita`,
                restitution: 0.5,
                render: {
                    fillStyle: player.bala.cor
                }
            });
        }
}

// -------------------------------------------------


// Atirar
function atirar(player, lado) {
    let projetil = balaVisual(player, lado);

    if (lado === 'esquerda') {
        Matter.Body.setVelocity(projetil, {
            x: rand(1, player.velocidadeMaxDoTiro),
            y: -8
        });
    } else if (lado === 'direita') {
        Matter.Body.setVelocity(projetil, {
            x: rand(-1, -player.velocidadeMaxDoTiro),
            y: -8
        });
    }
    Matter.Body.setAngularVelocity(projetil, rand(0, player.velocidadeMaxDoTiro));

    Matter.World.add(engine.world, projetil);
}

function receberTiro(event) {
    event.pairs
        .filter((pair) => pair.bodyA.label === juiz.player1.nome)
        .forEach((pair) => {
            if (pair.bodyB.label === 'balaDireita') {
                if (juiz.player1.vida - juiz.player2.ataque > 0) {
                    juiz.player1.vida -= juiz.player2.ataque;
                    console.log(`Player 1: ${juiz.player1.vida}`);
                } else {
                    juiz.player1.vida = 0;
                    pair.bodyA.render.fillStyle = '#dedede';
                    console.log(`Player 1: PERDEU`);
                }
            }
            Matter.World.remove(engine.world, pair.bodyB);
        });
    event.pairs
        .filter((pair) => pair.bodyA.label === juiz.player2.nome)
        .forEach((pair) => {
            if (pair.bodyB.label === 'balaEsquerda') {
                // 
                if (juiz.player2.vida - juiz.player1.ataque > 0) {
                    juiz.player2.vida -= juiz.player1.ataque;
                    console.log(`Player 2: ${juiz.player2.vida}`);
                } else {
                    juiz.player2.vida = 0;
                    pair.bodyA.render.fillStyle = '#dedede';
                    console.log(`Player 2: PERDEU!`);
                }
                Matter.World.remove(engine.world, pair.bodyB);
            }
        });
}


// ====================================================

// matter.js has a built in random range function, but it is deterministic
function rand(min, max) {
    return Math.random() * (max - min) + min;
}

// ====================================================
// engine
let engine = Matter.Engine.create();

// render
let render = Matter.Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: 1024,
        height: 800,
        wireframes: false,
        background: '#f8f9fa'
    }
});
Matter.Render.run(render);

// runner
let runner = Matter.Runner.create();
Matter.Runner.run(runner, engine);
// ====================================================

function trianguloCadente() {
    console.log('triangulo');
    let triangulo = Matter.Bodies.polygon(rand(300, 700), 30, 2, 10, {
        isStatic: false,
        restitution: 0.8,
        render: {
            fillStyle: '#0000aa'
        }
    });
    Matter.World.add(engine.world, triangulo)
}

Matter.Events.on(engine, 'click', trianguloCadente);
setInterval(trianguloCadente, 800);

// Construção das 4 paredes:
Matter.World.add(engine.world, [
    parede(280, 0, 2000, 20),   // top
    parede(280, 800, 2000, 20), // bottom
    parede(0, 400, 20, 1024),   // left
    parede(1024, 400, 20, 1024), // right
    paredeColorida(450, 640, 20, 590, '#ccbb22'),
    paredeColorida(700, 50, 20, 250, 'blue')
]);

function paredeColorida(x, y, width, height, cor) {
    return Matter.Bodies.rectangle(x, y, width, height, {
        isStatic: true,
        render: {
            fillStyle: cor
        }
    });
}

// Criação dos players
let player1 = new Player('Alex', 6, 70, '#888888', 17, 15);
let player2 = new Player('Sandro', 5, 40, '#333333', 10, 12);
let player3 = new Player("Mel", 6, 70, '#98054585', 17, 15);
let player4 = new Player("Rick", 5, 40, '#90028922', 10, 12)
let juiz = new GerenciadorDeDuelo(player3, player4)

// Posicionamento dos players na tela
Matter.World.add(engine.world, dueloVisual(juiz));


// Evento de colisão
Matter.Events.on(engine, 'collisionStart', receberTiro);

// Eventos de Teclas
document.addEventListener('keydown', function (e) {
    if (e.key === 'f') {
        trianguloCadente();
    }
    //   if (juiz.player1.vida > 0 && juiz.player2.vida > 0)
    if (e.key === 'd') { // left arrow key
        atirar(juiz.player1, 'esquerda');
    } else if (e.key === 'ArrowLeft') { // right arrow key
        atirar(juiz.player2, 'direita');
    };
});