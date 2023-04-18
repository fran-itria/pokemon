const { Pokemon } = require('../../db')

const createPokemon = async (name, image, hp, attack, deffence, speed, height, weight, types) => {
    if (speed == '') speed = null
    if (height == '') height = null
    if (weight == '') weight = null
    if (name.lenght == 0 || hp == 0 || attack == 0 || deffence == 0 || types.length == 0) throw new Error('El nombre, la vida, el ataque, la defensa y el tipo son campos obligatorios')
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