function baixarArquivo(callback){
    setTimeout(() => {
        console.log("Arquivo baixado ✅")
        callback()
    }, 2000)
}

function abrirArquivo(){
    setTimeout(() => {
        console.log("Abrindo arquivo...") 
    }, 2000);
    
}

console.log("Baixando arquivo...")

baixarArquivo(abrirArquivo)
