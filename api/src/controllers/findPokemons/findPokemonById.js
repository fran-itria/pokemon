const { Pokemon, Type } = require('../../db')
const findOnePokemon = require('./findOnePokemon')

const findPokemonById = async (req, res) => {
    const { idPokemon } = req.params
    if (Number.isNaN(parseInt(idPokemon))) {
        const pokemonDB = await Pokemon.findByPk(idPokemon, {
            include: {
                model: Type,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }
        })
        findOnePokemon(pokemonDB, idPokemon, res)
    } else findOnePokemon(null, idPokemon, res)
}

module.exports = findPokemonById