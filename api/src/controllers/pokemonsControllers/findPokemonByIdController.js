const { Pokemon, Type } = require('../../db')
const findOnePokemon = require('../findPokemonsFunctions/findOnePokemon')

const findPokemonById = async (idPokemon) => {
    if (idPokemon.length == 36) {
        const pokemonDB = await Pokemon.findByPk(idPokemon, {
            include: {
                model: Type,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }
        })
        return findOnePokemon(pokemonDB, idPokemon)
    } else return findOnePokemon(null, idPokemon)
}

module.exports = findPokemonById