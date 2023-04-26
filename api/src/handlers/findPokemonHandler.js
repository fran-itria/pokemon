const findPokemonByIdController = require("../controllers/pokemonsControllers/findPokemonByIdController");
const findPokemonByNameController = require("../controllers/pokemonsControllers/findPokemonByNameController");

const findPokemonHandler = async (req, res) => {
  try {
    if (Object.keys(req.query).length != 0) {
      const name = req.query.name.toLowerCase();
      const pokemon = await findPokemonByNameController(name);
      res.status(200).json(pokemon);
    } else if (req.params) {
      const { idPokemon } = req.params;
      const pokemon = await findPokemonByIdController(idPokemon);
      res.status(200).json(pokemon);
    }
  } catch (error) {
    if (error.name == 'AxiosError')
      res.status(400).json({ error: "Pokemon not found" });
    else res.status(400).json({ error });
  }
};

module.exports = findPokemonHandler;
