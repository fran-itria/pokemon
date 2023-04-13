import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../redux/actions/actions";
import Pokemon from "../pokemon/Pokemon";

export default function Home() {
    const pokemons = useSelector(state => state.pokemons)
    const dispatch = useDispatch()
    let [page, setPage] = useState(1)
    const [slice, setSlice] = useState({
        init: 0,
        finish: 12
    })
    const [twelvePokemons, setTwelvePokemons] = useState([])

    useEffect(() => {
        dispatch(getPokemons())
    }, [])

    const nextPage = () => {
        if (slice.finish <= 48) {
            setPage(page + 1)
            setSlice({ init: slice.init + 12, finish: slice.finish + 12 })
        }
    }

    useEffect(() => {
        setTwelvePokemons(pokemons.slice(slice.init, slice.finish))
    }, [pokemons])
    useEffect(() => {
        setTwelvePokemons(pokemons.slice(slice.init, slice.finish))
    }, [page])

    useEffect(() => {
        console.log(page)
        console.log(slice)
        console.log(twelvePokemons)
    }, [twelvePokemons, page, slice])

    if (pokemons.length == 0) return <div>LOADING</div>
    return (
        <div>
            <h1>HOME COMPONENT</h1>
            <div>
                {twelvePokemons && twelvePokemons.map((pokemon) => {
                    return <Pokemon
                        key={pokemon.id}
                        id={pokemon.id}
                        name={pokemon.name}
                        image={pokemon.image}
                        types={pokemon.types}
                    />
                })}
            </div>
            <div>
                <p>{page}</p>
                <button onClick={() => nextPage()}> > </button>
            </div>
        </div>
    )
}