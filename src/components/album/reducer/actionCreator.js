import constantName from './constant'

import { getHotAlbums, getTopAlbums } from '@/service/album'

export function changeHotNewAlbum(){
    return dispatch => {
        getHotAlbums().then(res => {
            dispatch({
                type: constantName.HOT_NEW_ALBUM,
                hotNewAlbum: res.albums
            })
        }).catch(err => {
            console.log(err)
        })
    }
}

export function changeCurrentPage(newPage){
    return {
        type: constantName.CURRENT_PAGE,
        currentPage: newPage
    }
}

export function changeAllAlbum(limit=30){
    return (dispatch,getState) => {
        let currentPage = getState().getIn(['albumInfo','currentPage'])
        let totalPage = getState().getIn(['albumInfo','totalPage'])

        getTopAlbums(limit,(currentPage-1)*limit).then(res => {
            dispatch({
                type: constantName.ALL_ALBUM,
                allAlbum: res.albums
            })

            if(totalPage === 1){
                totalPage = Math.ceil(res.total/limit) 
                dispatch(changeTotalPage(totalPage))
            }      
        }).catch(err => {
            console.log(err)
        })
    }
}

export function changeTotalPage(num){
    return {
        type: constantName.TOTAL_PAGE,
        totalPage: num
    }
}