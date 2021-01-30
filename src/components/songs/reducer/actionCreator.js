import constantName from './constants'
import { getAllSongsSort, getSongCategoryList } from '@/service/songs.js'

export function changeAllSongsSort(){
    return dispatch => {
        getAllSongsSort().then(res => {
            dispatch({
                type: constantName.ALL_SONGS_SORT,
                allSongsSort: res.sub
            })
        }).catch(err => {
            console.log(err)
        })
    }
}

export function changeCurrentCategory(str){
    return (dispatch, getState) => {
        const currentCategory = getState().getIn(['songsInfo','currentCategory'])

        if(currentCategory !== str){
            dispatch({
                type: constantName.CURRENT_CATEGORY,
                currentCategory: str
            })

            dispatch(changeCurrentPage(1))  //更新页码为1
        }

    }
}

export function changeCategoryDetail(offset=0, limit = 35){
    return (dispatch,getState) => {
        const currentCategory = getState().getIn(['songsInfo','currentCategory'])

        getSongCategoryList(currentCategory,offset*limit,limit).then(res => {
            dispatch({
                type: constantName.CATEGORY_DETAIL,
                categoryDetail: res.playlists
            })
            dispatch({
                type: constantName.TOTAL_PAGE,
                totalPage: Math.ceil(res.total/limit)
            })
        }).catch(err => {
            console.log(err)
        })
        
    }
}

export function changeCurrentPage(newPage){
    return dispatch => { 
        dispatch(changeCategoryDetail(newPage-1))
        dispatch({
            type: constantName.CURRENT_PAGE,
            currentPage: newPage
        })
    }
}