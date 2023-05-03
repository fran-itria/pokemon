import axios from 'axios'

export const GET_TYPES = 'GET_TYPES'
export const GET_POKEMONS = 'GET_POKEMONS'
export const FILTERS = 'FILTERS'
export const FILTER_ORDER = 'FILTER_ORDER'
export const ONE_POKEMON = 'ONE_POKEMON'
export const DETAIL = 'DETAIL'
export const CLEAN_POKEMON = 'CLEAN_POKEMON'
export const CREATE = 'CREATE'
export const GET_POKEMONS_DB = 'GET_POKEMONS_DB'

const URL_BASE = 'http://localhost:3001'

export const getTypes = () => {
    return async function (dispatch) {
        const types = await axios(`${URL_BASE}/types`)
        dispatch({ type: GET_TYPES, payload: types.data })
    }
}

export function getPokemons(filtros) {
    return async function (dispatch) {
        const pokemonsApi = await axios(`${URL_BASE}/pokemons/api`)
        const pokemonsDb = await axios(`${URL_BASE}/pokemons/db`)
        const pokemons = pokemonsApi.data.concat(pokemonsDb.data)
        dispatch({ type: GET_POKEMONS, payload: { pokemons, select: filtros.select, filter: filtros.filter, order: filtros.order } })
    }
}

export function getPokemonsDB(filtros){
    return async function (dispatch) {
        const pokemonsDb = await axios(`${URL_BASE}/pokemons/db`)
        dispatch({ type: GET_POKEMONS_DB, payload: { pokemonsDb, select: filtros.select, filter: filtros.filter, order: filtros.order } })
    }
}

export function filters(select, filter, order) {
    return { type: FILTERS, payload: { select, filter, order } }
}

export const filterOrderPokemons = (select, filter, order) => {
    return { type: FILTER_ORDER, payload: { select, filter, order } }
}

export function onSearch(name) {
    return async function (dispatch) {
        axios(`${URL_BASE}/pokemons/name?name=${name}`)
            .then(response => {
                dispatch({ type: ONE_POKEMON, payload: response.data })
            }).catch(error => window.alert(error.response.data.error))
    }
}

export const detailPokemon = (id) => {
    return async function (dispatch) {
        try {
            const detail = await axios(`${URL_BASE}/pokemons/${id}`)
            dispatch({ type: DETAIL, payload: detail.data })
        } catch (error) {
            window.alert(error.response.data.error)
        }
    }
}

export function cleanPokemon(pokemons) {
    return { type: CLEAN_POKEMON, payload: pokemons }
}

export const createPokemon = (boolean) => {
    return{type: CREATE, payload: boolean}
}




