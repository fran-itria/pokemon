const findPokemonsApi = require('../findPokemonsFunctions/findPokemonsApi')

const findAllPokemonsController = async () => {
        let pokemonsApi = []
        for (let i = 1; i < 61; i++) {
            const pokemon = await findPokemonsApi(i)
            pokemonsApi.push(pokemon)
        }
        return pokemonsApi
}


module.exports = findAllPokemonsController