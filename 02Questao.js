// 2. Verificando Propriedades
// ○ Objetivo: Crie um objeto livro com propriedades titulo, autor,
// anoPublicacao e genero. Verifique se a propriedade editora existe no
// objeto usando for in. Se não existir, adicione essa propriedade ao objeto.

var livro = {
    titulo:"Viagem ao sobre Natural",
    autor:"Roger-J-Morneau",
    anoPublicado: 2003,
    genero: "Documentário",
    
}

const atributosParaVerificar = 'editora'
var verificar = false

for (const key in livro) {
    if (key == atributosParaVerificar) {
        verificar = true
    }
}

if(verificar){
    console.log("O livro já possui uma editora")
}else{
    console.log("Adicionando editora ao livro")
    livro.editora = "CPB"
}

console.log(livro)