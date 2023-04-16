import { CLEAN_POKEMON, DETAIL, FILTERS, FILTER_ORDER, GET_POKEMONS, GET_TYPES, ONE_POKEMON} from "../actions/actions";
import filterOrder from "./functionsReducer";

const initialState = {
    pokemons: [],
    pokemonsApi: [],
    pokemonsDB: [],
    pokemonsCopy: [],
    onePokemon: [],
    types: [],
    detail: {},
    filters: {}
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_POKEMONS:
            const allPokemons = payload.pokemons.pokemonsApi.concat(payload.pokemons.pokemonsDB)
            return {
                ...state,
                pokemons: filterOrder(state, {filter: payload.filter, order: payload.order}, allPokemons),
                pokemonsCopy: allPokemons,
                pokemonsApi: payload.pokemonsApi,
                pokemonsDB: payload.pokemonsDB
            }
        case ONE_POKEMON:
            return {
                ...state,
                onePokemon: [payload]
            }
        case CLEAN_POKEMON:
            return {
                ...state,
                pokemons: state.pokemonsCopy,
                onePokemon: [],
                detail: {}
            }
        case GET_TYPES:
            return {
                ...state,
                types: payload
            }
        case FILTER_ORDER:
            return {
                ...state,
                pokemons: filterOrder(state, payload, null)
            }
        case DETAIL:
            return {
                ...state,
                detail: payload
            }
        case FILTERS:
            return {
                ...state, 
                filters: {filter: payload.filter, order: payload.order}
            }
        default:
            return state
    }

}

export default reducer