const baixarArquivo = new Promise((resolve, reject) => {
    baixar = true
    setTimeout(() =>{
      if(baixar == true){
        resolve("nome: Video.mp4 / tamanho: 150mb")
    }
    else{
        reject("Falha ao baixar o arquivo ❌")
    }  
    })
        
})

baixarArquivo
    .then((res) => {
        console.log(res)      
    })
    .catch((err) => {
        console.log(err)
    })