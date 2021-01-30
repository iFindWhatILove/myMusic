import constantName from './constant'

import { getArtistList } from '@/service/artist'

export function changeChoosenSinger(choosenSinger){
    return {
        type: constantName.CHOOSEN_SINGER,
        choosenSinger
    }
}

export function changeChoosenItem(choosenItem){
    return {
        type: constantName.CHOOSEN_ITEM,
        choosenItem,
    }
}

export function changeIsShow(bool){
    return {
        type: constantName.RIGHT_MIDDLE_ISSHOW,
        isShow: bool
    }
}

export function changeArtistList(area, type, initial){
    return dispatch => {
        getArtistList(area,type,initial).then(res => {
            dispatch({
                type: constantName.ARTIST_LIST,
                artistList: res.artists
            })
        }).catch(err => {
            console.log(err)
        })
    }
}

export function changeType(newType){
    return {
        type: constantName.TYPE,
        newType,
    }
}

export function changeArea(area){
    return {
        type: constantName.AREA,
        area,
    }
}

export function changeInitial(initial){
    return {
        type: constantName.INITIAL,
        initial,
    }
}