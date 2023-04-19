const { Pokemon, Type } = require('../../db')
const findOnePokemon = require('../findPokemonsFunctions/findOnePokemon')

const findPokemonById = async (idPokemon) => {
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
        return pokemonDB
    } else return findOnePokemon(null, idPokemon)
}

module.exports = findPokemonById