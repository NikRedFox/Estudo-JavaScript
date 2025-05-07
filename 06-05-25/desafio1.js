let peso = 65
let altura = 1.71

const imc = peso / (altura * 2)

if(imc >= 40.0){
    console.log("Obesidade classe 3")
}

else if(imc >= 35 &&  imc < 40){
    console.log("Obesidade classe 2")
}

else if(imc >= 30 &&  imc < 35){
    console.log("Obesidade classe 1")
}

else if(imc >= 25 &&  imc < 30){
    console.log("Excesso de peso")
}

else if(imc >= 18.5 &&  imc < 25){
    console.log("Peso normal")
}

else{
    console.log("Abaixo do peso normal")
}
