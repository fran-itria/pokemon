import React from "react";
import style from './Pokemon.module.css'

class Pokemon extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={style.card}>
                <h1 className={style.h1}>{this.props.name}</h1>
                <img src={this.props.image} alt='sad' className={style.image} />
                <p className={style.p}>Types:</p>
                <div className={style.types}>
                    {this.props.types.map(type => {
                        return <p className={style.type}>{type}</p>
                    })}
                </div>
            </div>
        )
    }
}

export default Pokemon