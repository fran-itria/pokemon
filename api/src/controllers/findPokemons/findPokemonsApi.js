const axios = require('axios')

const findPokemonsApi = async (idOrName, caso) => {
    if (caso == 'all') {
        const response = await axios(`https://pokeapi.co/api/v2/pokemon/${idOrName}`)
        const data = await response.data
        const typesPokemons = await data.types.map(type => type.type.name)
        return { id: data.id, name: data.name, image: data.sprites.front_default, types: typesPokemons }
    } else {
        const response = await axios(`https://pokeapi.co/api/v2/pokemon/${idOrName}`)
        return response.data
    }
}


module.exports = findPokemonsApi


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
