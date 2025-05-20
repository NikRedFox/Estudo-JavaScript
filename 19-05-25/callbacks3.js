function enviarNotificacao(callback){
    setTimeout(() => {
        console.log("Notificacao enviada!")
        callback()
    }, 1500)
}

function confirmarNotificacao(){
    setTimeout(() => {
        console.log("Confirmação: Notificação entregue.")
    }, 1500)
}

console.log("Enviando notificação...")    

enviarNotificacao(confirmarNotificacao)
