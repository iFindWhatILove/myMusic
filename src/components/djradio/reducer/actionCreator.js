import constantName from './constants'

import { getDjCatelist, getDjRadioRecommend, getDjRadios } from '@/service/djradio.js'

const changePerfectNewRadio = function(choosenDjradio){
    return dispatch => {
        getDjRadioRecommend(choosenDjradio).then(res => {
            dispatch({
                type: constantName.PERFECT_NEW_RADIO,
                perfectNewRadio: res.djRadios
            })
        }).catch(err => {
            console.log(err)
        })
    }
}

export const changeDjRadios = function(choosenDjradio, offset = 1, limit = 30){
    return dispatch => {
        getDjRadios(choosenDjradio,limit,(offset-1)*limit).then(res => {
            dispatch({
                type: constantName.DJ_RADIOS,
                djRadios: res.djRadios
            })
            dispatch({  // 计算总共的页码数
                type: constantName.TOTAL_PAGE,
                totalPage: Math.ceil(res.count/limit)
            })
        }).catch(err => {
            console.log(err)
        })
    }
}

export const changeCurrentPage = function(newPage = 1){
    return {
        type: constantName.CURRENT_PAGE,
        currentPage: newPage
    }
}

export function changeDjCatelist(){
    return dispatch => {
        getDjCatelist().then(res => {
            let id = res.categories[0].id
            dispatch({
                type: constantName.DJ_CATELIST,
                djCatelist: res.categories
            })
            dispatch(changeChoosenDjradio(id))
        }).catch(err => {
            console.log(err)
        })
    }
}

// 改变第一部分被选中的元素
export function changeChoosenDjradio(choosenDjradio){  
    return dispatch => {
        dispatch(changePerfectNewRadio(choosenDjradio))
        dispatch(changeDjRadios(choosenDjradio))
        dispatch(changeCurrentPage())
        dispatch({
            type: constantName.CHOOSEN_DJRADIO,
            choosenDjradio
        })
    } 
}