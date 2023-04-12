const { findPokemonsApi } = require('./findAllPokemons')

const findOnePokemon = async (pokemonDB, idOrName, caso, res) => {
    if (!pokemonDB) {
        const pokemon = await findPokemonsApi(idOrName, caso)
        return res.status(200).json(pokemon)
    }
    return res.status(200).json(pokemonDB)
}

module.exports = findOnePokemon