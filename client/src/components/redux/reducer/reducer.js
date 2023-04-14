import { CLEAN_POKEMON, DETAIL, FILTER, GET_POKEMONS, GET_TYPES, ONE_POKEMON, ORDER } from "../actions/actions";
import filter from "./functionsReducer";

const initialState = {
    pokemons: [],
    pokemonsCopy: [],
    onePokemon: [],
    types: [],
    detail: {}
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: payload,
                pokemonsCopy: payload
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
        case FILTER:
            return {
                ...state,
                pokemons: filter(state, payload)
            }
        case ORDER:
            const pokemons = [...state.pokemons]
            console.log('pokemons')
            console.log(pokemons)
            if (payload == 'A-Z') {
                return {
                    ...state,
                    pokemons: pokemons.sort()
                }
            }
            if (payload == 'Z-A') {
                return {
                    ...state,
                    pokemons: pokemons.sort()
                }
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