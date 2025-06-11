// let nome = document.getElementById("nome")
// let username = document.getElementById("username")
// let rua = document.getElementById("rua")


// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((data) => {
//         nome.innerText = data[0].name
//         username.innerText = data[0].username
//         rua.innerText = data[0].address.street
    
//     })
//     .catch((err) => {
//         nome.innerText = "Não foi possivel encontrar"
//         username.innerText = "Não foi possivel encontrar"
//         rua.innerText = "Não foi possivel encontrar"
//     })

let conselho = document.getElementById("conselho-gerado")
let botao = document.getElementById("conselho")

botao.addEventListener("click", function(event){
    event.preventDefault()
    fetch("https://api.adviceslip.com/advice")
        .then((res) => res.json())
        .then((data) => {
            
            conselho.innerText = data.slip.advice
        })

        .catch((err) => {
            console.log(err)
        })
})


