import React,{ memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { Wrapper } from './style'
import LeftItem from './pieces/left-item/index'
import Right from './pieces/right/index'

import { changeChoosenSinger, changeChoosenItem, changeArtistList, changeInitial } from './reducer/actionCreator'

import { artistCategories } from '@/service/local-data.js'

export default memo(function(){
    const dispatch = useDispatch()

    let { choosenSinger, newType, area, initial } = useSelector(state => ({
        choosenSinger: state.getIn(['artistInfo','choosenSinger']),
        newType: state.getIn(['artistInfo','newType']),
        area: state.getIn(['artistInfo','area']),
        initial: state.getIn(['artistInfo','initial']),
    }),shallowEqual)

    useEffect(() => {
        let singer = artistCategories[0].artists[0].name
        dispatch(changeChoosenSinger(singer))
    },[dispatch])

    useEffect(() => {
        dispatch(changeChoosenItem('热门'))
        dispatch(changeInitial('-1'))
    },[dispatch,choosenSinger])

    useEffect(() => {
        dispatch(changeArtistList(area,newType,initial))
    },[dispatch,area,newType,initial])

    return (
        <Wrapper className='wrap-v2'>
            <div className='left2'>
                {
                    artistCategories.map(item => {
                        return <LeftItem {...item} key={item.title} choosenSinger={choosenSinger}></LeftItem>
                    })
                }
            </div>
            <Right choosenSinger={choosenSinger}></Right>
        </Wrapper>
    )
})

// /artist/list?type=1&area=96&initial=b type:性别 area:国家 initial:首字母 limit offset
// "0" "其他";  "-1" "热门";
// name,picUrl
 