const { Pokemon } = require('../db')
const axios = require('axios')

const findAllPokemons = async (req, res) => {
    await axios('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=12')
        .then(response => {
            const allPokemons = response.data
            res.status(200).json(allPokemons)
        })
}

module.exports = findAllPokemons