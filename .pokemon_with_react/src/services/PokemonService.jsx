const BASE_URL = "https://pokeapi.co/api/v2/";

export const getPokemonList = async (limit, offset) => {
  try {
    const response = await fetch(
      `${BASE_URL}pokemon?limit=${limit}&offset=${offset}`
    );
    if (!response.ok) {
      throw new Error("La respuesta de la red no fue satisfactoria.");
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error al listar los Pokémon:", error);
    throw error;
  }
};

export const getPokemonDetails = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("La respuesta de la red no fue satisfactoria.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener los detalles del Pokémon:", error);
    throw error;
  }
};

export const getEvolutionChain = async (pokemonId) => {
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
};
