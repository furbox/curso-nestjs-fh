class NewPokemon {
    constructor(
        public readonly id: number,
        public name: string
    ) { }

    scream() {
        console.log(`NO QUIERO!!!`)
    }

    speak() {
        console.log(`NO HABLO!!`);
    }
}
const MyDecorator = () => {
    return (target: Function) => {
        return NewPokemon;
    }
}


@MyDecorator()
export class Pokemon {
    constructor(
        public readonly id: number,
        public name: string
    ) { }

    scream() {
        console.log(`${this.name.toUpperCase()}!!!`)
    }

    speak() {
        console.log(`${this.name}, ${this.name}`);
    }
}

export const dito = new Pokemon(4, 'Dito');

dito.scream();
dito.speak();