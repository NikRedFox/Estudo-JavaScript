const nome = (nome) => `Olá, ${nome}.`

console.log(nome("Nikolas"))

// ---------------------------------------------------

const numero = (n1, n2) => n1 + n2

let soma = numero(1,2)

console.log(soma)

// ---------------------------------------------------

const resto = function(numero){
    if(numero%2 == 0){
        console.log(`O Número ${numero} é par`)
    }

    else{
        console.log(`O Numero ${numero} é impar`)
    }
}

resto(3)

// ---------------------------------------------------

const temperatura = function(temp){

    fahrenheit = temp * (9/5) + 32    
    console.log(`${temp}°C em Fahrenheit é: ${fahrenheit}°F `)
    
}

temperatura(30)
