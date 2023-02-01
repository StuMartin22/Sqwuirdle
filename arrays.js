// array variable declarations
const pokeStorage = []

// fetch request to get data from API & set pokeStorage as returned obj
function getPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon-species/?limit=151')
        .then((response) => response.json())
        .then((data) => {
            data.results.map(entry => pokeStorage.push(entry))
        })
};


//calling functions to execute
getPokemon();


  console.log(pokeStorage)