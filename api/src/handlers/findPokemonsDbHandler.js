const findPokemonsDbController = require('../controllers/pokemonsControllers/findPokemonsDbController')

const findPokemonsDbHandler = async (req, res) => {
    try {
        const pokemons = await findPokemonsDbController()
        return res.status(200).json(pokemons)
    } catch (error) {
        res.status(400).json({ error })
    }
}

module.exports = findPokemonsDbHandler