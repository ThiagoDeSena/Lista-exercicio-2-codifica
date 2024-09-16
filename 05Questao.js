// 5. Calculando Valores em Arrays de Objetos
// ○ Objetivo: Crie um array de objetos alunos, cada um com propriedades
// nome, nota1, e nota2. Use for of para calcular a média das notas de cada
// aluno e exibir o nome do aluno junto com sua média.

class Aluno{
    constructor(nome,nota1,nota2){
        this.nome=nome
        this.nota1=nota1
        this.nota2=nota2
    }

    media(){
        var media=(this.nota1+this.nota2)/2
        return media.toFixed(2)
    }
}

var aluno1 = new Aluno("Vitor",10,9.5)
var aluno2 = new Aluno("Eric",8,9.5)
var aluno3 = new Aluno("Duda",8,9)

var pessoas = [aluno1,aluno2,aluno3]

for (const element of pessoas) {
    console.log(`Aluno: ${element.nome} - Média: ${element.media()}`)
}