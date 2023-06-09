const { Type } = require('../db')
const axios = require('axios')

const getTypesController = async () => {
        const typesDB = await Type.findAll()
        if (typesDB.length === 0) {
            const response = await axios('https://pokeapi.co/api/v2/type')
            const typesApi = await response.data.results
            const typesNames = await typesApi.map(type => { return { name: type.name } })
            const allTypes = await Type.bulkCreate(typesNames)
            return allTypes
        } else return typesDB
}

module.exports = getTypesController
