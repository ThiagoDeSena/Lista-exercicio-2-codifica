// 15. Filtrando e Somando Valores
// ○ Objetivo: Crie um array de objetos transacoes, onde cada transação tem
// tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
// somando as entradas e subtraindo as saídas.

class Transacoes{
    constructor(tipoTransacao,valor){
        this.tipoTransacao=tipoTransacao
        this.valor=valor
    }
}

var transacao1 = new Transacoes('Entrada',1000)
var transacao2 = new Transacoes('Saída',700)
var transacao3 = new Transacoes('Entrada',1000)
var transacao4 = new Transacoes('Saída',500)

let transacoes = [transacao1,transacao2,transacao3,transacao4]

let saldoFinal =0
transacoes.forEach(element => {
    if(element.tipoTransacao == 'Entrada'){
        saldoFinal += element.valor
    }else{
        saldoFinal -= element.valor
    }
});

console.log(`Saldo Final: ${saldoFinal}`)