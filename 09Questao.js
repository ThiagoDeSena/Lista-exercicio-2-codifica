// 9. Contabilizando Elementos com uma Condição
// ○ Objetivo: Crie um array de objetos clientes, cada um com propriedades
// nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
// de 30 anos.

class Clientes{
    constructor(nome,idade,cidade){
        this.nome=nome
        this.idade=idade
        this.cidade=cidade
    }
}

var cliente1 = new Clientes('Thiago de sena',25,'Fortaleza')
var cliente2 = new Clientes('Vitor Lucas',22,'Maracanaú')
var cliente3 = new Clientes('Amanda lima',30,'Cascavel')
var cliente4 = new Clientes('Olivia Nunes',31,'Fortaleza')
var cliente5 = new Clientes('Raimundo oliveira',35,'Pacatuba')
var cliente6 = new Clientes('Luciana Lopes',40,'Fortaleza')

var clientes = [cliente1,cliente2,cliente3,cliente4,cliente5,cliente6]

let clientesMaioresDeTrinta = 0
clientes.forEach(element => {
    if(element.idade > 30){
        clientesMaioresDeTrinta++
    }
});

console.log(`Temos ${clientesMaioresDeTrinta} clientes com mais de 30 anos`)