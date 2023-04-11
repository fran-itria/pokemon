const { Router } = require('express')
const pokemons = Router()
const findAllPokemons = require('../controllers/findAllPokemons')
const createPokemon = require('../controllers/createPokemon')

pokemons.get('/', findAllPokemons)
pokemons.post('/', createPokemon)

module.exports = pokemons