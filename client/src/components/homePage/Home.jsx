import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanPokemon, filter, getPokemons, order } from "../redux/actions/actions";
import Pokemon from "../pokemon/Pokemon";
import style from './Home.module.css'

export default function Home() {
    const pokemons = useSelector(state => state.pokemons)
    const pokemon = useSelector(state => state.onePokemon)
    const types = useSelector(state => state.types)
    const dispatch = useDispatch()
    let [page, setPage] = useState({
        pag: 1,
        init: 0,
        finish: 12
    })
    const [twelvePokemons, setTwelvePokemons] = useState([])

    useEffect(() => {
        dispatch(getPokemons())
    }, [])
    useEffect(() => {
        console.log(pokemons)
        if (pokemons.lenght != 0) {
            setTwelvePokemons(pokemons.slice(page.init, page.finish))
        } else setTwelvePokemons(pokemons)
    }, [pokemons])
    useEffect(() => {
        setTwelvePokemons(pokemons.slice(page.init, page.finish))
    }, [page])


    const allPokemons = () => {
        dispatch(cleanPokemon())
    }

    const pagination = (event) => {
        switch (event.target.name) {
            case 'next':
                if (page.pag < pokemons.length / 12) {
                    setPage({ pag: page.pag + 1, init: page.init + 4, finish: page.finish + 4 })
                }
                break;
            case 'prev':
                if (page.pag > 1) {
                    setPage({ pag: page.pag - 1, init: page.init - 4, finish: page.finish - 4 })
                }
            default:
                break;
        }
    }


    // if (pokemons.length == 0) return <div>LOADING</div>
    return (
        <div className={style.contenedor}>
            {pokemon.length === 0 ?
                <div className={style.chico}>
                    <div className={style.filtros}>
                        <p className={style.p}>Select type: </p>
                        {types.length > 0 ?
                            <select onChange={(event) => dispatch(filter(event.target.value))} className={style.select}>
                                <option value='All'>All</option>
                                {types.map(type => {
                                    return <option value={type.name}>{type.name}</option>
                                })}
                            </select>
                            :
                            <></>
                        }
                        <p className={style.p}>Select order: </p>
                        <select onChange={(event) => dispatch(order(event.target.value))} className={style.select}>
                            <option ></option>
                            <option value='A-Z'>A-Z</option>
                            <option value='Z-A'>Z-A</option>
                        </select>
                    </div>
                    <div className={style.pokemons}>
                        {twelvePokemons.length != 0 ? twelvePokemons.map((pokemon) => {
                            const { id, name, sprites, types } = pokemon
                            const image = sprites.front_default
                            const type = types.map(type => type.type.name)
                            return <Pokemon
                                key={'Pokemons con el id:' + id}
                                id={id}
                                name={name}
                                image={image}
                                types={type}
                            />
                        })
                            :
                            <button onClick={() => allPokemons()} className={style.button}> Mostrar todos los pokemons </button>
                        }
                    </div>
                    <div className={style.pagination}>
                        <button name="prev" onClick={(event) => pagination(event)} className={style.button}> Prev </button>
                        <p>{page.pag}</p>
                        <button name='next' onClick={(event) => pagination(event)} className={style.button}> Next </button>
                    </div>
                </div>
                :
                <div className={style.contenedor}>
                    <div className={style.pokemons}>
                        {pokemon.map((pokemon) => {
                            const { id, name, sprites, types } = pokemon
                            const image = sprites.front_default
                            const type = types.map(type => type.type.name)
                            return <Pokemon
                                key={'Pokemons con el id:' + id}
                                id={id}
                                name={name}
                                image={image}
                                types={type}
                            />
                        })}
                    </div>
                    <button onClick={() => allPokemons()} className={style.button}> Mostrar todos los pokemons </button>
                </div>
            }
        </div>
    )
}