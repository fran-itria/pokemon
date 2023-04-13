const { Pokemon, Type } = require('../db')
const axios = require('axios')

const findAllPokemons = async (req, res) => {
    try {
        let pokemonsApi = []
        const caso = 'all'
        for (let i = 1; i < 61; i++) {
            const pokemon = await findPokemonsApi(i, caso)
            pokemonsApi.push(pokemon)
        }
        const pokemonsDB = await Pokemon.findAll({
            attributes: ['name', 'image'],
            include: {
                model: Type,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }
        })
        const allPokemons = pokemonsApi.concat(pokemonsDB)
        return res.status(200).json(allPokemons)
    } catch (error) {
        res.status(400).json({ error })
    }
}


// Busca pokemones de la API

// ASYNC AWAIT
const findPokemonsApi = async (idOrName, caso) => {
    if(caso == 'all'){
        const response = await axios(`https://pokeapi.co/api/v2/pokemon/${idOrName}`)
        const data = await response.data
        const typesPokemons = await data.types.map(type => type.type.name)
        return {id: data.id, name: data.name, image: data.sprites.front_default, types: typesPokemons}
    } else {
        const response = await axios(`https://pokeapi.co/api/v2/pokemon/${idOrName}`)
        return response.data
    }
}

// PROMISES

// const findPokemonsApi = (idOrName, caso) => {
//     if (caso == 'all') {
//         return axios(`https://pokeapi.co/api/v2/pokemon/${idOrName}`)
//             .then(response => {
//                 const { name, sprites, types } = response.data
//                 const typesPokemon = types.map(type => type.type.name)
//                 return { name, image: sprites.front_default, types: typesPokemon }
//             })
//     }
//     else {
//         return axios(`https://pokeapi.co/api/v2/pokemon/${idOrName}`)
//             .then(response => response.data)
//     }

// }

module.exports = { findAllPokemons, findPokemonsApi }