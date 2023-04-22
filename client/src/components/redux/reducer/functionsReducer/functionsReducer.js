import filterPokemons from "./functionFilter";
import orderPokemons from "./functionOrder";

export default function filterOrder(filtros, ApiDB) {
  const { select, filter, order } = filtros;
  const api = ApiDB.filter((pokemons) => typeof pokemons.id == "number");
  const db = ApiDB.filter((pokemon) => typeof pokemon.id == "string");

  if (!select && !filter && !order) return ApiDB;
  if (!select) return pokemonsFiltersOrder(filter, order, ApiDB);
  if (select == "todos") return pokemonsFiltersOrder(filter, order, ApiDB);
  if (select == "api") return pokemonsFiltersOrder(filter, order, api);
  if (select == "creado") return pokemonsFiltersOrder(filter, order, db);
}

function pokemonsFiltersOrder(filter, order, pokemonsAplicate) {
  if (!filter && !order) return pokemonsAplicate;
  if (filter && !order) return filterPokemons(pokemonsAplicate, filter);
  if (!filter && order) return orderPokemons(pokemonsAplicate, order);
  if (filter && order) {
    const filtrados = filterPokemons(pokemonsAplicate, filter);
    if (Array.isArray(filtrados) && filtrados.length != 0)
      return orderPokemons(filtrados, order);
    return filtrados;
  }
}
