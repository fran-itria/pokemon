import { CLEAN_POKEMON, CREATE, DETAIL, FILTERS, FILTER_ORDER, GET_POKEMONS, GET_POKEMONS_DB, GET_TYPES, ONE_POKEMON } from "../actions/actions";
import filterOrder from "./functionsReducer/functionsReducer";

const initialState = {
  types: [],
  pokemons: [],
  pokemonsCopy: [],
  filters: {},
  detail: {},
  create: true,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TYPES:
      return { ...state, types: payload };
    case GET_POKEMONS:
      return { 
        ...state, 
        pokemons: filterOrder( { select: payload.select, filter: payload.filter, order: payload.order }, payload.pokemons ),
        pokemonsCopy: payload.pokemons,
      };
    case GET_POKEMONS_DB:
      return {
        ...state,
        pokemons: filterOrder( { select: payload.select, filter: payload.filter, order: payload.order }, [...state.pokemons, payload.pokemonsDb] ),
        pokemonsCopy: [...state.pokemonsCopy, payload.pokemonsDb],
      };
    case FILTERS:
      return {
        ...state,
        filters: { select: payload.select, filter: payload.filter, order: payload.order },
      };
    case FILTER_ORDER:
      return { ...state, pokemons: filterOrder(payload, state.pokemonsCopy) };
    case ONE_POKEMON:
      return { ...state, pokemons: [payload] };
    case DETAIL:
      return { ...state, detail: payload };
    case CLEAN_POKEMON:
      if (payload == 'allPokemons') {
        return { ...state, detail: {} };
      }
      if (payload == 'cleanPokemons') {
        return { ...state, pokemons: [] };
      }
    case CREATE:
      return { ...state, create: payload };
    default:
      return state;
  }
};

export default reducer;
