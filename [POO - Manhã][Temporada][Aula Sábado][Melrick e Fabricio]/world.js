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

