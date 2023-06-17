class  Cliente{
    constructor(name, phone, cpf, endEntrega){
        this.nome = name;
        this.telefone = phone;
        this.cpf = cpf;
        this.endEntrega = endEntrega;
    }
}

class Empresa{
    constructor(name, cnpj){
        this.nome = name;
        this.cnpj = cnpj;
    }
}

class Pedido{
    constructor(numPedido, dataPedido, frete, cliente, loja, listaDeProdutos){
        this.numPedido = numPedido;
        this.dataPedido = dataPedido;
        this.valorFrete = frete;
        this.listaProdutos = listaDeProdutos;
        this.cliente = cliente;
        this.loja = loja;
    }


   calcularSubTotal(){
    let subTotal = 0;
    for(let i = 0; i < this.listaProdutos.length; i++){
        subTotal += this.listaProdutos[i].calcularPrecoTotal()
    }
    return subTotal
   }

   CalcularTotal(){
    return this.calcularSubTotal() + this.valorFrete;
   }

   gerarNota(){
    
    document.getElementById("nota").innerHTML = (`
    <div class="container">
    <h2>
        Nota
    </h2>
    <p>-----------------------------------</p>
    <p>
    <h3>Loja: ${this.loja.nome}</h3>
    <h3>CNPJ: ${this.loja.cnpj}</h3>
    <h3>Data: ${this.dataPedido}<h3>
    </p>
    <p>-----------------------------------</p>
    <h3>Nome:</h3>
    <p>${this.cliente.nome}</p>
    <h3>Telefone:</h3>
    <p>${this.cliente.telefone}</p>
    <h3>CPF:</h3>
    <p>${this.cliente.cpf}</p>
    <h3>Endereço de Entrega:</h3>
    <p>${this.cliente.endEntrega}</p>
    <p>---------------------------------------------------------------------</p>
    <p>Número do pedido:  ${this.numPedido}</p>
    <p>---------------------------------------------------------------------</p>
    <h3>Itens<h3>
    <p>---------------------------------------------------------------------</p>
    
</div>
    
    
    
    `)
    document.getElementById("itens").innerHTML = ""
    for(let i = 0; i < this.listaProdutos.length; i++){
        document.getElementById("nota").innerHTML += (`
        <div class="container1">
        <p>Nome:  ${this.listaProdutos[i].produto.nome}</p>
        <p>Quantidade: ${this.listaProdutos[i].quantidade}</p>
        <p>Preço Unitário: ${this.listaProdutos[i].produto.preco}</p>
        <p>Preço Total: ${this.listaProdutos[i].calcularPrecoTotal()}</p>
        <p>----------------------------------------</p>
        
        
    </div>
        `)
    }
    document.getElementById("valores").innerHTML = (`
    <div class="container3">
 
   
    <p>SUBTOTAL:  ${this.calcularSubTotal()}</p>
    <p>Frete: ${this.valorFrete}</p>
    <strong>TOTAL: ${this.CalcularTotal()}</strong>
    
    
    
</div>
    `)
   }

}

    class Produto{
        constructor(nome, preco){
            this.nome = nome;
            this.preco = preco;
        }
    }

    class ItemPed{
        constructor(produto, quantidade){
            this.produto = produto;
            this.quantidade = quantidade;

        }

        calcularPrecoTotal(){
            return this.produto.preco * this.quantidade
        }
        
    }
