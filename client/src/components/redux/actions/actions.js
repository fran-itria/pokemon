import axios from 'axios'

export const GET_POKEMONS = 'GET_POKEMONS'
export const ONE_POKEMON = 'ONE_POKEMON'
export const CLEAN_POKEMON = 'CLEAN_POKEMON'
export const GET_TYPES = 'GET_TYPES'
export const FILTER = 'FILTER'
export const ORDER = 'ORDER'
export const DETAIL = 'DETAIL'
export const CLEAN_DETAIL = 'CLEAN_DETAIL'

const URL_BASE = 'http://localhost:3001'

export function getPokemons() {
    return async function (dispatch) {
        const pokemons = await axios(`${URL_BASE}/pokemons`)
        dispatch({ type: GET_POKEMONS, payload: pokemons.data })
    }
}

export function onSearch(name) {
    return async function (dispatch) {
        axios(`${URL_BASE}/pokemons/name?name=${name}`)
            .then(response => {
                dispatch({ type: ONE_POKEMON, payload: response.data })
            }).catch(error => window.alert(error.response.data.error))
    }
}

export function cleanPokemon() {
    return { type: CLEAN_POKEMON }
}

export const getTypes = () => {
    return async function (dispatch) {
        const types = await axios(`${URL_BASE}/types`)
        dispatch({ type: GET_TYPES, payload: types.data })
    }
}

export function filter(value) {
    return { type: FILTER, payload: value }
}

export function order(value) {
    console.log(value)
    return { type: ORDER, payload: value }
}

export const detailPokemon = (id) => {
    return async function (dispatch) {
        const detail = await axios(`${URL_BASE}/pokemons/${id}`)
        dispatch({ type: DETAIL, payload: detail.data })
    }
}

// export function detail(id){}