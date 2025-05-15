// document.addEventListener("keydown", function(event){
//     // event.type() //Tipo de evento
//     // event.key 
//     // if(event.key){
//         alert(`Você digitou a tecla ${event.key}`)
//     // }

// })

// ----------------------------------------------------------
// let form = document.getElementById("meuFormulario")

// form.addEventListener("submit", function(event){
//     event.preventDefault() // Impede a pagina de recarregar 
//     alert("Formulario Enviado")
// })

// ----------------------------------------------------------
// let selecionar = document.getElementById("selecionar")

// selecionar.addEventListener("change", function(event){
//     console.log("Opção selecionada: " + event.target.value)
// })

// ----------------------------------------------------------
let botao = document.getElementById("menu-btn")
let menu = document.getElementById("menu")

botao.addEventListener("click", function(){
    menu.classList.toggle("hidden")
})