import { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import style from './Create.module.css'
import axios from 'axios'

export default function Form() {
    const [campos, setCampos] = useState({
        name: '',
        image: '',
        hp: '',
        attack: '',
        deffence: '',
        speed: '',
        height: '',
        weight: '',
        types: []
    })
    const [errors, setErrors] = useState({})
    const types = useSelector(state => state.types)

    const onChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setCampos({ ...campos, [name]: value })
        validate(errors, setErrors, name, value)
    }
    const validate = (errors, setErrors, name, value) => {
        if (name == 'name') {
            if (value.length != 0) {
                if (value[0] != value[0].toUpperCase()) {
                    setErrors({ ...errors, [name]: 'El nombre debe iniciar con letra mayuscula' })
                } else if (value.length <= 5 || value.length > 10) setErrors({ ...errors, [name]: 'El nombre debe tener entre 5 y 10 caracteres' })
                else delete errors.name
            } else setErrors({ ...errors, [name]: 'El campo nombre debe ser completado obligatoriamente' })
        }
        if (name == 'image') {
            const imageURL = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|png|gif)$/
            if (!imageURL.test(value)) {
                setErrors({ ...errors, [name]: 'El campo de imagen debe ser una url valida para imagenes, debe terminar con el formato de la imagen (jpg,jpeg,png,gif)' })
            } else delete errors.image
        }
        if (name == 'hp' || name == 'ataque' || name == 'defensa') {
            const number = parseInt(value)
            if (value.length != 0) {
                if (Number.isNaN(number)) {
                    setErrors({ ...errors, [name]: `El campo de ${name} debe ser un número` })
                } else if (name == 'hp') {
                    if (number < 100) setErrors({ ...errors, [name]: 'La vida debe ser 100 o superior' })
                    else delete errors.hp
                } else delete errors[name]
            } else setErrors({ ...errors, [name]: `El campo ${name} debe ser completado obligatoriamente` })
        }
    }
    useEffect(() => {
        console.log(campos)
    }, [campos])

    const submit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3001/pokemons', campos)
            .then(response => {
                console.log('pokemon create')
                console.log(response.data)
            })
            .catch(error => window.alert(error.response.data.error))
        setCampos({
            name: '',
            hp: '',
            image: '',
            attack: '',
            deffence: '',
            speed: '',
            height: '',
            weight: '',
            types: []
        })
    }

    function addType(event) {
        const name = event.target.name
        const value = event.target.value
        setCampos({ ...campos, types: [...campos.types, value] })
    }

    return (
        <div className={style.contenedor}>
            <form className={style.form} onSubmit={(event) => submit(event)}>
                <div className={style.inputs}>
                    <label>Nombre: </label>
                    <input name='name' onChange={(event) => onChange(event)} value={campos.name} autoFocus></input>
                </div>
                <div className={style.inputs}>
                    <label>Imagen: </label>
                    <input name='image' onChange={(event) => onChange(event)} value={campos.image}></input>
                </div>
                <div className={style.inputs}>
                    <label>Hp: </label>
                    <input name='hp' onChange={(event) => onChange(event)} value={campos.hp}></input>
                </div>
                <div className={style.inputs}>
                    <label>Ataque: </label>
                    <input name='attack' onChange={(event) => onChange(event)} value={campos.attack}></input>
                </div>
                <div className={style.inputs}>
                    <label>Defensa: </label>
                    <input name='deffence' onChange={(event) => onChange(event)} value={campos.deffence}></input>
                </div>
                <div className={style.inputs}>
                    <label>Velocidad: </label>
                    <input name='speed' onChange={(event) => onChange(event)} value={campos.speed}></input>
                </div>
                <div className={style.inputs}>
                    <label>Altura: </label>
                    <input name='height' onChange={(event) => onChange(event)} value={campos.height}></input>
                </div>
                <div className={style.inputs}>
                    <label>Peso: </label>
                    <input name='weight' onChange={(event) => onChange(event)} value={campos.weight}></input>
                </div>
                <div className={style.inputs}>
                    <label>Tipos: </label>
                    <input name='types' value={campos.types}></input>
                </div>
                <button type='submit' className={Object.keys(errors).length > 0 ? style.disabled : style.active}>CREAR</button>
            </form>
            <div className={style.contenedorTypes}>
                <div className={style.types}>
                    {types.map(type => <button name={type.name} value={type.id} onClick={(event) => addType(event)} className={style.buttonType}>{type.id} {type.name}</button>)}
                </div>
            </div>
            <div className={style.casillaErrors}>
                {Object.keys(errors).length > 0 ? (
                    <div className={style.errors}>
                        <p className={style.titleError}>Errores: </p>
                        <ul className={style.listError}>
                            {Object.values(errors) ?
                                Object.values(errors).map(error =>
                                    <li className={style.itemError}>{error}</li>
                                ) : <></>}
                        </ul>
                    </div>
                )
                    :
                    <></>}
            </div>
        </div>
    )
}