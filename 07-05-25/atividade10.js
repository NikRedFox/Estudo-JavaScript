let mes = prompt("Informe uma letra (A, B, C ou D): ")

switch(mes.toUpperCase()){
    case "A":
        console.log("Excelente")
        break;

    case "B":
        console.log("Bom")
        break;

    case "C":
        console.log("Regular")
        break;

    case "D":
        console.log("Ruim")
        break;    

    default:
        console.log("Inválido")
        break;  
}