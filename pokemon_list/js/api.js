const BASE_URL = "https://pokeapi.co/api/v2";

export async function fetchPokemon() {
  try {
    const response = await fetch(`${BASE_URL}/pokemon/`);
    if (!response.ok) {
      throw new Error("Intento de obtener Pokémon fallido.");
    }
    return await response.json();
  } catch (error) {
    console.error("Error al cargar Pokémon:", error);
    throw error;
  }
}

export async function fetchPokemonInfo(pokemonName) {
  try {
    const response = await fetch(`${BASE_URL}/pokemon/${pokemonName}`);
    if (!response.ok) {
      throw new Error("Intento de obtener los datos de los Pokémon fallido.");
    }
    return await response.json();
  } catch (error) {
    console.error("Error al cargar datos de los Pokémon:", error);
    throw error;
  }
}

export async function fetchPokemonEvo(pokemonId) {
  try {
    const response = await fetch(`${BASE_URL}/pokemon-species/${pokemonId}`);
    if (!response.ok) {
      throw new Error("Intento de obtener los datos de los Pokémon fallido.");
    }
    return await response.json();
  } catch (error) {
    console.error("Error al cargar datos de los Pokémon:", error);
    throw error;
  }
}
