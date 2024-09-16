// 1. Acessando Propriedades de Objetos
// ○ Objetivo: Crie um objeto carro com propriedades como marca, modelo,
// ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
// valores no console.

var carro = {
    marca: "Jeep",
    modelo:"Renegate",
    ano:2024,
    cor:"Preto"
}

for (const key in carro) {
    console.log(`${key}: ${carro[key]}`)
}