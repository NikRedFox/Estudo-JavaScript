// const verificarResultado = new Promise((resolve, reject) => {
//     let result = 1+1

//     if(result == 2) {
//         resolve("Resultado 2")
//     }
//     else{
//         reject("Resultado não é 2")
//     }
// })

// .then((res) => {
//     console.log(res)
// })

// .catch((err) => {
//     console.log(err)
// })

let id = document.getElementById("id")
let nome = document.getElementById("nome")
let username = document.getElementById("username")
let email = document.getElementById("email")
let endereco = document.getElementById("address")
let rua = document.getElementById("rua")
let zipcode = document.getElementById("zipcode")


fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        id.innerText = data[0].id
        nome.innerText = data[0].name
        username.innerText = data[0].username
        email.innerText = data[0].email
        endereco.innerText = data[0].address.street
        rua.innerText = data[0].address.city
        zipcode.innerText = data[0].address.zipcode
    })
    .catch((err) => {
        console.log(err)
    })


