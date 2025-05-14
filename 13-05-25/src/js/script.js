// let titulo = document.getElementById("titulo")
// titulo.style.fontSize = "1px"

// let paragrafo = document.getElementsByClassName("paragrafo")
// paragrafo[0].innerText = "Alterei"

// paragrafo[0].classList.add("vermelho")


// ---------------------------------------------------------- Metodo ultrapassado
// let btn = document.getElementById("button")

// btn.onclick = function(){
//     alert("Botão clicado")
// }


// ---------------------------------------------------------- Metodo mais recente
// let botao = document.getElementById("button")
// let paragrafo = document.getElementById("paragrafo")

// botao.addEventListener("click", function(){
//     paragrafo.innerText = "Eu cliquei no botão"
// })

// let btn = document.getElementById("button")
// let p = document.getElementById("paragrafo")

// btn.addEventListener("click", function(){
//     p.innerText = "Teste"
// })

// ------------------------------------------------------------ Evento Over

// elemento.addEventListener("mouseover", function(){
//     //Quando o mouse sai
// })

let box = document.getElementsByClassName("box")

box[0].addEventListener("mouseover", function(){
    box[0].style.backgroundColor = "red"
})