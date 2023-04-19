import validate from "./ValidateFunction";
import axios from 'axios'
import style from './Create.module.css'


export default function FormComponent({errors, setErrors, campos, setCampos}) {

    const onChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setCampos({ ...campos, [name]: value })
        validate(errors, setErrors, name, value)
    }

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

    return (
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
                <label>km/h</label>
            </div>
            <div className={style.inputs}>
                <label>Altura: </label>
                <input name='height' onChange={(event) => onChange(event)} value={campos.height}></input>
                <label>cm</label>
            </div>
            <div className={style.inputs}>
                <label>Peso: </label>
                <input name='weight' onChange={(event) => onChange(event)} value={campos.weight}></input>
                <label>kg</label>
            </div>
            <div className={style.inputs}>
                <label>Tipos: </label>
                <input name='types' value={campos.types}></input>
            </div>
            <button type='submit' className={Object.keys(errors).length > 0 ? style.disabled : style.active}>CREAR</button>
        </form>
    )
}