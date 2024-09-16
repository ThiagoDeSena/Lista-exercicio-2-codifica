// 3. Filtrando Propriedades de Objetos
// ○ Objetivo: Dado um objeto produto com várias propriedades, crie uma
// função que retorna um novo objeto contendo apenas as propriedades cujo
// valor seja maior que um valor específico. Use for in para filtrar as
// propriedades.

function produto(nome,preco,peso,dataFabricacao,dataVencimento){
    this.nome = nome,
    this.preco = preco,
    this.peso = peso,
    this.dataFabricacao = dataFabricacao,
    this.dataVencimento = dataVencimento
}

var produto1 = new produto("Arroz",4.15,1,Date("01/09/2024"),Date("01/12/2024"))
var produto2 = new produto("Feijão",4,1,Date("01/09/2024"),Date("01/12/2024"))
var produto3 = new produto("Macarrão",3.50,1,Date("01/09/2024"),Date("01/12/2024"))
var produto4 = new produto("Carne",10.95,1,Date("01/09/2024"),Date("01/12/2024"))

var produtos = [produto1,produto2,produto3,produto4]


function filtrarPropiedade(objeto,valorFiltro){
    const novoObjeto = []

    for (const key in objeto) {
        if(objeto[key] > valorFiltro){
            novoObjeto[key] = objeto[key]
            
        }
    }

    return novoObjeto
}

for (const i of produtos) {

    const produtoFiltrado = filtrarPropiedade(i,4)
    if(produtoFiltrado!=null){
        console.log(produtoFiltrado)
    }
    
}



