import constantName from './constant'

import { Map } from 'immutable'

const init = Map({
    hotNewAlbum: [],
    currentPage: 1,
    allAlbum: [],
    totalPage: 1
})

export default function reducer(state=init, action){
    switch(action.type){
        case constantName.HOT_NEW_ALBUM:
            return state.set('hotNewAlbum',action.hotNewAlbum)
        case constantName.CURRENT_PAGE:
            return state.set('currentPage',action.currentPage)
        case constantName.ALL_ALBUM:
            return state.set('allAlbum',action.allAlbum)
        case constantName.TOTAL_PAGE:
            return state.set('totalPage',action.totalPage)
        default:
            return state
    }
} 