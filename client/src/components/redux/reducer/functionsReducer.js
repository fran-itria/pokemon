
export default function filterOrder(state, filtros, pokemonsApiAndDB, allPokemons) {
    const { select, filter, order } = filtros
    const pokemons = [...state.pokemonsCopy]

    if(!filter && !order) return allPokemons

    if (filter && !order) {
        return filterPokemons(state, pokemons, filter)
    }
    if (!filter && order) {
        return orderPokemons(pokemons, order)
    }
    if (filter && order) {
        const filtrados = filterPokemons(state, pokemons, filter)
        if (filtrados.length != 0) return orderPokemons(filtrados, order)
        else return filtrados
    }
}

const filterPokemons = (state, pokemons, filtros) => {
    if (filtros == 'All') return [...state.pokemonsCopy]
    const filtrados = pokemons.filter(pokemon => pokemonApiOrDb(pokemon, filtros))
    if (filtrados.length > 0) return filtrados
    return {}
}

const orderPokemons = (pokemons, filtros) => {
    if (filtros === 'A-Z') {
        return pokemons.sort((a, b) => {
            if (a.name > b.name) {
                return 1;
            } else if (a.name < b.name) {
                return -1;
            } else {
                return 0;
            }
        });
    }
    if (filtros === 'Z-A') {
        return pokemons.sort((a, b) => {
            if (a.name > b.name) {
                return -1;
            } else if (a.name < b.name) {
                return 1;
            } else {
                return 0;
            }
        });
    }
    if (filtros == 'ascendente') return extraerAttack(pokemons).sort((a, b) => a.attack - b.attack)
    if (filtros == 'descendente') return extraerAttack(pokemons).sort((a, b) => b.attack - a.attack)
}



function extraerAttack(pokemons) {
    let attack = []
    pokemons.forEach(pokemon => {
        if (pokemon.stats) {
            pokemon.stats.forEach(stat => {
                if (stat.stat.name == 'attack') {
                    attack.push({ ...pokemon, attack: stat.base_stat })
                }
            })
        }
        else attack.push(pokemon)
    })
    return attack
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

