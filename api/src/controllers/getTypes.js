const { Type } = require('../db')
const axios = require('axios')

const getTypes = async (req, res) => {
    const typesDB = await Type.findAll()
    if (typesDB.length === 0) {
        console.log('No hay types en la base de datos')
        const typesApi = await axios('https://pokeapi.co/api/v2/type')
            .then(response => {
                const types = response.data.results
                const typesNames = types.map(type => { return { name: type.name } })
                return typesNames
            })
        const allTypes = await Type.bulkCreate(typesApi)
        res.status(200).json(allTypes)
    }
}

module.exports = getTypes