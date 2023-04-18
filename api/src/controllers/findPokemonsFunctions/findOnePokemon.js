const findPokemonsApi = require('./findPokemonsApi')

const findOnePokemon = async (pokemonDB, idOrName) => {
    try {
        if (!pokemonDB) {
            const pokemon = await findPokemonsApi(idOrName)
            return pokemon
        }
        return pokemonDB
    } catch (error) {
        next(error)
    }
}

module.exports = findOnePokemon