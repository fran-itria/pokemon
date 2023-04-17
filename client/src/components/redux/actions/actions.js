import axios from 'axios'

export const GET_POKEMONS = 'GET_POKEMONS'
export const ONE_POKEMON = 'ONE_POKEMON'
export const CLEAN_POKEMON = 'CLEAN_POKEMON'
export const GET_TYPES = 'GET_TYPES'
export const FILTER_ORDER = 'FILTER_ORDER'
export const DETAIL = 'DETAIL'
export const CLEAN_DETAIL = 'CLEAN_DETAIL'
export const FILTERS = 'FILTERS'
export const API_DB = 'API_DB'

const URL_BASE = 'http://localhost:3001'

export function getPokemons(filtros) {
    return async function (dispatch) {
        const pokemons = await axios(`${URL_BASE}/pokemons`)
        dispatch({ type: GET_POKEMONS, payload: { pokemons: pokemons.data, select:filtros.select, filter: filtros.filter, order: filtros.order } })
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

export const filterOrderPokemons = (select, filter, order) => {
    return { type: FILTER_ORDER, payload: { select, filter, order } }
}

export const detailPokemon = (id) => {
    return async function (dispatch) {
        const detail = await axios(`${URL_BASE}/pokemons/${id}`)
        dispatch({ type: DETAIL, payload: detail.data })
    }
}

export function filters(select, filter, order) {
    return { type: FILTERS, payload: { select, filter, order } }
}

export const apiOrDb = (value) => {
    return { type: API_DB, payload: value }
}