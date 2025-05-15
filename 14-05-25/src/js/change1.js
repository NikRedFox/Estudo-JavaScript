let nome = document.getElementById("nome")

nome.addEventListener("change", function(event){
    console.log("Nome: " + event.target.value)
})