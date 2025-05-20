function processarDados(callback){
    setTimeout(() => {
        console.log("Dados processados!")
        callback()
    }, 2000)
}

function abrirArquivo(){
    setTimeout(() => {
        console.log("Mostrando dados na tela...") 
    }, 2000);
    
}

console.log("Processando dados...")

processarDados(abrirArquivo)
