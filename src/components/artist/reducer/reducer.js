import constantName from './constant'

import { Map } from 'immutable'

const init = Map({
    choosenSinger: '',
    choosenItem: '热门',
    isShow: false,
    artistList: [],
    newType: undefined,
    area: undefined,
    initial: '-1',
})

export default function reducer(state=init, action){
    switch(action.type){
        case constantName.CHOOSEN_SINGER:
            return state.set('choosenSinger',action.choosenSinger)
        case constantName.CHOOSEN_ITEM:
            return state.set('choosenItem',action.choosenItem)
        case constantName.RIGHT_MIDDLE_ISSHOW:
            return state.set('isShow',action.isShow)
        case constantName.ARTIST_LIST:
            return state.set('artistList',action.artistList)
        case constantName.TYPE:
            return state.set('newType',action.newType)
        case constantName.AREA:
            return state.set('area',action.area)
        case constantName.INITIAL:
            return state.set('initial',action.initial)
        default:
            return state
    }
}