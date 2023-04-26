const findPokemonsApi = require('./findPokemonsApi')

const findOnePokemon = async (pokemonDB, idOrName) => {
        if (!pokemonDB) {
            const pokemon = await findPokemonsApi(idOrName)
            return pokemon
        }
        return pokemonDB
}

module.exports = findOnePokemon