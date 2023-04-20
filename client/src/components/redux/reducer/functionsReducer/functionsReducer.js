import filterPokemons from './functionFilter';
import orderPokemons from "./functionOrder";


export default function filterOrder(state, filtros, ApiDB, allPokemons) {
    const { select, filter, order } = filtros
    const pokemons = [...state.pokemons]
    const api = ApiDB.pokemonsApi
    const creados = ApiDB.pokemonsDB

    if (!select && !filter && !order) return allPokemons
    if (!select) return pokemonsFiltersOrder(filter, order, pokemons)
    if (select == 'todos') return pokemonsFiltersOrder(filter, order, allPokemons)
    if (select == 'api') return pokemonsFiltersOrder(filter, order, api)
    if (select == 'creado') return pokemonsFiltersOrder(filter, order, creados)
}

function pokemonsFiltersOrder(filter, order, pokemonsAplicate) {
    if (!filter && !order) return pokemonsAplicate
    if (filter && !order) return filterPokemons(pokemonsAplicate, filter)
    if (!filter && order) return orderPokemons(pokemonsAplicate, order)
    if (filter && order) {
        const filtrados = filterPokemons(pokemonsAplicate, filter)
        if (Array.isArray(filtrados) && filtrados.length != 0) return orderPokemons(filtrados, order)
        return filtrados
    }
}

