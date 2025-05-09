let numero = Math.floor(Math.random() * 11)
let palpite = ""

while(Number(palpite) != numero){
    palpite = prompt("Adivinhe um numero de 1 à 10: ")

    if(Number(palpite) != numero){
        alert("Tsk tsk, não.")
    }
}
prompt("Acertou!")