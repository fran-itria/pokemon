import React from "react";
import style from "../../Home.module.css";
import PokemonCard from "../pokemonCard/PokemonCard";
import { Link } from "react-router-dom";
import { connect, useDispatch } from 'react-redux';
import { cleanPokemon } from "../../../redux/actions/actions";


// class OnePokemon extends React.Component {
//     constructor(props){
//         super(props)
//     }

//     allPokemons = () => {
//         this.props.cleanPokemon()
//     }

//     render() {
//         return <div className={style.contenedor}>
//             <div className={style.pokemons}>
//                 {this.props.pokemon.map((pokemon) => {
//                     if (pokemon.sprites) {
//                         const { id, name, sprites, types } = pokemon
//                         const image = sprites.other.dream_world.front_default
//                         const type = types.map(type => type.type.name)
//                         return <Link to={`/detail/${id}`} className={style.link} key={'Pokemons con el id:' + id}>
//                             <PokemonCard
//                                 id={id}
//                                 name={name}
//                                 image={image}
//                                 types={type}
//                             />
//                         </Link>
//                     }
//                     else {
//                         const { id, name, image, Types } = pokemon
//                         const type = Types.map(type => type.name)
//                         return <Link to={`/detail/${id}`} className={style.link}>
//                             <PokemonCard
//                                 key={'Pokemon ' + name}
//                                 id={id}
//                                 name={name}
//                                 image={image}
//                                 types={type}
//                             />
//                         </Link>
//                     }
//                 })}
//             </div>
//             <button onClick={() => this.props.allPokemons()} className={style.button}> Mostrar todos los pokemons </button>
//         </div>
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         cleanPokemon: () => dispatch(cleanPokemon())
//     }
// }

// export default connect(null, mapDispatchToProps)(OnePokemon)

export default function OnePokemon({ pokemon }) {
    const dispatch = useDispatch()

    const allPokemons = () => {
        dispatch(cleanPokemon())
    }
    return (
        <div className={style.contenedor}>
            <div className={style.pokemons}>
                {pokemon.map((pokemon) => {
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
                })}
            </div>
            <button onClick={() => allPokemons()} className={style.button}> Mostrar todos los pokemons </button>
        </div>
    )
}