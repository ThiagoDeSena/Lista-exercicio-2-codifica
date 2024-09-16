// 12. Atualizando um Array de Objetos
// ○ Objetivo: Crie um array de objetos estoque, onde cada objeto tem
// produto, quantidade e minimo. Use forEach para atualizar a quantidade
// dos produtos que estão abaixo do mínimo, duplicando suas quantidades.

class Estoque{
    constructor(produto,quantidade,minimo){
        this.produto=produto
        this.quantidade=quantidade
        this.minimo=minimo
    }
}

var estoque1 = new Estoque("Caderno",50,70)
var estoque2 = new Estoque("Lápis",50,45)
var estoque3 = new Estoque("Caneta",70,100)
var estoque4 = new Estoque("Borracha",25,70)
var estoque5 = new Estoque("Papel A4",50,70)

let estoques = [estoque1,estoque2,estoque3,estoque4,estoque5]

estoques.forEach(element => {
    if(element.quantidade<element.minimo){
        element.quantidade=element.quantidade*2
    }
});

estoques.forEach(element => {
    console.log(element)
});