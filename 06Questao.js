// 6. Filtrando Arrays de Objetos
// ○ Objetivo: Crie um array de objetos funcionarios, onde cada objeto
// contém informações como nome, cargo, e salario. Use for of para filtrar
// e exibir apenas os funcionários cujo salário seja maior que um valor
// específico.

class Funcionario{
    constructor(nome,cargo,salario){
        this.nome=nome
        this.cargo=cargo
        this.salario=salario
    }

    formatarMoeda(moeda = 'BRL') {
        return this.salario.toLocaleString('pt-BR', { style: 'currency', currency: moeda });
    }
}

var funcionario1 = new Funcionario("Thiago","Develop sistens Embarcades",15000)
var funcionario2 = new Funcionario("Vitor","Develop FullStack",20000)
var funcionario3 = new Funcionario("Marcelo","Desing Grafic",17000)

let funcionarios = [funcionario1,funcionario2,funcionario3]

var prompt = require('prompt-sync')()

var valorDoSalario = Number(prompt('Digite o valor do salário para filtrar funcionários: '))

console.log("Funcionários Filtrados")
//Funcionários com salários maior que valorDoSalario
for (const element of funcionarios) {
    if(element.salario>valorDoSalario){
        console.log(`Funcionário: ${element.nome} - Salário: ${element.formatarMoeda()}`)
    }
}