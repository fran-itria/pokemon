const axios = require('axios')

const findPokemonsApi = async (idOrName) => {
        const response = await axios(`https://pokeapi.co/api/v2/pokemon/${idOrName}`)
        return response.data
}


module.exports = findPokemonsApi

// PROMISES
// const findPokemonsApi = (idOrName, caso) => {
//         return axios(`https://pokeapi.co/api/v2/pokemon/${idOrName}`)
//                 .then(response => response.data)
// }
