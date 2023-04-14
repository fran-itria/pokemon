const { Pokemon } = require('../../db')
const findOnePokemon = require('./findOnePokemon')

const findPokemonById = async (req, res) => {
    const { idPokemon } = req.params
    // const pokemonDB = await Pokemon.findByPk(idPokemon)
    findOnePokemon(null, idPokemon, res)
}

module.exports = findPokemonById