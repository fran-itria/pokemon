import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanPokemon, createPokemon, getPokemons, getPokemonsDB } from "../redux/actions/actions";
import style from './Home.module.css'
import FiltrosPokemon from "./filtrosPokemon/FiltrosPokemon";
import AllPokemons from "./pokemons/allPokemons/AllPokemons";
import Pagination from "./pagination/Pagination";
import dictionary from "../../dictionary/Dictionary";

export default function Home() {
    const pokemons = useSelector(state => state.pokemons)
    const filtros = useSelector(state => state.filters)
    const create = useSelector(state => state.create)
    const dispatch = useDispatch()
    const [page, setPage] = useState({
        init: 0,
        finish: dictionary.limitPage
    })
    const [twelvePokemons, setTwelvePokemons] = useState([])

    useEffect(() => {
        if(create){
            dispatch(getPokemons(filtros))
            dispatch(createPokemon(false))
        }
        else if( create === dictionary.create){
            dispatch(getPokemonsDB(filtros))
            dispatch(createPokemon(false))
        }
    }, [])

    useEffect(() => {
        if(Array.isArray(pokemons) && pokemons.length != 0){
            if(page.pag != 1){
                setPage({...page, pag: 1, init: 0, finish: dictionary.limitPage})
                setTwelvePokemons(pokemons.slice(page.init, page.finish))
            } else setTwelvePokemons(pokemons.slice(page.init, page.finish))
        }
    }, [pokemons])
    useEffect(() => {
        if (pokemons.lenght != 0 && Array.isArray(pokemons)) {
            setTwelvePokemons(pokemons.slice(page.init, page.finish))
        }
    }, [page])

    const allPokemons = () => {
        dispatch(cleanPokemon(dictionary.allPokemons))
    }


    if (Array.isArray(pokemons) && pokemons.length == 0) {
        return <div className={style.contenedorLoading}>
        <h1 className={style.loading}>Loading...</h1>
    </div>
    }
    return (
        <div className={style.contenedor}>
            {typeof pokemons == 'object' && !Array.isArray(pokemons) ?
                <div>
                    <p className={style.p}>Pokemons of this type not found</p>
                    <button onClick={() => allPokemons()} className={style.button}> See all pokemons </button>
                </div>
                :
                <div className={style.chico}>
                    <p className={style.p2}>
                        By clicking on the card of any pokemon, you will access its details,
                        and you can search through the search engine in the upper right corner for any pokemon,
                        You must search for it by its exact name
                    </p>
                    <FiltrosPokemon />
                    <AllPokemons twelvePokemons={twelvePokemons} allPokemons={allPokemons}/>
                    <Pagination setPage={setPage} pokemons={pokemons}/>
                </div>
            }
        </div>
    )
}