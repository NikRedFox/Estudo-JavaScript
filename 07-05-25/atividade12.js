let mes = prompt("Digite uma opção de 1 à 3: ")

switch(mes){
    case "1":
        console.log("Iniciar jogo")
        break;

    case "2":
        console.log("Carregar jogo")
        break;

    case "3":
        console.log("Sair")
        break;

    default:
        console.log("Opção invalida")
        break;  
}