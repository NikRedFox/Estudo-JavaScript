// while(condição){
//     Repete o que estiver dentro enquanto a condição for verdadeira
// }

// let contador = 5

// while(contador > 0){
//     contador -=1
// }
// console.log("Acabou")

let senhaCorreta = "abc123"
let senhaDigitada = ""

while(senhaDigitada !== senhaCorreta){
    senhaDigitada = prompt("Informe sua senha: ")

    if (senhaDigitada !== senhaCorreta){
        alert("Senha incorreta!")
    }
}

console.log("Acesso permitido")