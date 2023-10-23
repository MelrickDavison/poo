

//Parede
function parede(x, y, width, height) {
    return Matter.Bodies.rectangle(x, y, width, height, {
        isStatic: true,
        render: {
            fillStyle: '#868e96'
        }
    })
}

//Player
function playerVisual(player, x, y) {
    return Matter.Bodies.polygon(x, y, player.qtdLados, player.raio, {
        label: player.nome,
        isStatic: true,
        render: {
            fillStyle: player.cor
        }
    });
}

//Bala
function balaVisual(bala, x, y) {
    return Matter.Bodies.circle(x, y, bala.raio, {
        restitution: 0.5,
        render: {
            fillStyle: bala.cor
        }
    });
}

// matter.js has a built in random range function, but it is deterministic

function rand(min, max) {

    return Math.random() * (max - min) + min;

}



// =================================================
// Engine
let engine = Matter.Engine.create();

// Render
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

let runner = Matter.Runner.create();
Matter.Runner.run(runner, engine);
// ===================================================

//Construção das 4 paredes
Matter.World.add(engine.world, [
    parede(280, 0, 2000, 20), //top
    parede(280, 800, 2000, 20), //bottom
    parede(0, 400, 20, 1024),   // left
    parede(1024, 400, 20, 1024), // right
])

//Criação dos players
let bala = new Bala(5, '#993322');
let bala1 = new Bala(10, "#aa88aa");
let player = new Player('player1', 8, 40, '#33221739', 30, 10, bala);
let player2 = new Player('player2', 4, 40, '#98020245', 30, 10, bala1);

// Posicionamento dos players na tela

Matter.World.add(engine.world, playerVisual(player, 90, 330));
Matter.World.add(engine.world, playerVisual(player2, 900, 330));