const { Pokemon } = require('../db')
const axios = require('axios')
const { findPokemonApiByIdPokemon } = require('./findAllPokemons')

const findPokemonById = async (req, res) => {
    const { idPokemon } = req.params
    const pokemonDB = await Pokemon.findByPk(idPokemon)
    // if (!pokemonDB) {
    //     const pokemon = await findPokemonsApi(idPokemon)
    //     return res.status(200).json(pokemon)
    // } else return res.status(200).json(pokemonDB)
    findPokemonApiByIdPokemon(pokemonDB, idPokemon, res)
}

module.exports = findPokemonById