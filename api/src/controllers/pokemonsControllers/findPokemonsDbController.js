const { Pokemon, Type } = require('../../db')

const findPokemonsDbController = async () => {
        const pokemonsDB = await Pokemon.findAll({
            include: {
                model: Type,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }
        })
        return pokemonsDB
}


module.exports = findPokemonsDbController