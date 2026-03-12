

// For definindo comportamento
// for (let n = 0;n < cores.length; n++){
//     console.log(cores[n])
// }

//For usando o IN - IN Pega a posiÃ§Ã£o dos itens de dentro da lista
// for (let n in cores){
//     console.log(cores[n])
// }

//For Usando OF - OF pega os itens de dentro da Lista
// for (let cor of cores){
//     console.log(cor)
// }

// let cores = [
//     {nome: 'Azul', qt: 10},
//     {nome: 'Amarelo', qt: 9},
//     {nome: 'Branco', qt: 11},
//     {nome: 'Preto', qt: 10}
// ]

// for (let n in cores){
//     cores[n].nome = cores[n].nome.toUpperCase()
//     console.log(cores[n].nome)
// }

// for (let cor of cores){
//     cor.nome = cor.nome.toUpperCase()
//     console.log(cor.nome)
// }

// let numero = 0

// while (numero <= 100){
//     console.log(`O numero da vez Ã© ${numero}`)
//     numero++
// }


// for (let n in frutas){
//     console.log(`A Fruta ${frutas[n]} esta na posiÃ§Ã£o: ${n}`)
// }

let frutas = ["Banana", "Uva", "Abacate"]

if (frutas.includes("Morango")) {
    console.log("Tem Morango na Lista")
} else {
    console.log("Não tem Morango na lista")
    
}

// let bigFruits = frutas.some((item) => {
//     return item.length > 10
// })




// console.log(frutas.length)
// frutas.push("Abacaxi")
// // frutas.pop()
// // frutas.shift()
// console.log(frutas.join(' '))
