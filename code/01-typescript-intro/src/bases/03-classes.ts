export class Pokemon {
  constructor(public readonly id: number, public name: string) {
    this.id = id;
    this.name = name;
    console.log("constructor inicializado");
  }
}

export const charmander = new Pokemon(4, "Charmander");
