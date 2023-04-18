const getTypesController = require('../controllers/getTypesController')

const getTypesHandler = async (req, res) => {
    try {
        const types = await getTypesController()
        res.status(200).json(types)
    } catch (error) {
        res.status(500).json({ error })
    }
}

module.exports = getTypesHandler
