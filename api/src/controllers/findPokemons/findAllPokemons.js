const { Pokemon, Type } = require('../../db')
const findPokemonsApi = require('./findPokemonsApi')

const findAllPokemons = async (req, res) => {
    try {
        let pokemonsApi = []
        for (let i = 1; i < 15; i++) {
            const pokemon = await findPokemonsApi(i)
            pokemonsApi.push(pokemon)
        }
        const pokemonsDB = await Pokemon.findAll({
            attributes: ['name', 'image'],
            include: {
                model: Type,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }
        })
        const allPokemons = pokemonsApi.concat(pokemonsDB)
        return res.status(200).json(allPokemons)
    } catch (error) {
        res.status(400).json({ error })
    }
}


module.exports = findAllPokemons