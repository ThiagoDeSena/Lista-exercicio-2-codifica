// 8. Criando Novos Arrays a Partir de Objetos
// ○ Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
// diretor, e anoLancamento. Use forEach para criar um novo array
// contendo apenas os títulos dos filmes.

class Filmes{
    constructor(titulo,diretor,anoLancamento){
        this.titulo=titulo
        this.diretor=diretor
        this.anoLancamento=anoLancamento
    }
}

var filme1 = new Filmes('Truque de mestre','Louis Leterrier',2013)
var filme2 = new Filmes('Batman: O Cavaleiro das Trevas Ressurge','Christopher Nolan',2012)
var filme3 = new Filmes('Deus Não Está Morto','Michael Mason',2014)

let filmes = [filme1,filme2,filme3]

var titulosDosFilmes = []
filmes.forEach(element => {
    titulosDosFilmes.push(element.titulo)
});

console.log('Títulos dos Filmes:\n')
console.log(titulosDosFilmes)