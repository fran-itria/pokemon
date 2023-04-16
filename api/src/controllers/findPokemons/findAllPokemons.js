const { Pokemon, Type } = require('../../db')
const findPokemonsApi = require('./findPokemonsApi')

const findAllPokemons = async (req, res) => {
    try {
        let pokemonsApi = []
        for (let i = 1; i < 24; i++) {
            const pokemon = await findPokemonsApi(i)
            pokemonsApi.push(pokemon)
        }
        const pokemonsDB = await Pokemon.findAll({
            include: {
                model: Type,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }
        })
        return res.status(200).json({pokemonsApi, pokemonsDB})
    } catch (error) {
        res.status(400).json({ error })
    }
}


module.exports = findAllPokemons