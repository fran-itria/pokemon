import { CLEAN_POKEMON, DETAIL, FILTERS, FILTER_ORDER, GET_POKEMONS, GET_TYPES, ONE_POKEMON } from "../actions/actions";
import filterOrder from "./functionsReducer/functionsReducer";

const initialState = {
    types: [],
    pokemons: [],
    pokemonsCopy: [],
    filters: {},
    detail: {}
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_TYPES:
            return {
                ...state,
                types: payload
            }
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: filterOrder({ select: payload.select, filter: payload.filter, order: payload.order }, payload.pokemons),
                pokemonsCopy: payload.pokemons,
            }
        case FILTERS:
            return {
            ...state,
            filters: { select: payload.select, filter: payload.filter, order: payload.order }
            }
        case FILTER_ORDER:
        return {
            ...state,
            pokemons: filterOrder(payload, state.pokemonsCopy)
            }
        case ONE_POKEMON:
            return {
                ...state,
                pokemons: [payload]
            }
        case DETAIL:
            return {
                ...state,
                detail: payload
            }
        case CLEAN_POKEMON:
            return {
                ...state,
                pokemons: state.pokemonsCopy,
                detail: {}
            }
        default:
            return state
    }

}

export default reducer