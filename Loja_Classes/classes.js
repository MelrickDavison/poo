class Celular {
    constructor(id, tipo, marca, modelo, ram, armazenamento, processador, qtdDeCameras, foto) {
        this.marca = marca;
        this.modelo = modelo;
        this.ram = ram;
        this.armazenamento = armazenamento;
        this.processador = processador;
        this.qtdDeCameras = qtdDeCameras;
        this.foto = foto;
        this.id = id;
        this.tipo = tipo;
    }


}

// Crie a classe TV
// atributos: marca, modelo, tamanho, foto
// Depois crie 5 objetos dessa classe.
// Adicione os 5 objetos a um vetor (array) 
// Faça um for percorrer esse array e imprimir cada objeto
// no arquivo html.

class Tv {
    constructor(id, tipo, marca, modelo, tamanho, foto) {
        this.marca = marca;
        this.modelo = modelo;
        this.tamanho = tamanho;
        this.foto = foto;
        this.id = id
        this.tipo = tipo;
    }
}


class Produtos {
    constructor() {
        this.listaDeProdutos = [];
        this.listadeFavoritos = [];
    }

    adicionarProduto(produto) {
        this.listaDeProdutos.push(produto);
    }

    adicionarFavorito(produto) {
        this.listadeFavoritos.push(produto);
        document.getElementsByClassName("btFavoritar").innerHTML = (`
        <button class='btFavoritar' onclick="${this.removerProduto('this.listadeProdutos[i].id')}"> 🖤 </button>
        `)
    }

    exibirNoHTML() {
        //Deixando vazio o conteúdo da tag com id 'produtos'
        document.getElementById('produtos').innerHTML = '';

        for (let i = 0; i < this.listadeFavoritos.length; i++) {

            if (this.listadeFavoritos[i].tipo == "tv") {
                document.getElementById('produtos').innerHTML += (` 
            
            <div class='card'>
            <button class='btRemover' onclick="${this.removerProduto(this.listadeFavoritos[i].id)}"> ❌  </button>
                <img class='foto' src='img/${this.listadeFavoritos[i].foto}' />
                <div class='info'>
                    <h3 class='modelo'>${this.listadeFavoritos[i].modelo}</h3>
                    <p class='marca'>${this.listadeFavoritos[i].marca}</p>
                    
                    <span class='outros'>${this.listadeFavoritos[i].tamanho}</span>
                    <span class='outros'> polegadas</span>
                </div> 
               
            </div>
           
        `);

            }
            else {

                document.getElementById('produtos').innerHTML += (`
           
            <div class='card'> 
            <button class='btRemover' onclick="${this.removerProduto(this.listadeFavoritos[i].id)}"> ❌  </button>
                <img class='foto' src='img/${this.listadeFavoritos[i].foto}' />
                <div class='info'>
                    <h3 class='modelo'>${this.listadeFavoritos[i].modelo}</h3>
                    <p class='marca'>${this.listadeFavoritos[i].marca}</p>
                    
                    <span class='outros'>${this.listadeFavoritos[i].processador}</span>
                    <span class='separador'>|</span>
                    <span class='outros'>${this.listadeFavoritos[i].armazenamento}</span>
                    <span class='separador'>|</span>
                    <span class='outros'>${this.listadeFavoritos[i].ram}</span>
                    <span class='separador'>|</span>
                    <span class='outros'>${this.listadeFavoritos[i].qtdDeCameras}</span>
                    <span class='outros'>câmeras</span>
                </div>
                
            </div>
        `);
            }
        }


    }

    exibirTodosNoHTML() {
        //Deixando vazio o conteúdo da tag com id 'produtos'
        document.getElementById('produtos').innerHTML = '';

        for (let i = 0; i < this.listaDeProdutos.length; i++) {

            if (this.listaDeProdutos[i].tipo == "tv") {
                document.getElementById('produtos').innerHTML += (` 
            
            <div class='card'>
                <img class='foto' src='img/${this.listaDeProdutos[i].foto}' />
                <div class='info'>
                    <h3 class='modelo'>${this.listaDeProdutos[i].modelo}</h3>
                    <p class='marca'>${this.listaDeProdutos[i].marca}</p>
                    
                    <span class='outros'>${this.listaDeProdutos[i].tamanho}</span>
                    <span class='outros'> polegadas</span>
                </div> 
                <button class='btFavoritar' onclick="${this.adicionarFavorito(this.listadeProdutos[i].id)}"> ♡ </button>
            </div>
           
        `);

            }
            else {

                document.getElementById('produtos').innerHTML += (`
           
            <div class='card'> 
                <img class='foto' src='img/${this.listaDeProdutos[i].foto}' />
                <div class='info'>
                    <h3 class='modelo'>${this.listaDeProdutos[i].modelo}</h3>
                    <p class='marca'>${this.listaDeProdutos[i].marca}</p>
                    
                    <span class='outros'>${this.listaDeProdutos[i].processador}</span>
                    <span class='separador'>|</span>
                    <span class='outros'>${this.listaDeProdutos[i].armazenamento}</span>
                    <span class='separador'>|</span>
                    <span class='outros'>${this.listaDeProdutos[i].ram}</span>
                    <span class='separador'>|</span>
                    <span class='outros'>${this.listaDeProdutos[i].qtdDeCameras}</span>
                    <span class='outros'>câmeras</span>
                </div>
                <button class='btFavoritar' onclick="${this.adicionarFavorito(this.listadeProdutos[i].id)}"> ♡ </button>
            </div>
        `);
            }
        }


    }

    removerProduto(id) {
        for (let i = 0; i < this.listaDeProdutos.length; i++) {
            if (this.listaDeProdutos[i].id == id) {
                this.listaDeProdutos.splice(i, 1)
            }
        }
    }

}










