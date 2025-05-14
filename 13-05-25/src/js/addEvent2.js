let box = document.getElementById("caixa")
let btnAmarelo = document.getElementById("btn-amarelo")
let btnCinza = document.getElementById("btn-cinza")
let text = document.getElementById("text")

btnAmarelo.addEventListener("click", function(){
    box.style.backgroundColor = "yellow"
    text.innerText = "Amarelo"
});

btnCinza.addEventListener("click", function(){
    box.style.backgroundColor = "lightgray"
    text.innerText = "Cinza claro"
})