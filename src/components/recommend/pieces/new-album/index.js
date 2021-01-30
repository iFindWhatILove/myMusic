import React, { memo, useEffect, useRef } from 'react'
import { Carousel } from 'antd'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import ThemeTitle from 'component/common-cpn/theme-title/index'
import NewAlbumItem from 'component/common-cpn/new-album-item/index'
import { changeNewAlbum } from 'pages/discover/reducer/actionCreator.js'

import { Wrapper } from './style'

export default memo(function () {
    const dispatch = useDispatch()
    const bannerRef = useRef()

    useEffect(() => {
        dispatch(changeNewAlbum(10, 0))
    }, [dispatch])

    let { information } = useSelector(state => ({
        information: state.getIn(['discoverInfo', 'newAlbum'])
    }), shallowEqual)

    function createAlbumBannerItem(fromIndex,toIndex) {
        return (
            <div className='album-banner'>
                {information.slice(fromIndex, toIndex).map(item => {
                    let { picUrl, name, artist: { name: artistName } } = item
                    let info = {
                        picUrl: picUrl + '?param=150y150',
                        name,
                        artistName,
                    }

                    return <NewAlbumItem {...info} key={item.id}></NewAlbumItem>
                })}
            </div>
        )
    }

    return (
        <Wrapper>
            <ThemeTitle title='新碟上架'></ThemeTitle>
            <div className='content'>
                <div className='arrow arrow-left sprite_02' onClick={() => bannerRef.current.prev()}></div>
                <div className='album'>
                    <Carousel dots={false} ref={bannerRef}>
                        {
                            createAlbumBannerItem(0,5)
                        }
                        {
                            createAlbumBannerItem(5,10)
                        }
                    </Carousel>
                </div>
                <div className='arrow arrow-right sprite_02' onClick={() => bannerRef.current.next()}></div>
            </div>
        </Wrapper>
    )
})