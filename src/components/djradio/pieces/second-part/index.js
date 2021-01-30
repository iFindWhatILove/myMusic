import React,{ memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import { Wrapper, ItemWrapper } from './style'
import ItemThemeTitle from 'component/common-cpn/item-theme-title/index'
import NewAlbumItem from 'component/common-cpn/new-album-item/index'

export default memo(function(){
    let { perfectNewRadio } = useSelector(state => ({
        perfectNewRadio: state.getIn(['djradioInfo','perfectNewRadio'])
    }),shallowEqual)

    return (
        <Wrapper>
            <ItemThemeTitle title='优秀新电台'></ItemThemeTitle>
            <ItemWrapper>
                {
                    perfectNewRadio.slice(0,5).map(item => {
                        let obj = {
                            picUrl: item.picUrl+'?param=150y150',
                            name: item.name,
                            artistName: item.desc,
                        }
                        return <NewAlbumItem {...obj} key={item.id}></NewAlbumItem>
                    })
                }
            </ItemWrapper>
        </Wrapper>
    )
})

// name, desc, picUrl