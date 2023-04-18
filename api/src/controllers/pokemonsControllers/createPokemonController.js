const { Pokemon } = require('../../db')

const createPokemon = async (name, image, hp, attack, deffence, speed, height, weight, types) => {
    if (hp == 0 || attack == 0 || deffence == 0) throw new Error('La vida, el ataque y la defensa no pueden ser 0')
    const newPokemon = await Pokemon.create({
        name,
        image,
        hp,
        attack,
        deffence,
        speed,
        height,
        weight
    })
    newPokemon.addTypes(types)
    return newPokemon
}

module.exports = createPokemon