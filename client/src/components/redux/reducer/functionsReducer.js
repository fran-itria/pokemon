export default function filter(state, payload) {
    if (payload == 'All') return state.pokemonsCopy
    const filtrados = state.pokemonsCopy.filter(pokemon => {
        const types = pokemon.types.map(type => type.type.name)
        for (let i = 0; i < types.length; i++) {
            if (types[i] == payload) return pokemon
        }
    })
    if (filtrados.length > 0) return filtrados
    return []
}