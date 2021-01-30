import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import ThemeTitle from 'component/common-cpn/theme-title/index'
import { changeTopList } from 'pages/discover/reducer/actionCreator.js'
import TopsList from 'component/common-cpn/tops-list/index'

import { Wrapper } from './style'

export default memo(function(){  // {name, coverImgUrl, tracks } item.name item.id
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(changeTopList(0))
        dispatch(changeTopList(2))
        dispatch(changeTopList(4))
    },[dispatch])

    let {topUpList, topNewList, topOriginList } = useSelector(state => ({
        topUpList: state.getIn(['discoverInfo','topUpList']),
        topNewList: state.getIn(['discoverInfo','topNewList']),
        topOriginList: state.getIn(['discoverInfo','topOriginList'])
    }),shallowEqual)

    function createCpn(data){
        if(data){
            let {name, coverImgUrl, tracks } = data
            coverImgUrl = coverImgUrl + '?param=80y80'

        return <TopsList tracks={tracks||[]} name={name} coverImgUrl={coverImgUrl}></TopsList>
        }

        return null
        
    }

    return (
        <Wrapper>
            <ThemeTitle title='榜单'></ThemeTitle>
            <div className='table'>
                { createCpn(topUpList) }
                { createCpn(topNewList) }
                { createCpn(topOriginList) }
            </div>
        </Wrapper>
    )
})