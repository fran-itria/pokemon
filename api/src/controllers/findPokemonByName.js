const { Pokemon, Type } = require('../db')
const findOnePokemon = require('./findOnePokemon')

const findPokemonByName = async (req, res) => {
    const name = req.query.name.toLowerCase()
    const caso = 'particular'
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