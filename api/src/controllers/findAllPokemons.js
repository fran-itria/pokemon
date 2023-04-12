const { Pokemon } = require('../db')
const axios = require('axios')

const findAllPokemons = async (req, res) => {
    const { name } = req.query
    if (!name) {
        notQuery(res)
    }
    else {
        query(res, name)
    }
}


// No recibe nombre por QUERY
const notQuery = async (res) => {
    try {
        let pokemonsApi = []
        for (let i = 1; i < 41; i++) {
            const pokemon = await findPokemonsApi(i)
            pokemonsApi.push(pokemon)
        }
        const pokemonsDB = await Pokemon.findAll({
            attributes: ['name', 'image']
        })
        const allPokemons = pokemonsApi.concat(pokemonsDB)
        return res.status(200).json(allPokemons)
    } catch (error) {
        res.status(400).json({ error: error.response.data })
    }
}

// Recibe nombre por QUERY
const query = async (res, name) => {
    try {
        const pokemonDB = await Pokemon.findOne({
            where: { name },
            attributes: ['name', 'image']
        })
        findPokemonApiByIdPokemon(pokemonDB, name, res)
    } catch (error) {
        return res.status(400).json({ error: `Pokemon ${error.response.data.toLowerCase()}` })
    }
}

// Busca pokemones de la API
const findPokemonsApi = async (idOrName) => {
    const pokemon = await axios(`https://pokeapi.co/api/v2/pokemon/${idOrName}`)
        .then(response => {
            const { name, sprites, types } = response.data
            const typesPokemon = types.map(type => type.type.name)
            return { name, image: sprites.front_default, types: typesPokemon }
        })
    return pokemon
}

//Busca pokemones de la API por su id o nombre
const findPokemonApiByIdPokemon = async (pokemonDB, idOrName, res) => {
    if (!pokemonDB) {
        const pokemon = await findPokemonsApi(idOrName)
        return res.status(200).json(pokemon)
    }
    return res.status(200).json(pokemonDB)
}

module.exports = { findAllPokemons, findPokemonApiByIdPokemon }