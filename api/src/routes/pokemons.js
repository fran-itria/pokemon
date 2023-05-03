const { Router } = require('express')
const pokemons = Router()
const findPokemonsApiHandler = require('../handlers/findPokemonsApiHandler')
const createPokemonHandler = require('../handlers/createPokemonHandler')
const findPokemonHandler = require('../handlers/findPokemonHandler')
const findPokemonsDbHandler = require('../handlers/findPokemonsDbHandler')

pokemons.get('/api', findPokemonsApiHandler)
pokemons.get('/db', findPokemonsDbHandler)
pokemons.get('/name', findPokemonHandler)
pokemons.get('/:idPokemon', findPokemonHandler)
pokemons.post('/', createPokemonHandler)

module.exports = pokemons