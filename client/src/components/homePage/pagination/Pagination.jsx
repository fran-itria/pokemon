import style from '../Home.module.css'

export default function Pagination({page, setPage, pokemons}){

    const pagination = (event) => {
        switch (event.target.name) {
            case 'next':
                if (page.pag < pokemons.length / 12) {
                    setPage({ pag: page.pag + 1, init: page.init + 12, finish: page.finish + 12 })
                }
                break;
            case 'prev':
                if (page.pag > 1) {
                    setPage({ pag: page.pag - 1, init: page.init - 12, finish: page.finish - 12 })
                }
            default:
                break;
        }
    }

    return (
        <div className={style.pagination}>
            <button name="prev" onClick={(event) => pagination(event)} className={style.button}> Prev </button>
            <p>{page.pag}</p>
            <button name='next' onClick={(event) => pagination(event)} className={style.button}> Next </button>
        </div>
    )
}