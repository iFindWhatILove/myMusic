import { Map } from 'immutable'

import constantName from './constants'

const init = Map({
    djCatelist: [],
    choosenDjradio: undefined,
    perfectNewRadio: [],
    djRadios: [],
    totalPage: 0,
    currentPage: 1,
})

export default function reducer(state=init, action){
    switch(action.type){
        case constantName.DJ_CATELIST:
            return state.set('djCatelist', action.djCatelist)
        case constantName.CHOOSEN_DJRADIO:
            return state.set('choosenDjradio', action.choosenDjradio)
        case constantName.PERFECT_NEW_RADIO:
            return state.set('perfectNewRadio', action.perfectNewRadio)
        case constantName.DJ_RADIOS:
            return state.set('djRadios', action.djRadios)
        case constantName.TOTAL_PAGE:
            return state.set('totalPage', action.totalPage)
        case constantName.CURRENT_PAGE:
            return state.set('currentPage', action.currentPage)
        default:
            return state
    }
}