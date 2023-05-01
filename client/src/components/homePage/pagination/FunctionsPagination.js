export function viewPokemons(event, setPage, limitPage){
    const value = event.target.value;
    if (value == 1) {
      setPage({
        init: 0,
        finish: limitPage * value,
      });
    } else {
      setPage({
        init: limitPage * (value - 1),
        finish: limitPage * value,
      });
    }
  };

  export function viewButtons(event, setLimitsPagesView ,limitsPagesView, paginas){
    switch (event.target.name) {
      case "prev":
        if (limitsPagesView.current > 1) {
          setLimitsPagesView({
            ...limitsPagesView,
            current: limitsPagesView.current - 1,
            initPageView: limitsPagesView.initPageView - 5,
            limitPageView: limitsPagesView.limitPageView - 5,
          });
        }
        break;
      case "next":
        if (limitsPagesView.current < paginas.length / 5) {
          setLimitsPagesView({
            ...limitsPagesView,
            current: limitsPagesView.current + 1,
            initPageView: limitsPagesView.initPageView + 5,
            limitPageView: limitsPagesView.limitPageView + 5,
          });
        }
      default:
        break;
    }
  };