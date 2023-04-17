const findPokemonsApi = require('./findPokemonsApi')

const findOnePokemon = async (pokemonDB, idOrName, res) => {
    try {
        if (!pokemonDB) {
            const pokemon = await findPokemonsApi(idOrName)
            return res.status(200).json(pokemon)
        }
        return res.status(200).json(pokemonDB)
    } catch (error) {
        return res.status(400).json({ error: 'Pokemon no encontrado' })
    }
}

module.exports = findOnePokemon