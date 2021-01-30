import constantName from './constants'
import { Map } from 'immutable'

const init = Map({
    allSongsSort: [],
    currentCategory: '全部',
    categoryDetail: [],
    totalPage: 0,
    currentPage: 1,
})

export default function reducer(state=init,action){
    switch(action.type){
        case constantName.ALL_SONGS_SORT:
            return state.set('allSongsSort', action.allSongsSort)
        case constantName.CURRENT_CATEGORY:
            return state.set('currentCategory', action.currentCategory)
        case constantName.CATEGORY_DETAIL:
            return state.set('categoryDetail', action.categoryDetail)
        case constantName.TOTAL_PAGE:
            return state.set('totalPage', action.totalPage)
        case constantName.CURRENT_PAGE:
            return state.set('currentPage', action.currentPage)
        default:
            return state
    }
}