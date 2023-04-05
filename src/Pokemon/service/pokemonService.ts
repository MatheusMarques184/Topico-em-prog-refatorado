import { writeFile, readFile } from 'fs/promises'

class PokemonService {

    public async createFilePokemons() {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=2")
        .then((response) => response.json())
        .then((data) =>  writeFile('pokemons.json', JSON.stringify(data.results, null, 2)));
    }

    public async findPokemons() {
        const pokedex = JSON.parse(await readFile('pokemons.json', "utf-8"))
        return pokedex
    }
}

export default new PokemonService()