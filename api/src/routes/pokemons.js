const { Router } = require('express')
const pokemons = Router()
const findAllPokemonsHandler = require('../handlers/findAllPokemonsHandler')
const createPokemonHandler = require('../handlers/createPokemonHandler')
const findPokemonHandler = require('../handlers/findPokemonHandler')

pokemons.get('/', findAllPokemonsHandler)
pokemons.get('/name', findPokemonHandler)
pokemons.get('/:idPokemon', findPokemonHandler)
pokemons.post('/', createPokemonHandler)

module.exports = pokemons