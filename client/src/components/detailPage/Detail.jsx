import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { cleanPokemon, detailPokemon } from "../redux/actions/actions"
import PokemonDB from "./pokemonDB/pokemonDB"
import PokemonApi from "./pokemonApi/pokemonApi"
import style from './Detail.module.css'

export default function Detail() {
    const detail = useSelector(state => state.detail)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()
    const { id } = params

    useEffect(() => {
        dispatch(detailPokemon(id))
        return () => dispatch(cleanPokemon('allPokemons'))
    }, [])

    return (
        <div>
            {Object.keys(detail).length > 0
                ?
                <div className={style.contenedor}>
                    {detail.stats
                        ?
                        <PokemonApi />
                        :
                        <PokemonDB />
                    }
                    <button onClick={() => navigate('/home')} className={style.button}>See Pokemons</button>
                </div>
                :
                <div className={style.loading}>
                    <h1 className={style.h1}>Loading...</h1>
                </div>
            }
        </div >
    )
}