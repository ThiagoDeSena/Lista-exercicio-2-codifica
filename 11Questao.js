// 11. Agrupando Elementos com forEach
// ○ Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
// cliente, produto, e quantidade. Use forEach para criar um objeto que
// agrupa a quantidade total de produtos por cliente.

class Pedido{
    constructor(cliente,produto,quantidade){
        this.cliente=cliente
        this.produto=produto
        this.quantidade=quantidade
    }
}

var pedido1 = new Pedido("João","Açuca",3)
var pedido2 = new Pedido("Maria","Sal",2)
var pedido3 = new Pedido("Augusto","Farinha",4)
var pedido4 = new Pedido("Samira","Arroz",5)

let pedidos = [pedido1,pedido2,pedido3,pedido4]

var quantidadePedidos = 0
pedidos.forEach(element => {
    quantidadePedidos += element.quantidade
});

console.log(`Quantidade total de Produtos: ${quantidadePedidos}`)