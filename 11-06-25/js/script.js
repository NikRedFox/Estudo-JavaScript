let pokemonImg = document.getElementById("pokemon_image")
let pokemonName = document.getElementById("pokemon_name")
let pokemonNumber = document.getElementById("pokemon_number")
let input = document.getElementById("input_search")
let btnSearch = document.getElementById("btn-search")
let btnNext = document.getElementById("btn-next")
let btnPrev = document.getElementById("btn-prev")
let currentPokemon = 1

function buscarPokemon(searchPokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchPokemon}`)
        .then((res) => {
            if (!res.ok) throw new Error("Pokémon não encontrado");
            return res.json();
        })
        .then((data) => {
            console.log(data);
            pokemonImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${data.id}.gif`;
            pokemonNumber.innerText = data.id;
            pokemonName.innerText = data.name;
            currentPokemon = data.id;
        })
        .catch((err) => {
            console.log(err);
            pokemonImg.src = "";
            pokemonNumber.innerText = "";
            pokemonName.innerText = "Não encontrado";
        });
}


btnSearch.addEventListener("click", function(event){
    event.preventDefault();
    let value = input.value.toLowerCase().trim();

    if (!value) return;

    buscarPokemon(value);
});

btnPrev.addEventListener("click", function () {
    if (currentPokemon > 1) {
        currentPokemon -= 1;
        buscarPokemon(currentPokemon);
    }
});


btnNext.addEventListener("click", function(){
    currentPokemon +=  1
    // console.log(searchPokemon)
    buscarPokemon(currentPokemon)
})

buscarPokemon(currentPokemon)