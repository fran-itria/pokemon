const { Pokemon, Type } = require('../db')
const findOnePokemon = require('./findOnePokemon')
const axios = require('axios')

const findPokemonByName = async (req, res) => {
    const { name } = req.query
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
        // if (!pokemonDB) {
        //     const pokemon = await axios(`https://pokeapi.co/api/v2/pokemon/${name}`)
        //         .then(response => {
        //             const { name, sprites, types } = response.data
        //             const typesPokemon = types.map(type => type.type.name)
        //             return { name, image: sprites.front_default, types: typesPokemon }
        //         })
        //     return res.status(200).json(pokemon)
        // }
        // return res.status(200).json(pokemonDB)
        findOnePokemon(pokemonDB, name, res)
    } catch (error) {
        return res.status(400).json({ error: `Pokemon: ${error.response.data.toLowerCase()}` })
    }
}

module.exports = findPokemonByName