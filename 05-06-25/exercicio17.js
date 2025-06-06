let caixa = document.getElementById("caixa")
let p = document.getElementById("p")

caixa.addEventListener("mouseover", function(){
    p.innerText = "Mouse detectado!"
    p.style.color = "red"
})

caixa.addEventListener("mouseout", function(){
    p.innerText = "Sem mouse"
    p.style.color = "black"
})