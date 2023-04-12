const { Pokemon } = require('../db')

const createPokemon = async (req, res) => {
    const { name, image, hp, attack, deffence, velocity, height, weight, types } = req.body
    // const [newPokemon, created] = await Pokemon.findOrCreate({
    const newPokemon = await Pokemon.create({
        // where: {
        //     name
        // },
        // default: {
            name,
            image,
            hp,
            attack,
            deffence,
            velocity,
            height,
            weight
        // }
    })
    newPokemon.addTypes(types)
    // if (created) return req.status(400).json({ mensaje: 'Pokemon creado ahora', newPokemon})
    // if(!created) return req.status(400).json({ mensaje: 'Pokemon ya creado'})
    if (!newPokemon) return req.status(400).json({ error: 'Pokemon no creado' })
    return res.status(201).json(newPokemon)
}

module.exports = createPokemon