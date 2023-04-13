import { GET_POKEMONS } from "../actions/actions";

const initialState = {
    pokemons: []
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: payload
            }
        default:
            return state
    }

}

export default reducer