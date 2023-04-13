const { Pokemon } = require('../db')

const createPokemon = async (req, res) => {
    const { name, image, hp, attack, deffence, velocity, height, weight, types } = req.body
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
        res.status(400).json({ error: 'Pokemon con ese nombre ya creado' })
    }
}

module.exports = createPokemon