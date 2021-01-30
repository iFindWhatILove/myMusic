import React,{ memo, useState } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import { Wrapper } from './style'

import { changePlayList, changeCurrentPlayIndex } from 'pages/main/play/reducer/actionCreator.js'

const TopsList = memo(function(props){
    const dispatch = useDispatch()
    let {name, coverImgUrl, tracks } = props
    let [display,setDisplay] = useState(-1)  //鼠标移入哪个item，就显示他的按钮

    let { playList } = useSelector(state => ({
        playList: state.getIn(['playInfo','playList'])
    }),shallowEqual)
    let len = playList.length  //获取原来数组长度

    const handlePlay = (id) => {
        dispatch(changePlayList([...playList,id]))
        dispatch(changeCurrentPlayIndex(len,true,len)) //因为新歌加在最后，所以index为 playList.length
    }
    
    return (
        <Wrapper>
            <div className='header'>
                <div className='image'>
                    <img src={coverImgUrl} alt=''></img>
                    <a href='/todo' className='image_cover sprite_cover'>ranking</a>
                </div>
                <div className='info'>
                    <a href='/todo'>{name}</a>
                    <div>
                        <button className='sprite_02 btn play'></button>
                        <button className='sprite_02 btn favor'></button>
                    </div>
                </div>
            </div>
            <div className='list'>
                {
                    tracks.slice(0,10).map((item,index) => {

                        return (
                            <div className='list-item' key={item.id} 
                            onMouseEnter={() => setDisplay(index)}
                            onMouseLeave={() => setDisplay(-1)}>
                                <div className='rank'>{index + 1}</div>
                                <div className='info'>
                                    <span className='name text-nowrap'>{item.name}</span>
                                    <div className='operate' style={{display: index === display?'block':'none'}}>
                                        <button className='btn sprite_02 play'
                                        onClick={() => handlePlay(item.id)}></button>
                                        <button className='btn sprite_icon2 addto'></button>
                                        <button className='btn sprite_02 favor'></button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='footer'>
                <a href='/todo'>{'查看全部 >'}</a>
            </div>
        </Wrapper>
    )
})

TopsList.propTypes = {
    tracks: PropTypes.array.isRequired,
    coverImgUrl: PropTypes.string,
}

export default TopsList