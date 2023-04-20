export default function orderPokemons(pokemons, filtros) {
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