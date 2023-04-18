const createPokemonController = require('../controllers/pokemonsControllers/createPokemonController')

const createPokemonHandler = async (req, res) => {
    const { image, hp, attack, deffence, types } = req.body
    const name = req.body.name.toLowerCase()
    let { speed, height, weight } = req.body
    try {
        const pokemonCreate = await createPokemonController(name, image, hp, attack, deffence, speed, height, weight, types)
        res.status(200).json(pokemonCreate)
    } catch (error) {
        if (error.parent) return res.status(400).json({ error: 'Pokemon con ese nombre ya creado' })
        return res.status(400).json({ error: error.message })
    }
}

module.exports = createPokemonHandler