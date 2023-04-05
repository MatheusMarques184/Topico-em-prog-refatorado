import {Request, Response} from 'express'
import pokemonService from '../service/pokemonService'

class PokemonController {
    public async createFile(req: Request, res: Response) {
        try{
            const pokemons = await pokemonService.createFilePokemons()
            return res.status(201).send()
        } catch(e) {
            console.log(e)
        }
    }

    public async find(req: Request, res: Response) {
        try{
            const pokemons = await pokemonService.findPokemons()
            return res.status(200).send(pokemons)
        } catch(e) {
            console.log(e)
        }
    }
}

export default new PokemonController()