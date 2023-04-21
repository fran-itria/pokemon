import style from './AllPokemons.module.css'
import PokemonCard from "../pokemonCard/PokemonCard";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { cleanPokemon } from "../../../redux/actions/actions";

export default function AllPokemons({ twelvePokemons }) {

    const dispatch = useDispatch()

    const allPokemons = () => {
        dispatch(cleanPokemon())
    }
    return (
        <div className={style.pokemons}>
            {Array.isArray(twelvePokemons) && twelvePokemons.length > 1 ? twelvePokemons.map((pokemon) => {
                if (pokemon.sprites) {
                    const { id, name, sprites, types } = pokemon
                    const image = sprites.other.dream_world.front_default
                    const type = types.map(type => type.type.name)
                    return <Link to={`/detail/${id}`} className={style.link} key={'Pokemons con el id:' + id}>
                        <PokemonCard
                            id={id}
                            name={name}
                            image={image}
                            types={type}
                        />
                    </Link>
                }
                else {
                    const { id, name, image, Types } = pokemon
                    const type = Types.map(type => type.name)
                    return <Link to={`/detail/${id}`} className={style.link}>
                        <PokemonCard
                            key={'Pokemon ' + name}
                            id={id}
                            name={name}
                            image={image}
                            types={type}
                        />
                    </Link>
                }
            })
                :
                twelvePokemons.length == 1 ? twelvePokemons.map(pokemon => {
                    if (pokemon.sprites) {
                        const { id, name, sprites, types } = pokemon
                        const image = sprites.other.dream_world.front_default
                        const type = types.map(type => type.type.name)
                        return <div>
                            <Link to={`/detail/${id}`} className={style.link} key={'Pokemons con el id:' + id}>
                                <PokemonCard
                                    id={id}
                                    name={name}
                                    image={image}
                                    types={type}
                                />
                            </Link>
                            <button onClick={() => allPokemons()} className={style.button}> Mostrar todos los pokemons </button>
                        </div>
                    }
                    else {
                        const { id, name, image, Types } = pokemon
                        const type = Types.map(type => type.name)
                        return <div>
                            <Link to={`/detail/${id}`} className={style.link}>
                                <PokemonCard
                                    key={'Pokemon ' + name}
                                    id={id}
                                    name={name}
                                    image={image}
                                    types={type}
                                />
                            </Link>
                            <button onClick={() => allPokemons()} className={style.button}> Mostrar todos los pokemons </button>
                        </div>
                    }
                })
                    :
                    <button onClick={() => allPokemons()} className={style.button}> Mostrar todos los pokemons </button>
            }
        </div>
    )
}