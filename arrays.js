// array variable declarations
const pokeStorage = []

// fetch request to get data from API
fetch('https://pokeapi.co/api/v2/pokemon-species/?limit=151')
  .then((response) => response.json())
  .then((data) => {
    pokeStorage = data
  });



