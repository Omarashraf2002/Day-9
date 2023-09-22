let INITIAL_STATE = {
    favorites: []
}

 function reducer(state = INITIAL_STATE, action){ 
    switch(action.type){
        case 'SET_FAVORITE': 
            return {...state, favorites: action.payload}
        default :
            return state

    }

}

export default reducer