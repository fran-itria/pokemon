const findAllPokemonsController = require('../controllers/pokemonsControllers/findAllPokemonsController')

const findAllPokemonsHandler = async (req, res) => {
    try {
        const pokemons = await findAllPokemonsController()
        return res.status(200).json(pokemons)
    } catch (error) {
        res.status(400).json({ error })
    }
}

module.exports = findAllPokemonsHandler