import style from '../Detail.module.css'
import { useSelector } from "react-redux"

export default function PokemonApi() {
    const detail = useSelector(state => state.detail)

    return (
        <div>
            <h1 className={style.h1}>{detail.name}</h1>
            <div className={style.info}>
                <img src={detail.sprites.other.dream_world.front_default} alt={detail.name} className={style.image} />
                <div className={style.text}>
                    {detail.stats.map(stat => <p className={style.p}>{stat.stat.name}: {stat.base_stat}</p>)}
                    <p className={style.p}>
                        type: {detail.types.map(type => <p>{type.type.name}</p>)}
                    </p>
                </div>
            </div>
        </div>
    )
}