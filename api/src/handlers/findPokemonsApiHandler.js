const findPokemonsApiController = require('../controllers/pokemonsControllers/findPokemonsApiController')

const findAllPokemonsHandler = async (req, res) => {
    try {
        const pokemons = await findPokemonsApiController()
        return res.status(200).json(pokemons)
    } catch (error) {
        res.status(400).json({ error })
    }
}

module.exports = findAllPokemonsHandler