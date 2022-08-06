export const pokemonsIds = [1, 223, 4, 67, 53, 47];

// export const pokemon = {
//     id: 1,
//     name: 'Pikachu'
// }

export interface Pokemon {
  id: number;
  name: string;
  age?: number;
}

export const pikachu: Pokemon = {
  id: 1,
  name: "Pikachu",
};

export const pokemons: Pokemon[] = [];

pokemons.push(pikachu);
