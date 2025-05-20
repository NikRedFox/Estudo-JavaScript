// const pizzaChegou = true;

// const pedido = new Promise((resolve, reject) => {
//     if(pizzaChegou){
//         resolve("Pizza chegou")
//     }
//     else{
//         reject("Pedido cancelado")
//     }
// })

// pedido
// .then((resposta) => {
//     // Aqui voce faz algo com o resultado da Promise

//     console.log(resposta)
// })

// .catch((erro) =>{
//     // Aqui voce trata o erro, se a Promise falhar

//     console.log(erro)
// })

//---------------------------------------------------------------

// const promessa  = new Promise((resolve, reject) => {
//     resolve("Tudo certo")
// })

// promessa
// .then((res) =>{
//     console.log(res)
// })

// .catch((err) => {
//     console.log(err)
// })

//---------------------------------------------------------------

const verificarResultado = new Promise((resolve, reject) =>{
    let result = 1 + 1;

    if(result == 2){
        resolve("Numero 2")
    }

    else{
        reject("Não é 2")
    }
})

verificarResultado
    .then((res) => {
        console.log(res)
    })

    .catch((err) => {
        console.log(err)
    })