import { useEffect, useState } from "react";

export default function usePagesViewHook(paginas, limitsPagesView) {
  const [pagesView, setPagesView] = useState([]);
  useEffect(() => {
    setPagesView(
      paginas.slice(limitsPagesView.initPageView, limitsPagesView.limitPageView)
    );
  }, [paginas]);
  useEffect(() => {
    setPagesView(
      paginas.slice(limitsPagesView.initPageView, limitsPagesView.limitPageView)
    );
  }, [limitsPagesView]);

  return {pagesView}
}
