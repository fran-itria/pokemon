import axios from 'axios'

export const GET_POKEMONS = 'GET_POKEMONS'


const URL_BASE = 'http://localhost:3001'

export function getPokemons() {
    return async function (dispatch) {
        const pokemons = await axios(`${URL_BASE}/pokemons`)
        dispatch({ type: GET_POKEMONS, payload: pokemons.data })
    }
}