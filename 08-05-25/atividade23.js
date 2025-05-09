let senhaSair = "sair"
let senhaDigitada = ""

while(senhaDigitada !== senhaSair){
    senhaDigitada = prompt("Digite sair para encerrar: ")

    if (senhaDigitada !== senhaSair){
        alert("Não é isso.")
    }
}

console.log("Ok.")