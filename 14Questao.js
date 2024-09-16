// 4. Manipulando Objetos Complexos
// ○ Objetivo: Crie um objeto empresa com uma propriedade departamentos,
// que é um array de objetos. Cada departamento tem um nome e uma lista
// de funcionarios. Use for in e for of para iterar sobre os departamentos
// e seus funcionários, exibindo o nome de cada funcionário junto com o
// departamento ao qual pertence.

class Empresa{
    constructor(departamentos){
        this.departamentos=departamentos
    }
}

class Departamento{
    constructor(nome,listaFuncionarios){
        this.nome=nome
        this.listaFuncionarios=listaFuncionarios
    }
}

var departamento1 = new Departamento("Logistica",['Ramundo','João','Rute','Adriana'])
var departamento2 = new Departamento("Recursos Humanos",['José','Maria','Tatiana','Rubens'])
var departamento3 = new Departamento("Produção",['Joás','Alberto','Fernanda','Ariany'])

var empresa1 = new Empresa([departamento1,departamento2,departamento3])

for (const departamento in empresa1.departamentos) {
    console.log(`Departamento: ${empresa1.departamentos[departamento].nome}`)

    console.log(`Funcionários:`)
    for (const element of empresa1.departamentos[departamento].listaFuncionarios) {
        console.log(`\t${element}`)
    }
}