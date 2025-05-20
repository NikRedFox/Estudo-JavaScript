function carregarProduto(callback){
    setTimeout(() => {
        console.log("Produto cerregado com sucesso!")
        callback()
    }, 1000)
}

function exibirProduto(){
    setTimeout(() => {
        console.log("Exibindo detalhes do produto.")
    }, 1000)
}

console.log("Carregando produto...")    

carregarProduto(exibirProduto)
