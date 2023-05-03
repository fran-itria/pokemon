const dictionary = Object.freeze({
    /* - - Create Component - - */
    // Campos (createComponent, FormComponent)
    campos: {
        name: '',
        image: '',
        hp: '',
        attack: '',
        deffence: '',
        speed: '',
        height: '',
        weight: '',
        types: []
    },
    /* - - Actions - - */
    //CleanPokemons (reducer, homeComponent, detailComponent, formComponent)
    cleanPokemons: 'cleanPokemons',
    allPokemons: 'allPokemons',
    //CreatePokemons (formComponent, homeComponent)
    create: 'create',
    /* - - Pagination Component - - */ 
    limitPage: 10,
    initPageView: 0,
    limitPageView: 5,
    next: 'next',
    prev: 'prev'
})

export default dictionary