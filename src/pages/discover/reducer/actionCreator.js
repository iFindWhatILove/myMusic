import { CHANGE_SELECTED_TITLE, BANNER_CHANGE, HOT_RECOMMEND, NEW_ALBUM,
    TOP_UP_LIST, TOP_NEW_LIST, TOP_ORIGIN_LIST, RESIDENT_SINGER } from './constants'
import { getTopBanner, getHotRecommend, getNewAlbum, getTopList, getResidentSinger } from 'service/recommend'

export function changeSelectedTitle(index){
    return {
        type: CHANGE_SELECTED_TITLE,
        index,
    }
}

export function changeBanner(banner){
    return {
        type: BANNER_CHANGE,
        banner,
    }
}

export function changeTopUpList(topUpList){
    return {
        type: TOP_UP_LIST,
        topUpList,
    }
}

export function changeTopNewList(topNewList){
    return {
        type: TOP_NEW_LIST,
        topNewList,
    }
}

export function changeTopOriginList(topOriginList){
    return {
        type: TOP_ORIGIN_LIST,
        topOriginList,
    }
}

export function changeResidentSinger(type){
    return dispatch => {
        getResidentSinger(type).then(res => {
            dispatch({
                type: RESIDENT_SINGER,
                residentSinger: res.list.artists,
            })
        }).catch(err => {
            console.log(err)
        })
    }
}

export function getBanner(){
    return dispatch => {
        getTopBanner().then(res => {
            dispatch(changeBanner(res))
        }).catch(err => {
            console.log(err)
        })
    }
}

export function changeHotRecommend(){
    return dispatch => {
        getHotRecommend().then(res => {
            dispatch({
                type: HOT_RECOMMEND,
                hotRecommend: res.result,
            })
        }).catch(err => {
            console.log(err)
        })
    }
}

export function changeNewAlbum(limit,offset){
    return dispatch => {
        getNewAlbum(limit,offset).then(res => {
            dispatch({
                type: NEW_ALBUM,
                newAlbum: res.albums,
            })
        }).catch(err => {
            console.log(err)
        })
    }
}

export function changeTopList(idx){
    return dispatch => {
        getTopList(idx).then(res => { 
            res = res.playlist

            switch(idx){
                case 0:
                    return dispatch(changeTopUpList(res))
                case 2:
                    return dispatch(changeTopNewList(res))
                case 4:
                    return dispatch(changeTopOriginList(res))
                default:
                    return '改变其他'
            }
        }).catch(err => {
            console.log(err)
        })
    }
}
