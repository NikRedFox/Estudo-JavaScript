let fruta = prompt("Digite uma fruta: ")

switch(fruta.toLowerCase()){
    case "laranja":
        console.log("Laranja = R$ 2,50")
        break;

    case "maca":
        console.log("Maçã = R$ 3,00")
        break;

    default:
        console.log("Sem estoque")
        break;
}