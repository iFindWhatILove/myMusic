import React,{ memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { changeHotNewAlbum } from '../reducer/actionCreator'

import { Wrapper } from './style'

import ItemThemeTitle from 'component/common-cpn/item-theme-title/index'
import NewAlbumItem from 'component/common-cpn/new-album-item/index'

export default memo(function(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(changeHotNewAlbum())
    },[dispatch])

    let { hotNewAlbum } = useSelector(state => ({
        hotNewAlbum: state.getIn(['albumInfo','hotNewAlbum']),
    }))

    return (
        <Wrapper>
            <ItemThemeTitle title='热门新碟'></ItemThemeTitle>
            <div className='album-list'>
            {
                hotNewAlbum.slice(0,10).map(item => {
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
        </Wrapper>
    )
})

// artistName: artist.name  name: name 