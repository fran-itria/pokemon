import { useEffect } from 'react'
import style from '../Detail.module.css'
import { useSelector } from "react-redux"

export default function PokemonDB() {
    const detail = useSelector(state => state.detail)
    useEffect(() => console.log(detail), [])

    return (
        <div>
            <h1 className={style.h1}>{detail.name}</h1>
            <div className={style.info}>
                <img src={detail.image} alt={detail.name} className={style.image} />
                <div className={style.text}>
                    <p className={style.p}>Hp: {detail.hp}</p>
                    <p className={style.p}>Attack: {detail.attack}</p>
                    <p className={style.p}>Deffence: {detail.deffence}</p>
                    {detail.speed ? <p className={style.p}>Speed: {detail.speed}</p> : <></>}
                    {detail.height ? <p className={style.p}>height: {detail.height}</p> : <></>}
                    {detail.weight ? <p className={style.p}>weight: {detail.weight}</p> : <></>}
                    <p className={style.p}>
                        Type: {detail.Types.map(type => <p>{type.name}</p>)}
                    </p>
                </div>
            </div>
        </div>
    )
}