import { useEffect, useState } from "react";

export default function usePaginasHook(pokemons, limitPage) {
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

  return {paginas}
}
