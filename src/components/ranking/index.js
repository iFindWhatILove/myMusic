import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { changeTopList, changeTopListDetail } from './reducer/actionCreator'

import { Wrapper, Left, LeftContainer, Right } from './style'
import LeftItem from './pieces/left-item/index'
import RightTop from './pieces/right-top/index'
import RightBottom from './pieces/right-bottom/index'

export default memo(function () {
    const dispatch = useDispatch()
    let [choosenIndex, setChoosenIndex] = useState(0)

    const handleChoosenIndex = (index,id) => {
        setChoosenIndex(index)
        dispatch(changeTopListDetail(id))
    }

    useEffect(() => {
        dispatch(changeTopList())
    }, [dispatch])

    let { topList } = useSelector(state => ({
        topList: state.getIn(['rankingInfo', 'topList'])
    }))

    useEffect(() => {
        if(topList.length !== 0){
            dispatch(changeTopListDetail(topList[choosenIndex]['id']))
        }
    },[topList, dispatch])

    return <Wrapper>
        <Left>
            <LeftContainer>
                {
                    topList.map((item, index) => {
                        let title = null
                        if (index === 0 || index === 4) {
                            title = <div className='header'>{index === 0?'云音乐特色榜':'全球媒体榜'}</div>
                        }

                        let { coverImgUrl, name, updateFrequency, id } = item
                        let obj = {
                            coverImgUrl: coverImgUrl + '?param=40y40',
                            name,
                            updateFrequency,
                            isChoosen: index === choosenIndex,
                        }

                        return (
                            <div key={id} onClick={() => handleChoosenIndex(index,id)}>
                                {title}
                                <LeftItem {...obj}></LeftItem>
                            </div>
                        )
                    })
                }

            </LeftContainer>
        </Left>
        <Right>
            <RightTop></RightTop>
            <RightBottom></RightBottom>
        </Right>
    </Wrapper>
})

// /toplist 获取所有榜单