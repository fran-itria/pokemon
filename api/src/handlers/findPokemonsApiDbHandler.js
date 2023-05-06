const findPokemonsApiController = require("../controllers/pokemonsControllers/findPokemonsApiController");
const findPokemonsDbController = require("../controllers/pokemonsControllers/findPokemonsDbController");

const findPokemonsApiDbHandler = async (req, res) => {
  try {
    const api = await findPokemonsApiController();
    const db = await findPokemonsDbController();
    const pokemons = api.concat(db);
    res.status(200).json(pokemons);
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports = findPokemonsApiDbHandler
