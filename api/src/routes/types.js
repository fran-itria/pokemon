const { Router } = require('express')
const types = Router()
const getTypes = require('../controllers/getTypes')

types.get('/', getTypes)

module.exports = types