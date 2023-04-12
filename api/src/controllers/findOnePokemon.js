const { findPokemonsApi } = require('./findAllPokemons')

const findOnePokemon = async (pokemonDB, idOrName, res) => {
    if (!pokemonDB) {
        const pokemon = await findPokemonsApi(idOrName)
        return res.status(200).json(pokemon)
    }
    return res.status(200).json(pokemonDB)
}

module.exports = findOnePokemon