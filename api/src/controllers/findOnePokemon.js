const { findPokemonsApi } = require('./findAllPokemons')

const findOnePokemon = async (pokemonDB, idOrName, caso, res) => {
    try {
        if (!pokemonDB) {
            const pokemon = await findPokemonsApi(idOrName, caso)
            return res.status(200).json(pokemon)
        }
        return res.status(200).json(pokemonDB)
    } catch (error) {
        return res.status(400).json({ error: 'Pokemon no encontrado' })
    }
}

module.exports = findOnePokemon