import React, { useState, useEffect } from "react";
import {
  getPokemonList,
  getPokemonDetails,
  getEvolutionChain,
} from "../services/PokemonService";
import PokemonCard from "./PokemonCard";
import styles from "./PokemonList.module.css";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(0);
  const [search, setSearch] = useState("");
  const limit = 20;

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        setLoading(true);
        const data = await getPokemonList(limit, offset);
        const pokemonDetailsPromises = data.map((pokemon) =>
          getPokemonDetails(pokemon.url)
        );
        const evolutionPromises = data.map((pokemon) =>
          getEvolutionChain(pokemon.url.split("/").filter(Boolean).pop())
        );
        const pokemonDetails = await Promise.all(pokemonDetailsPromises);
        const evolutionDetails = await Promise.all(evolutionPromises);
        const combinedData = pokemonDetails.map((pokemon, index) => ({
          ...pokemon,
          evolution: [evolutionDetails[index]],
        }));
        console.log(combinedData);
        setPokemonList(combinedData);
        setFilteredPokemon(combinedData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonList();
  }, [offset]);

  const handleSearchKeyUp = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    const filtered = pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(value)
    );
    setFilteredPokemon(filtered);
  };

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={styles["pokemon__list"]}>
      <div className={styles["pokemon__container"]}>
        <input
          type="text"
          placeholder="Buscar Pokémon..."
          defaultValue={search}
          onKeyUp={handleSearchKeyUp}
          className={styles["pokemon__search"]}
        />
        {filteredPokemon.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
        <div className={styles["pokemon__pagination"]}>
          <button
            onClick={() => setOffset((prev) => Math.max(prev - limit, 0))}
            disabled={offset === 0}
          >
            Anterior
          </button>
          <button onClick={() => setOffset((prev) => prev + limit)}>
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default PokemonList;
