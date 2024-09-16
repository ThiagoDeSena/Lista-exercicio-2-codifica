// 7. Modificando Objetos em um Array
// ○ Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
// preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
// os produtos e exibir o novo preço.

class Produto{
    constructor(nome,preco,desconto){
        this.nome=nome
        this.preco=preco
        this.desconto=desconto
    }
}

var produto1 = new Produto('Caixa de Leite',6.00,0.10)
var produto2 = new Produto('Feijão',7.00,0.10)
var produto3 = new Produto('Arroz',6.50,0.10)
var produto4 = new Produto('Macarrão',5.10,0.10)

let produtos = [produto1,produto2,produto3,produto4]

console.log("Produtos sem descontos\n")
produtos.forEach(element => {
    console.log(`Produto: ${element.nome} - Preço sem desconto: ${element.preco}`)
});

console.log('\nProdutos com novo preço de 10% de desconto: \n')
produtos.forEach(element => {
    var novoPreco = element.preco - (element.preco*element.desconto)
    element.preco = novoPreco
    console.log(`Produto: ${element.nome} - Preço com ${element.desconto*100}% de desconto: ${novoPreco}`)
});