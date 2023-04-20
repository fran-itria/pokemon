export default function filterPokemons(pokemons, filtros) {
    if (filtros == 'All') return pokemons
    const filtrados = pokemons.filter(pokemon => pokemonApiOrDb(pokemon, filtros))
    if (filtrados.length > 0) return filtrados
    return {}
}

function pokemonApiOrDb(pokemon, filtros) {
    if (pokemon.types) {
        const types = pokemon.types.map(type => type.type.name)
        for (let i = 0; i < types.length; i++) {
            if (types[i] == filtros) return pokemon
        }
    } else if (pokemon.Types) {
        const types = pokemon.Types.map(type => type.name)
        for (let i = 0; i < types.length; i++) {
            if (types[i] == filtros) return pokemon
        }
    }
}