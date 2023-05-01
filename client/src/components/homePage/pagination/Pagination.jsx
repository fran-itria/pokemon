import { useState } from "react";
import { viewButtons, viewPokemons } from "./FunctionsPagination";
import usePaginasHook from "./paginasHook";
import usePagesViewHook from "./pagesViewHook";
import style from "./Pagination.module.css";

export default function Pagination({ setPage, pokemons, limitPage }) {
  const [limitsPagesView, setLimitsPagesView] = useState({
    current: 1,
    initPageView: 0,
    limitPageView: 5,
  });
  const { paginas } = usePaginasHook(pokemons, limitPage);
  const {pagesView } = usePagesViewHook(paginas, limitsPagesView)

  return (
    <div className={style.pagination}>
      {pagesView.length > 0 ? (
        <>
          <button name="prev" onClick={(event) => viewButtons(event, setLimitsPagesView, limitsPagesView, paginas)}>
            Prev
          </button>
          {pagesView.map((page) => {
            return (
              <button value={page} onClick={(event) => viewPokemons(event, setPage, limitPage)} className={style.button}>
                {page}
              </button>
            );
          })}
          <button name="next" onClick={(event) => viewButtons(event, setLimitsPagesView, limitsPagesView, paginas)}>
            Next
          </button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
