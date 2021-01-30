import constantName from './constants'
import { getTopList, getTopDetail } from '@/service/ranking.js'

export function changeTopList(){
    return dispatch => {
        getTopList().then(res => {
            dispatch({
                type: constantName.TOP_LIST,
                topList: res.list
            })
        })
    }
}

export function changeTopListDetail(id){
    return dispatch => {
        getTopDetail(id).then(res => {
            dispatch({
                type: constantName.TOP_LIST_DETAIL,
                topListDetail: res.playlist,
            })
        })
    }
}