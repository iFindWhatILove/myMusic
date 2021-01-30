import React,{ memo, useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { Wrapper } from './style'
import ItemThemeTitle from 'component/common-cpn/item-theme-title/index'
import DjradioRankingItem from 'component/common-cpn/djradio-ranking-item/index'
import Pagination from 'component/common-cpn/pagination/index'

import { changeDjRadios, changeCurrentPage } from '../../reducer/actionCreator'

export default memo(function(){
    const dispatch = useDispatch()

    let { djRadios, currentPage, totalPage, choosenDjradio } = useSelector(state => ({
        djRadios: state.getIn(['djradioInfo','djRadios']),
        totalPage: state.getIn(['djradioInfo','totalPage']),
        currentPage: state.getIn(['djradioInfo','currentPage']),
        choosenDjradio: state.getIn(['djradioInfo','choosenDjradio']),
    }),shallowEqual)

    let callback = useCallback(function(newPage){
        dispatch(changeCurrentPage(newPage))
        dispatch(changeDjRadios(choosenDjradio,newPage))
    },[dispatch,choosenDjradio])

    return (
        <Wrapper>
            <ItemThemeTitle title='电台排行榜'></ItemThemeTitle>
            <div className='ranking-list'>
                {
                    djRadios.map(item => {
                        let obj = {
                            name: item.name, 
                            picUrl: item.picUrl + '?param=120y120', 
                            nickname: item.dj.nickname, 
                            programCount: item.programCount, 
                            subCount: item.subCount,
                            id: item.id
                        }

                        return <DjradioRankingItem {...obj} key={item.id}></DjradioRankingItem>
                    })
                }
            </div>
            <div className='pagination'>
                <Pagination totalPage={totalPage} currentPage={currentPage} callback={callback}></Pagination>
            </div>          
        </Wrapper>
    )
})

// name, picUrl, dj.nickname, programCount, subCount