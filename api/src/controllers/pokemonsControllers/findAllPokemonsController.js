const { Pokemon, Type } = require('../../db')
const findPokemonsApi = require('../findPokemonsFunctions/findPokemonsApi')

const findAllPokemonsController = async () => {
    try {
        let pokemonsApi = []
        for (let i = 1; i < 61; i++) {
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
        return pokemonsApi.concat(pokemonsDB)
    } catch (error) {
        next(error)
    }
}


module.exports = findAllPokemonsController