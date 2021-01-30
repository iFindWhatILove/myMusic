import { Map } from 'immutable'

import constantName from './constants'

const init = Map({
    topList: [],
    topListDetail: {},
})

export default function reducer(state = init,action){
    switch(action.type){
        case constantName.TOP_LIST:
            return state.set('topList',action.topList)
        case constantName.TOP_LIST_DETAIL:
            return state.set('topListDetail',action.topListDetail)
        default:
            return state
    }
}