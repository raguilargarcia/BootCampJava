import React from "react";
import styles from "./PokemonCard.module.css";
import PokemonInfo from "./PokemonInfo";

const PokemonCard = ({ pokemon }) => {
  const { name, id, types, sprites, evolution } = pokemon;
  const typeNames = types.map((type) => type.type.name);
  const evol = evolution.map((evo) =>
    evo.evolves_from_species ? evo.evolves_from_species.name : ""
  );
  const imageUrl = sprites.front_default;

  return (
    <div
      onClick={<PokemonInfo key={id} pokemon={name} />}
      id={`pokemon-card-${pokemon.id}`}
      className={styles["pokemon__card"]}
    >
      <div className={styles["pokemon__card__img"]}>
        <img src={imageUrl} alt={name} />
        <p className={styles["pokemon__card__id"]}>ID: {id}</p>
      </div>
      <div className={styles["pokemon__info"]}>
        <div className={styles["pokemon__info__name"]}>
          <h2>{name}</h2>
        </div>
        <div className={styles["pokemon__info__types"]}>
          <p>{typeNames[0]}</p>
          {typeNames[1] && (
            <p className={styles["pokemon__info__types"]}>{typeNames[1]}</p>
          )}
        </div>
        {evol != "" && (
          <div className={styles["pokemon__info__evol"]}>
            <p>Evoluciona de:</p>
            <p>{evol}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PokemonCard;
