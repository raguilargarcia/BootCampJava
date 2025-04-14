import { fetchPokemon, fetchPokemonInfo, fetchPokemonEvo } from "./api.js";
import { renderPokemon } from "./ui.js";

document.addEventListener("DOMContentLoaded", function () {
  async function initApp() {
    try {
      const listadoPokemon = await fetchPokemon();
      listadoPokemon.results.forEach(async (pokemon) => {
        const pokemonInfo = await fetchPokemonInfo(pokemon.name);
        const pokemonEvo = await fetchPokemonEvo(
          pokemon.url.split("/").filter(Boolean).pop()
        );
        renderPokemon(pokemonInfo, pokemonEvo);
      });
    } catch (error) {
      console.error("Error al cargar Pokémon:", error);
    }
  }

  initApp();
});

let buscador = document.getElementById("search_pokemon");
buscador.addEventListener("keyup", function () {
  let filter = buscador.value.toUpperCase();
  let pokemonList = document.getElementById("container_pokemon");
  let pokemonItems = pokemonList.getElementsByTagName("section");

  for (let i = 0; i < pokemonItems.length; i++) {
    let pokemonName = pokemonItems[i].getElementsByTagName("p")[0];
    if (pokemonName) {
      let txtValue = pokemonName.textContent;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        pokemonItems[i].style.display = "";
      } else {
        pokemonItems[i].style.display = "none";
      }
    }
  }
});
