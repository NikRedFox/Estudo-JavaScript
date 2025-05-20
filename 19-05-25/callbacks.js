function assarPizza(callback){
    setTimeout(() => {
        console.log("🍕🍕 Pizza pronta!")
        callback()
    }, 2000)
}

function comerPizza(){
    console.log("Comendo a pizza")
}

console.log("Preparando pizza")

assarPizza(comerPizza)

// function bemVindo(){
//     setTimeout(() => {
//         console.log("Seja bem vindo")
//     }, 3000);
// }

// bemVindo()
// console.log("Tchau")

