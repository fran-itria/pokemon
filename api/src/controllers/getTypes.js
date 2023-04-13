const { Type } = require('../db')
const axios = require('axios')

const getTypes = async (req, res) => {
    const typesDB = await Type.findAll()
    if (typesDB.length === 0) {
        const response = await axios('https://pokeapi.co/api/v2/type')
        const typesApi = await response.data.results
        const typesNames = await typesApi.map(type => { return { name: type.name } })
        const allTypes = await Type.bulkCreate(typesNames)
        res.status(200).json(allTypes)
    } else {
        res.status(200).json({ error: 'Tabla de types ya creada' })
    }
}

module.exports = getTypes

// PROMISES

// axios('https://pokeapi.co/api/v2/type')
//     .then(response => {
//         const typesApi = response.data.results
//         const typesNames = typesApi.map(type => { return { name: type.name } })
//         return typesNames
//     })
//     .then(types => Type.bulkCreate(types))
//     .then(allTypes => res.status(200).json(allTypes))