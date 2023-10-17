let oponente1 = new Personagem("Melrick", 10, 100);
let oponente2 = new Personagem("Fabricio", 50, 1000);
console.log(oponente1);
console.log(oponente2);
oponente1.atacar(oponente2);
console.log(oponente2.vida)

oponente1.sofrerDano(oponente2.ataque);
console.log(oponente1.vida)