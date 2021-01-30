import React, { memo, useState, useMemo, useCallback, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { Wrapper, Bubble, ThemeItemWrapper } from './style'
import ItemThemeTitle from '../common-cpn/item-theme-title/index'
import Content from './pieces/bubble/index'
import ThemeItem from '../common-cpn/theme-item/index'
import Pagination from '../common-cpn/pagination/index'

import { changeCurrentCategory, changeCategoryDetail, changeCurrentPage } from './reducer/actionCreator'

export default memo(function () {
    const dispatch = useDispatch()

    let [showBubble, setShowBubble] = useState(false)
    let [title, setTitle] = useState()

    let { categoryDetail, totalPage, currentPage } = useSelector(state => ({
        categoryDetail: state.getIn(['songsInfo','categoryDetail']),
        totalPage: state.getIn(['songsInfo','totalPage']),
        currentPage: state.getIn(['songsInfo','currentPage']),
    }),shallowEqual)

    const handleClick = useCallback(function(category){
            dispatch(changeCurrentCategory(category))
            dispatch(changeCategoryDetail())
    },[dispatch])

    const callback = useCallback(function(newPage){
        dispatch(changeCurrentPage(newPage))
    },[dispatch])

    useEffect(() => {
        dispatch(changeCategoryDetail())
    },[dispatch])

    const handleBubble = useMemo(() => {
        if(showBubble){
            return (
                <Bubble>
                    <div className='arrow sprite_icon'></div>
                    <div className="all">
                        <span className='link' onClick={() => handleClick('全部')}>全部风格</span>
                    </div>
                    <Content handleClick={handleClick}></Content>
                </Bubble>
            )
        }else{
            return null
        }
    },[showBubble])

    const handleSelectClick = (e) => {
        setShowBubble(!showBubble)
        if(e.target.classList.contains('link')){
            setTitle(e.target.innerText)
        }
    }

    let count = (
        <button className='select' onClick={(e) => handleSelectClick(e)}>
            <span>选择分类</span>
            <i className='sprite_icon2 temp'></i>
            { handleBubble }
        </button>
    )
    let right = (
        <button className='hot'>热门</button>
    )

    return (
        <Wrapper className='wrap-v2'>
            <ItemThemeTitle count={count} right={right} title={title}></ItemThemeTitle>
            <ThemeItemWrapper>
            {
                categoryDetail.map(item => {
                    let obj = {
                        picUrl: item.coverImgUrl,
                        name: item.name,
                        copywriter: item.creator.nickname,
                        id: item.id,
                        playCount: item.playCount
                    }

                    return (
                        <div style={{marginRight: '30px'}} key={item.id}>
                            <ThemeItem {...obj}></ThemeItem>
                        </div>          
                    )
                })
            }
            </ThemeItemWrapper>    
            <Pagination totalPage={totalPage} currentPage={currentPage} callback={callback}></Pagination>
        </Wrapper>
    )
})

// /playlist/catlist  category: 0:语种 1:风格 2：场景 3：情感 4：主题

// { picUrl: coverImgUrl, name: name, copywriter: creator.nickname, id: id, playCount: playCount}