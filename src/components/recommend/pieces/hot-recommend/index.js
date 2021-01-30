import React,{ memo, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { changeHotRecommend } from 'pages/discover/reducer/actionCreator.js'
import ThemeTitle from 'component/common-cpn/theme-title/index'
import ThemeItem from 'component/common-cpn/theme-item/index'

import { Wrapper } from './style'

export default memo(function(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(changeHotRecommend())
    },[dispatch])

    let { info } = useSelector(state => ({
        info: state.getIn(['discoverInfo','hotRecommend'])
    }),shallowEqual)

    return (
     <div>
         <ThemeTitle title='热门推荐'
                keyword={['华语','流行','摇滚','民谣','电子']}></ThemeTitle>
        
        <Wrapper>
        {
            info.slice(0,8).map(item => {
                return <ThemeItem {...item} key={item.id}></ThemeItem>
            })
        }
        </Wrapper>
        
     </div>
    )
})