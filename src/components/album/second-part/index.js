import React,{ memo, useCallback, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { Wrapper } from './style'
import { changeAllAlbum, changeCurrentPage } from '../reducer/actionCreator'

import ItemThemeTitle from 'component/common-cpn/item-theme-title/index'
import NewAlbumItem from 'component/common-cpn/new-album-item/index'
import Pagination from 'component/common-cpn/pagination/index'

export default memo(function(){
    const dispatch = useDispatch()

    let { allAlbum, totalPage, currentPage } = useSelector(state => ({
        allAlbum: state.getIn(['albumInfo','allAlbum']),
        totalPage: state.getIn(['albumInfo','totalPage']),
        currentPage: state.getIn(['albumInfo','currentPage'])
    }),shallowEqual)

    useEffect(() => {
        dispatch(changeAllAlbum())
    },[dispatch,currentPage])

    const callback = useCallback(function(newPage){
        dispatch(changeCurrentPage(newPage))
    },[dispatch, changeCurrentPage])

    return (
        <Wrapper>
            <ItemThemeTitle title='全部新碟'></ItemThemeTitle>
            <div className='album-list'>
            {
                allAlbum.map(item => {
                    let obj = {
                        picUrl: item.picUrl + '?param=130y130',
                        name: item.name,
                        artistName: item.artist.name,
                    }
                    let id = item.id

                    return <NewAlbumItem {...obj} key={id}></NewAlbumItem>
                })
            }
            </div>
            <div className='page-wrapper'>
                <Pagination totalPage={totalPage} currentPage={currentPage} callback={callback}></Pagination>
            </div>          
        </Wrapper>
    )
})