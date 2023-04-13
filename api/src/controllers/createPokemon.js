const { Pokemon } = require('../db')

const createPokemon = async (req, res) => {
    const { image, hp, attack, deffence, velocity, height, weight, types } = req.body
    const name = req.body.name.toLowerCase()
    try {
        const newPokemon = await Pokemon.create({
            name,
            image,
            hp,
            attack,
            deffence,
            velocity,
            height,
            weight
        })
        newPokemon.addTypes(types)
        return res.status(201).json(newPokemon)
    } catch (error) {
        res.status(400).json({ error })
    }
}

module.exports = createPokemon