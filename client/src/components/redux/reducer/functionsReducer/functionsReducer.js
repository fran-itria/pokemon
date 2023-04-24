import filterPokemons from "./functionFilter";
import orderPokemons from "./functionOrder";

export default function filterOrder(filtros, ApiDB) {
  const { select, filter, order } = filtros;
  const api = ApiDB.filter((pokemons) => typeof pokemons.id === "number");
  const db = ApiDB.filter((pokemon) => typeof pokemon.id === "string");
  const pokemonsCopy = [...ApiDB]

  if (!select && !filter && !order) return pokemonsCopy;
  if (!select) return pokemonsFiltersOrder(filter, order, pokemonsCopy);
  if (select === "todos") return pokemonsFiltersOrder(filter, order, pokemonsCopy);
  if (select === "api") return pokemonsFiltersOrder(filter, order, api);
  if (select === "creado") return pokemonsFiltersOrder(filter, order, db);
}

function pokemonsFiltersOrder(filter, order, pokemonsAplicate) {
  if (!filter && !order) {
    if(pokemonsAplicate.length != 0) return pokemonsAplicate
    else return {}
  };
  if (filter && !order) return filterPokemons(pokemonsAplicate, filter);
  if (!filter && order) return orderPokemons(pokemonsAplicate, order);
  if (filter && order) {
    const filtrados = filterPokemons(pokemonsAplicate, filter);
    if (Array.isArray(filtrados) && filtrados.length !== 0)
      return orderPokemons(filtrados, order);
    return filtrados;
  }
}
