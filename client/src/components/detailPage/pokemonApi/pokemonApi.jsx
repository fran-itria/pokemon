import React from 'react'
import style from '../Detail.module.css'
import { connect } from "react-redux"

class PokemonApi extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        const { detail } = this.props
        return (
            <div>
                <h1 className={style.h1}>{detail.name}</h1>
                <div className={style.info}>
                    <img src={detail.sprites.other.dream_world.front_default} alt={detail.name} className={style.image} />
                    <div className={style.text}>
                        {detail.stats.map(stat => <p className={style.p}>{stat.stat.name}: {stat.base_stat}</p>)}
                        <p className={style.type}>
                            Type: {detail.types.map(type => <p>{type.type.name}</p>)}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        detail: state.detail
    }
}

export default connect(mapStateToProps, null)(PokemonApi)