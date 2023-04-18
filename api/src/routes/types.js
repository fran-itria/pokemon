const { Router } = require('express')
const types = Router()
const getTypesHandler = require('../handlers/getTypesHandler')

types.get('/', getTypesHandler)

module.exports = types