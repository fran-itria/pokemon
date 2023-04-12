const { Router } = require('express')
const pokemons = Router()
const { findAllPokemons } = require('../controllers/findAllPokemons')
const createPokemon = require('../controllers/createPokemon')
const findPokemonById = require('../controllers/findPokemonById')
const findPokemonByName = require('../controllers/findPokemonByName')

pokemons.get('/', findAllPokemons)
pokemons.get('/name', findPokemonByName)
pokemons.get('/:idPokemon', findPokemonById)
pokemons.post('/', createPokemon)

module.exports = pokemons