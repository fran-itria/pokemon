import { useEffect, useState } from "react";
import style from "./Pagination.module.css";

export default function Pagination({ page, setPage, pokemons, limitPage}) {

  const [paginas, setPaginas] = useState([]);
  const totalPokemons = pokemons.length;
  const pagesTotal = totalPokemons / limitPage;
  let pages = [];
  useEffect(() => {
    if (pokemons.length > 0) {
      for (let i = 0; i < pagesTotal; i++) {
        pages.push(i + 1);
      }
      setPaginas(pages);
    }
  }, [pokemons]);

  const viewPokemons = (event) => {
    const value = event.target.value;
    if (value == 1) {
      setPage({
        ...page,
        pag: value,
        init: 0,
        finish: limitPage * value,
      });
    } else {
      setPage({
        ...page,
        pag: value,
        init: limitPage * (value - 1),
        finish: limitPage * value,
      });
    }
  };
  return (
    <div className={style.pagination}>
      {paginas.length > 0 ? (
        <>
          {paginas.map((page, index) => {
            return (
              <button
                value={index + 1}
                onClick={(event) => viewPokemons(event)}
              >
                {page}
              </button>
            );
          })}
          <p className={style.page}>Page actual: {page.pag}</p>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
