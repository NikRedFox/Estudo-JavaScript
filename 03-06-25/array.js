// let numero = [1, 2, 3, 4, 5]
// console.log(numero[4])

// let frutas = ["Maçã", "Banana"]
// console.log(frutas[0])

// frutas.unshift("Uva")  // Adiciona algo no começo de um array

// console.log(frutas[0])

// frutas.push("Abacaxi") // Adiciona algo no final de um array

// console.log(frutas)


// frutas.splice(2, 0, "Laranja")  // .splice(posição, QuantosRemove, valor) para poder adicionar algo em qualquer lugar do array

// console.log(frutas)

let pessoas = ["Felipe", "Matheus", "João"]

console.log(pessoas.length)

pessoas.unshift("Larissa")

console.log(pessoas)

pessoas.pop() // Remove o ultimo da array

console.log(pessoas)

pessoas.push("Mariana")
pessoas.splice(2, 0, "Pedro")

console.log(pessoas )

pessoas.shift() // Remove o primeiro da array

// .splice pode ser usado para remover algo de um array em qualquer posição, apenas passando o indice e
// a quantidade a ser removida, mas não um valor. Ex: pessoas.splice(1, 2)

