
export default function validate(errors, setErrors, name, value, campos) {
    verifyName(errors, setErrors, name, value)
    verifyImage(errors, setErrors, name, value)
    verifyHpAttackDeffence(errors, setErrors, name, value)
    verifyTypes(errors, setErrors, campos)
}

function verifyName(errors, setErrors, name, value) {
    if (name == 'name') {
        if (value.length != 0) {
            if (value[0] != value[0].toUpperCase()) {
                setErrors({ ...errors, [name]: 'El nombre debe iniciar con letra mayuscula' })
            } else if (value.length <= 5 || value.length > 10) setErrors({ ...errors, [name]: 'El nombre debe tener entre 5 y 10 caracteres' })
            else delete errors.name
        } else setErrors({ ...errors, [name]: 'El campo nombre debe ser completado obligatoriamente' })
    }
}

function verifyImage(errors, setErrors, name, value) {
    if (name == 'image') {
        const imageURL = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|png|gif)$/
        if (!imageURL.test(value)) {
            setErrors({ ...errors, [name]: 'El campo de imagen debe ser una url valida para imagenes, debe terminar con el formato de la imagen (jpg,jpeg,png,gif)' })
        } else delete errors.image
    }
}

function verifyHpAttackDeffence(errors, setErrors, name, value) {
    if (name == 'hp' || name == 'attack' || name == 'deffence') {
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

function verifyTypes(errors, setErrors, campos) {
    if (campos.types.length == 0) {
        setErrors({ ...errors, types: 'Debe haber mínimo un type seleccionado' })
    }
    else delete errors.types
}