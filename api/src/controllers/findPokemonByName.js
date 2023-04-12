const { Pokemon, Type } = require('../db')
const findOnePokemon = require('./findOnePokemon')
const axios = require('axios')

const findPokemonByName = async (req, res) => {
    const { name } = req.query
    const caso = 'particular'
    try {
        const pokemonDB = await Pokemon.findOne({
            where: { name },
            attributes: ['name', 'image'],
            include: {
                model: Type,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }
        })
        findOnePokemon(pokemonDB, name, caso, res)
    } catch (error) {
        return res.status(400).json({ error: `Pokemon: ${error.response.data.toLowerCase()}` })
    }
}

module.exports = findPokemonByName