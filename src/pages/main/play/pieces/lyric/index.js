import React,{ memo, useEffect, useMemo, useState, useRef } from 'react'
import ReactDOM from 'react-dom'
import { useSelector, useDispatch } from 'react-redux'
import classnames from 'classnames'

import { formatMsToS, formatLyric } from '@/utils/handle-data.js'

import { changeCollectionDetailList, changeLyric } from '../../reducer/actionCreator'

import { Wrapper, TopMsg, TopLeft, TopRight, BottomLeft, BottomRight, LyricWrapper } from './style'

const LyricBottom = memo(function(props){
    return ReactDOM.createPortal(
        <LyricWrapper>
            <span>{props.lyric}</span>
        </LyricWrapper>,
        document.getElementById('message')
        )
})

export default memo(function(props){
    const dispatch = useDispatch()
    const bottomRight = useRef()

    let { playList, collectionDetailList, currentPlayIndex, lyric } = useSelector(state => ({
        playList: state.getIn(['playInfo','playList']),
        collectionDetailList: state.getIn(['playInfo','collectionDetailList']),
        currentPlayIndex: state.getIn(['playInfo','currentPlayIndex']),
        lyric: state.getIn(['playInfo','lyric'])
    }))

    let [lyr, setLyr] = useState([])
    let [time, setTime] = useState([])

    useEffect(() => {
        dispatch(changeCollectionDetailList())
    },[playList,dispatch])

    useEffect(() => {
       dispatch(changeLyric()) 
    },[playList, currentPlayIndex,dispatch])

    useEffect(() => {
        if(lyric){
            let { time, lyric: lyr } = formatLyric(lyric)
            setTime(time)
            setLyr(lyr)
        }     
    },[lyric])

    let len = useMemo(() => playList.length, [playList])
    let singer = useMemo(() => {
        if(collectionDetailList.length !== 0){
            return collectionDetailList[currentPlayIndex] && collectionDetailList[currentPlayIndex].ar[0]['name']
        }      
    },[collectionDetailList, currentPlayIndex])

        let handleActiveIndexChange = useMemo( () => {
            return (function(){
                let num = 0
                return (index) => {
                    if(index >= 4 && index !== num){
                        bottomRight.current.scrollTo(0,32 * (index - 4))
                        num = index
                    }else if(index !== num) {
                        bottomRight.current.scrollTo(0,0)
                        num = index
                    }
                }
            }())
    },[])

    return (
        <Wrapper>
            <TopMsg>
                <TopLeft>
                    <h3>
                        播放列表({len})
                    </h3>
                    <div className='operator'>
                        <button>
                            <i className='sprite_playlist icon favor'></i>
                            收藏全部
                        </button>
                        <button>
                            <i className='sprite_playlist icon remove'></i>
                            清除
                        </button>
                        
                    </div>
                </TopLeft>
                <TopRight>{singer}</TopRight>
            </TopMsg>
            <div className='main'>
                <img className="image" src="https://p4.music.126.net/qeN7o2R3_OTPhghmkctFBQ==/764160591569856.jpg" alt=""/>
                <BottomLeft>
                    {
                        collectionDetailList.map((item,index) => {
                            return (
                                <div className={classnames(['play-item', {'active': index === currentPlayIndex}])} key={item.al.id}>
                                    <div className='left'>{item.name}</div>
                                    <div className='right'>
                                        <span className='singer'>{item.ar[0]['name']}</span>
                                        <span className='duration'>{formatMsToS(item.dt)}</span>
                                        <span className='sprite_playlist link'></span>
                                    </div>
                                </div>
                            )
                        })
                    }
                   
                </BottomLeft>
                <BottomRight ref={bottomRight}>
                    <div className='lrc-content'>
                        {
                            lyr.map((item,index) => {
                                let isActive = false
                                if(props.lyRicTime >= time[index] && props.lyRicTime < time[index+1]){
                                    // 如果 time[index+1] 没有值，说明是最后一句歌词，或者当前播放的时间在这一句和下一句之间
                                    isActive = true
                                    handleActiveIndexChange(index)
                                }else if( time[time.length - 1] && props.lyRicTime >= time[time.length - 1] && index === time.length - 1){
                                    isActive = true
                                    handleActiveIndexChange(index)
                                }
                                return (
                                    <div className={classnames('lrc-item',{
                                        active: isActive
                                    })} key={index}
                                    >{item}{isActive && <LyricBottom lyric={item} />}</div>
                                )
                            })
                        }
                    </div>
                </BottomRight>
            </div>
        </Wrapper>
    )
})