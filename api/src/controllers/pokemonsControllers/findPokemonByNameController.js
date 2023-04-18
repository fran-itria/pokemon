const { Pokemon, Type } = require('../../db')
// const { Op } = require('sequelize')
const findOnePokemon = require('../findPokemonsFunctions/findOnePokemon')

const findPokemonByNameController = async (name) => {
    const pokemonDB = await Pokemon.findOne({
        where: { name },
        include: {
            model: Type,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    })
    return findOnePokemon(pokemonDB, name)
}

module.exports = findPokemonByNameController