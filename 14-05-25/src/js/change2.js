let selecionar = document.getElementById("selecionar")
let titulo = document.getElementById("titulo")

selecionar.addEventListener("change", function(event){
    titulo.style.color = event.target.value
})