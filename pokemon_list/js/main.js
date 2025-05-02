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
