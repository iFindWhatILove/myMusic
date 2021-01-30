import { CHANGE_SELECTED_TITLE, BANNER_CHANGE, HOT_RECOMMEND, NEW_ALBUM,
    TOP_UP_LIST, TOP_NEW_LIST, TOP_ORIGIN_LIST, RESIDENT_SINGER } from './constants'

import { Map } from 'immutable'

const initial = Map({
    selectedTitle: 0,
    banner: [],
    hotRecommend: [],
    newAlbum: [],

    topUpList: {},
    topNewList: {},
    topOriginList: {},

    residentSinger: [],
})

function reducer(state=initial, action){
    switch(action.type){
        case CHANGE_SELECTED_TITLE:
            return state.set('selectedTitle',action.index) 
        case BANNER_CHANGE:
            return state.set('banner',action.banner)
        case HOT_RECOMMEND:
            return state.set('hotRecommend',action.hotRecommend)
        case NEW_ALBUM:
            return state.set('newAlbum',action.newAlbum)
        case TOP_UP_LIST:
            return state.set('topUpList',action.topUpList)
        case TOP_NEW_LIST:
            return state.set('topNewList',action.topNewList)
        case TOP_ORIGIN_LIST:
            return state.set('topOriginList',action.topOriginList)
        case RESIDENT_SINGER:
            return state.set('residentSinger',action.residentSinger)
        default:
            return state
    }
}

export default reducer