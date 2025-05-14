let box = document.getElementById("box")

box.addEventListener("mouseover", function(){
    box.innerText = "Mouse detectado!"
})

box.addEventListener("mouseout", function(){
    box.innerText = ""
})