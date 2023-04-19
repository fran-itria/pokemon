import style from './Create.module.css'


export default function ErrorsComponent({ errors }) {
    return (
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
    )
}