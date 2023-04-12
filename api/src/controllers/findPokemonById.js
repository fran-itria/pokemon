const { Pokemon } = require('../db')
const findOnePokemon = require('./findOnePokemon')

const findPokemonById = async (req, res) => {
    const caso = 'particular'
    const { idPokemon } = req.params
    const pokemonDB = await Pokemon.findByPk(idPokemon)
    findOnePokemon(pokemonDB, idPokemon, caso, res)
}

module.exports = findPokemonById