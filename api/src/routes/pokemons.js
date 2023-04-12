const { Router } = require('express')
const pokemons = Router()
const { findAllPokemons } = require('../controllers/findAllPokemons')
const createPokemon = require('../controllers/createPokemon')
const findPokemonById = require('../controllers/findPokemonById')
const types = require('./types')

pokemons.get('/', findAllPokemons)
pokemons.get('/:idPokemon', findPokemonById)
pokemons.post('/', createPokemon)
pokemons.use('/types', types)

module.exports = pokemons