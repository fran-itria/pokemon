const { Router } = require('express')
const pokemons = Router()
const findAllPokemons = require('../controllers/findPokemons/findAllPokemons')
const createPokemon = require('../controllers/createPokemon')
const findPokemonById = require('../controllers/findPokemons/findPokemonById')
const findPokemonByName = require('../controllers/findPokemons/findPokemonByName')

pokemons.get('/', findAllPokemons)
pokemons.get('/name', findPokemonByName)
pokemons.get('/:idPokemon', findPokemonById)
pokemons.post('/', createPokemon)

module.exports = pokemons