import { connect, useDispatch } from 'react-redux'
import style from './Search.module.css'
import React, { useState } from 'react'
import { onSearch } from '../../redux/actions/actions'


class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = { text: '' }
    }

    onChange = (event) => {
        this.setState({ text: event.target.value })
    }

    render() {
        const { text } = this.state
        const { onSearch } = this.props
        return (
            <div className={style.contenedor}>
                <input onChange={(event) => this.onChange(event)}></input>
                <button onClick={() => onSearch(text)}>buscar</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return { onSearch: (text) => dispatch(onSearch(text)) }
}

export default connect(null, mapDispatchToProps)(Search)


// export default function () {
//     const [text, setText] = useState('')
//     const dispatch = useDispatch()

//     const onChange = (event) => {
//         setText(event.target.value)
//     }

//     return (
//         <div className={style.contenedor}>
//             <input onChange={(event) => onChange(event)}></input>
//             <button onClick={() => dispatch(onSearch(text))}>buscar</button>
//         </div>
//     )
// }