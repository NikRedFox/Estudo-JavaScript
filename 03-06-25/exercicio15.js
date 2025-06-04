function celciusParaFahrenheit(celcius){
    return (celcius * 1.8) + 32
}

let celcius = 40

let fahrenheit = celciusParaFahrenheit(celcius)

console.log(`${celcius}ºC em Fahrenheit = ${fahrenheit}ºF`)