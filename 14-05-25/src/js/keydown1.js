document.addEventListener("keydown", function(event){
    
    if(event.key === "r"){
       document.body.style.backgroundColor = "red" 
    }

    else if(event.key === "g"){
        document.body.style.backgroundColor = "green"
    }
    
    else if(event.key === "b"){
        document.body.style.backgroundColor = "blue"
    }
    
})