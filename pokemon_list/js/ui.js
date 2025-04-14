export function renderPokemon(pokemon, evol) {
  const pokemonList = document.getElementById("container_pokemon");
  const pokemonItem = document.createElement("section");
  pokemonItem.classList.add("card_pokemon");
  pokemonItem.classList.add("reveal");
  if (evol.evolves_from_species) {
    pokemonItem.innerHTML = `<div class="img_pokemon">
                              <img
                                      src="${pokemon.sprites.front_default}"
                                      alt="${pokemon.name}"
                              />
                              <span class="id_pokemon">ID/${pokemon.id}</span>
                      </div>
                      <div class="info_pokemon">
                              <div class="name_pokemon">
                                      <p>${
                                        pokemon.name.charAt(0).toUpperCase() +
                                        pokemon.name.slice(1)
                                      }</p>
                              </div>
                              <div class="type_pokemon">
                                      <p>${
                                        pokemon.types[0].type.name
                                          .charAt(0)
                                          .toUpperCase() +
                                        pokemon.types[0].type.name.slice(1)
                                      }</p>
                                      ${
                                        pokemon.types[1]
                                          ? `<p>${
                                              pokemon.types[1].type.name
                                                .charAt(0)
                                                .toUpperCase() +
                                              pokemon.types[1].type.name.slice(
                                                1
                                              )
                                            }</p>`
                                          : ""
                                      }
                              </div>
                              <div class="evol_pokemon">
                                <p>Evoluciona de</p>
                                <p>${evol.evolves_from_species.name}</p>
                              </div>
                      </div>`;
  } else {
    pokemonItem.innerHTML = `<div class="img_pokemon">
                              <img
                                      src="${pokemon.sprites.front_default}"
                                      alt="${pokemon.name}"
                              />
                              <span class="id_pokemon">ID/${pokemon.id}</span>
                      </div>
                      <div class="info_pokemon">
                              <div class="name_pokemon">
                                      <p>${
                                        pokemon.name.charAt(0).toUpperCase() +
                                        pokemon.name.slice(1)
                                      }</p>
                              </div>
                              <div class="type_pokemon">
                                      <p>${
                                        pokemon.types[0].type.name
                                          .charAt(0)
                                          .toUpperCase() +
                                        pokemon.types[0].type.name.slice(1)
                                      }</p>
                                      ${
                                        pokemon.types[1]
                                          ? `<p>${
                                              pokemon.types[1].type.name
                                                .charAt(0)
                                                .toUpperCase() +
                                              pokemon.types[1].type.name.slice(
                                                1
                                              )
                                            }</p>`
                                          : ""
                                      }
                              </div>
                      </div>`;
  }
  pokemonList.appendChild(pokemonItem);
}

export function showError(message) {
  const errorContainer = document.getElementById("error");
  errorContainer.textContent = message;
}
