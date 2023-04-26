import style from './Pagination.module.css'

export default function Pagination({ page, setPage, pokemons }) {

    const pagination = (event) => {
        const limit = 12
        switch (event.target.name) {
            case 'next':
                if (page.pag < pokemons.length / limit) {
                    setPage({ pag: page.pag + 1, init: page.init + limit, finish: page.finish + limit })
                }
                break;
            case 'prev':
                if (page.pag > 1) {
                    setPage({ pag: page.pag - 1, init: page.init - limit, finish: page.finish - limit })
                }
            default:
                break;
        }
    }

    return (
        <div className={style.pagination}>
            <button name="prev" onClick={(event) => pagination(event)} className={style.button}> Prev </button>
            <p className={style.page}>{page.pag}</p>
            <button name='next' onClick={(event) => pagination(event)} className={style.button}> Next </button>
        </div>
    )
}