// 10. Criando Relatórios com Objetos e Arrays
// ○ Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
// quantidade e valor. Use forEach para calcular o valor total de vendas de
// todos os produtos.

class Vendas{
    constructor(produto,quantidade,valor){
        this.produto=produto
        this.quantidade=quantidade
        this.valor=valor
    }
}

var venda1 = new Vendas('Tv',2,2599.99)
var venda2 = new Vendas('Micro-ondas',1,474.05)
var venda3 = new Vendas('Liquidificador',2,95.90)
var venda4 = new Vendas('Sanduicheira',2,143.04)
var venda5 = new Vendas('Geladeira',1,2569)
var venda6 = new Vendas('PlayStation 5',1,3750)

var vendas = [venda1,venda2,venda3,venda4,venda5,venda6]

let somaDasVendas = 0
vendas.forEach(element => {
    somaDasVendas += (element.valor*element.quantidade)
});

console.log(`Valor total das vendas dos produtos: R$${somaDasVendas.toFixed(2)}`)