// 4. Iterando Sobre Arrays de Objetos
// ○ Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
// uma pessoa com nome, idade, e cidade. Use for of para exibir as
// informações de cada pessoa no console.

function pessoa(nome,idade,cidade){
    this.nome=nome
    this.idade=idade
    this.cidade=cidade

}

var pessoa1 = new pessoa("Vitor",21,"Pacatuba")
var pessoa2 = new pessoa("Eric",19,"Aracati")
var pessoa3 = new pessoa("Thiago",25,"Pacatuba")
var pessoa4 = new pessoa("Duda",15,"Pacatuba")



var pessoas = [pessoa1,pessoa2,pessoa3,pessoa4]

for (const element of pessoas) {
    console.log(element)
}