import { API_DB, CLEAN_POKEMON, DETAIL, FILTERS, FILTER_ORDER, GET_POKEMONS, GET_TYPES, ONE_POKEMON } from "../actions/actions";
import filterOrder from "./functionsReducer/functionsReducer";

const initialState = {
    pokemons: [],
    pokemonsApi: [],
    pokemonsDB: [],
    pokemonsCopy: [],
    types: [],
    detail: {},
    filters: {}
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_TYPES:
            return {
                ...state,
                types: payload
            }
        case GET_POKEMONS:
            const allPokemons = payload.pokemons.pokemonsApi.concat(payload.pokemons.pokemonsDB)
            return {
                ...state,
                pokemons: filterOrder(state, { select: payload.select, filter: payload.filter, order: payload.order }, payload.pokemons, allPokemons),
                pokemonsCopy: allPokemons,
                pokemonsApi: payload.pokemons.pokemonsApi,
                pokemonsDB: payload.pokemons.pokemonsDB
            }
        case ONE_POKEMON:
            return {
                ...state,
                pokemons: [payload]
            }
        case CLEAN_POKEMON:
            return {
                ...state,
                pokemons: state.pokemonsCopy,
                detail: {}
            }
        case FILTERS:
            return {
                ...state,
                filters: { select: payload.select, filter: payload.filter, order: payload.order }
            }
        case FILTER_ORDER:
            return {
                ...state,
                pokemons: filterOrder(state, payload, { pokemonsApi: state.pokemonsApi, pokemonsDB: state.pokemonsDB }, state.pokemonsCopy)
            }
        case DETAIL:
            return {
                ...state,
                detail: payload
            }
        default:
            return state
    }

}

export default reducer