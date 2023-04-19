import { useState } from 'react'
import style from './Create.module.css'
import FormComponent from './FormComponent'
import TypesComponent from './TypesComponent';
import ErrorsComponent from './ErrorsComponent';

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



    return (
        <div className={style.contenedor}>
            <FormComponent errors={errors} setErrors={setErrors} campos={campos} setCampos={setCampos} />
            <TypesComponent campos={campos} setCampos={setCampos} />
            <ErrorsComponent errors={errors} />
        </div>
    )
}