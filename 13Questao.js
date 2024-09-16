// 13. Implementando um Carrinho de Compras
// ○ Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
// array de objetos. Cada objeto dentro de itens deve representar um
// produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
// para calcular o valor total do carrinho.



class Produto{
    constructor(nome,quantidade,precoUnitario){
        this.nome=nome
        this.quantidade=quantidade
        this.precoUnitario=precoUnitario
    }
}

var iten1 = new Produto("Tv",5,800)
var iten2 = new Produto("Geladeira",2,1500)
var iten3 = new Produto("Fogão",1,600)
var iten4 = new Produto("Gelágua",3,250)
var iten5 = new Produto("Ventilador",3,100)

var itens = [iten1,iten2,iten3,iten4,iten5]

class Carrinho{
    constructor(itens){
        this.itens=itens
    }
}

let carrinho = new Carrinho(itens)

var valorTotal = 0
carrinho.itens.forEach(element => {
    valorTotal+= element.quantidade*element.precoUnitario
});


console.log(`Valor total das compras: R$ ${valorTotal.toFixed(2)}`)