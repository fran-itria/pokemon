const { Pokemon } = require('../db')

const createPokemon = async (req, res) => {
    const { name, image, life, attack, defence, velocity, height, weight } = req.body
    const newPokemon = await Pokemon.create({
        name,
        image,
        life,
        attack,
        defence,
        velocity,
        height,
        weight
    })
    if(!newPokemon) return req.status(400).json({error: 'Pokemon no creado'})
    return res.status(201).json(newPokemon)
}

module.exports = createPokemon