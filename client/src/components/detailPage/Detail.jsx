import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { cleanPokemon, detailPokemon } from "../redux/actions/actions"
import style from './Detail.module.css'

export default function Detail() {
    const detail = useSelector(state => state.detail)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()
    const { id } = params

    useEffect(() => {
        dispatch(detailPokemon(id))
        return () => dispatch(cleanPokemon())
    }, [])
    return (
        <div>
            {Object.keys(detail).length > 0 ?
                <div className={style.contenedor}>
                    <h1 className={style.h1}>{detail.name}</h1>
                    <div className={style.info}>
                        <img src={detail.sprites.other.dream_world.front_default} alt={detail.name} className={style.image} />
                        <div className={style.text}>
                            {detail.stats.map(stat => <p className={style.p}>{stat.stat.name}: {stat.base_stat}</p>)}
                            <p className={style.p}>
                                type: {detail.types.map(type => type.type.name)}
                            </p>
                            <p className={style.p}>height: {detail.height}</p>
                            <p className={style.p}>weight: {detail.weight}</p>
                        </div>
                    </div>
                    <button onClick={() => navigate('/home')}>Volver a ver pokemons</button>
                </div>
                :
                <div className={style.loading}>
                    <h1 className={style.h1}>Cargando detalle</h1>
                </div>
            }
        </div>
    )
}