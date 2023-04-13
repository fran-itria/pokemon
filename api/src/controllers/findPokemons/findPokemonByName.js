const { Pokemon, Type } = require('../../db')
// const { Op } = require('sequelize')
const findOnePokemon = require('./findOnePokemon')

const findPokemonByName = async (req, res) => {
    const name = req.query.name.toLowerCase()
    const caso = 'all'
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
    findOnePokemon(pokemonDB, name, caso, res)
}

module.exports = findPokemonByName