import React,{ memo, useEffect, useState, useRef, useMemo } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { Slider } from 'antd'

import { Wrapper, Left, Middle, Right } from './style'

import { changeCurrentPlayIndex, changePlayMethods, changeAutoPlay, changeSongsTotalTime } from './reducer/actionCreator'
import Volume from './pieces/volume/index'
import Lyric from './pieces/lyric/index'

import { getMusicUrl, getMusicDetail } from '@/service/play'
import { formatMsToS, formatLyricTime } from '@/utils/handle-data.js'
//import { debounce } from '@/utils/common.js'

export default memo(function(){
    const dispatch = useDispatch()

    const handlePlay = function(){
        setIsPlaying(!isPlaying);
        if(isPlaying){// 由于 isPlaying 是异步更新，所以拿到的是前一次的值，当按按钮前为 true 即播放时
            audioRef.current.pause()
            clearInterval(timer)
        }else{ //按按钮前为停止，现在为播放
            setFirst(true)
            
            audioRef.current.play().then(err => {
                console.log(err)
            })
            const time = setInterval(() => { 
                setValue(++value); 
            },dt/100)
            
            setTimer(time)
        }
    }

    const handlePrev = function(){
        dispatch(changeAutoPlay())
        setFirst(true)

        if(playMethods !== 2){ // 如果不是单曲循环，就触发 changeCurrentPlayIndex
            dispatch(changeCurrentPlayIndex(len,false))        
        }  

        setIsPlaying(true)
        
    }

    const handleNext = function(){
        dispatch(changeAutoPlay())
        setFirst(true)

        if(playMethods !== 2){
            dispatch(changeCurrentPlayIndex(len))
        }

        setIsPlaying(true)
        
    }

    const getCurrentTime = function(){ 
        // audioRef.current.currentTime 是秒做单位的，要转为毫秒做单位
        setCurrentTime(formatMsToS(audioRef.current.currentTime*1000))
        setLyricTime(formatLyricTime(audioRef.current.currentTime))
    }

    function handleSliderFn(val){
        setValue(val)
           clearInterval(timer)
        if(isPlaying){
            const time = setInterval(() => {
                setValue(++val); 
            },dt/100)
            
            setTimer(time);
        }      

        audioRef.current.currentTime = dt/100000*val
    }

    let { playList, index, playMethods, autoPlay, dt } = useSelector(state => ({
        playList: state.getIn(['playInfo','playList']),
        index: state.getIn(['playInfo','currentPlayIndex']),
        playMethods: state.getIn(['playInfo','playMethods']),
        autoPlay: state.getIn(['playInfo','autoPlay']),
        dt: state.getIn(['playInfo','songsTotalTime'])
    }),shallowEqual)

    let playMethodsStyle = useMemo(() => {
        switch(playMethods){
            case 0:
                return 'loop'
            case 1:
                return 'random'
            case 2:
                return 'single'
            default:
                return 'loop'
        }
    },[playMethods])

    let len = useMemo(() => playList.length,[playList])

    const audioRef = useRef()
    const nextRef = useRef()
    const playRef = useRef()

    let [url, setUrl] = useState('')
    let [detail, setDetail] = useState('')
    let [tooltipVisible, setTooltipVisible] = useState(false)
    let [isPlaying, setIsPlaying] = useState(false)
    let [value, setValue] = useState(0)
    let [timer, setTimer] = useState()
    let [currentTime, setCurrentTime] = useState('00:00')
    let [display, setDisplay] = useState(false)
    let [volume, setVolume] = useState(0.5)
    let [first,setFirst] = useState(false) //如果是第一次进入，还没点播放键，就是 false
    let [showCollection, setShowCollection] = useState(false)
    let [lyRicTime, setLyricTime] = useState()
    let name, artist, imageUrl

    const handleChangeVolume = (val) => {
        
        setVolume(val/10)
    }

    const handlePlayMethodsClick = () => {
        dispatch(changePlayMethods())
    }

    const handlePropagation = (e) => {
        e.stopPropagation()
    }

    const handleCollection = () => {
        setShowCollection(!showCollection)
    }

    const repeatCode = useMemo(() => {  //一些重复代码
        return () => {
        setValue(0)
        let val = 0  

        clearInterval(timer)
        const time = setInterval(() => {
            setValue(++val)
        },dt/100)
        setTimer(time)
    }
    },[dt,timer])

    useEffect(() => {
        let id = playList[index]

        Promise.all([getMusicUrl(id),getMusicDetail(id)]).then(([res1,res2]) => {
            setUrl(res1.data[0]['url'])  //歌曲路径
            setDetail(res2.songs[0])  //歌曲名字，歌手，图片等信息
            dispatch(changeSongsTotalTime(res2.songs[0].dt))
        }).catch(err => {
            console.log(err)
        })

    },[playList,index,dispatch])

    if(detail){
        name = detail.name;
        artist = detail.ar[0]['name'];
        imageUrl = detail.al.picUrl;
    } 

    useEffect(() => { 
        audioRef.current.volume = volume
    },[volume])

    useEffect(() => {
        if(value >= 100){
            dispatch(changeAutoPlay())
            setFirst(true)

            if(playMethods !== 2){
                dispatch(changeCurrentPlayIndex(len))
            }
                      
        }
    },[value,len,dispatch,dt,timer,playMethods])

    useEffect(() => {
        if(url){
            audioRef.current.currentTime = 0
            audioRef.current.play().catch(err => {
                console.log(err)
            })

        }
       
    },[autoPlay, url])
    
    useEffect(() => {
     if(dt){
        setIsPlaying(true) 
        setFirst(true)
     }           

    },[playList])

    useEffect(() => {
        if(dt && first){ 
            repeatCode()
        }
    },[dt,autoPlay])

    let totalTime = useMemo(() => { 
        return formatMsToS(dt)
    },[dt])

    return (
        <Wrapper className='sprite_playbar'>
            <div className='wrap-v2'>
                <Left play={isPlaying}>
                    <button className='sprite_playbar btn prev' onClick={() => handlePrev()}></button>
                    <button className='sprite_playbar btn play' 
                    onClick={() => handlePlay()}
                    ref={playRef}></button>
                    <button className='sprite_playbar btn next' 
                    onClick={() => handleNext()} 
                    ref={nextRef}></button>
                </Left>
                <Middle>
                    <div className='image'>
                        <a href='#/discover/player'>
                            <img src={imageUrl + '?param=32y32'} alt=''></img>
                        </a>
                    </div>
                    <div className='info'>
                        <div className='song'>
                            <span className='song-name'>{name}</span>
                            <span className='singer-name'>{artist}</span>
                        </div>
                        <div className='progress'
                        onMouseEnter={() => setTooltipVisible(true)}
                        onMouseLeave={() => setTooltipVisible(false)}>
                            <Slider tooltipVisible={tooltipVisible} 
                            value={value}
                            onChange={value => handleSliderFn(value)}></Slider>
                            <div className='time'>
                                <span className='now-time'>{currentTime}</span>
                                <span className='divider'>/</span>
                                <span className='total-time'>{totalTime}</span>
                            </div>
                        </div>
                    </div>
                </Middle>
                <Right>
                    <div className='left'>
                        <button className='sprite_playbar btn favor'></button>
                        <button className='sprite_playbar btn share'></button>
                    </div>
                    <div className='right sprite_playbar'>
                        <button className="sprite_playbar btn volume"
                        onClick={() => setDisplay(!display)}>
                            <div className='volume-container'
                            style={{display:display?'block':'none'}}
                            onClick={e => handlePropagation(e)}>
                                <div className='volume-logo'>
                                    <Volume handleChangeVolume={handleChangeVolume}></Volume>
                                </div>
                            </div>                     
                        </button>
                        <button className={`sprite_playbar btn ${playMethodsStyle}`}
                        onClick={() => handlePlayMethodsClick()}></button>
                        <button className="sprite_playbar btn playlist"
                        onClick={() => handleCollection()}>{playList.length}</button>
                    </div>
                </Right>
            </div>
            <audio src={url} ref={audioRef} onTimeUpdate={() => getCurrentTime()}></audio>
            <div style={{display: showCollection?'block':'none'}}>
                <Lyric lyRicTime={lyRicTime}></Lyric>
            </div>         
        </Wrapper>
    )
})

// /song/url?id=33894312 获取音乐音频
// /lyric?id=33894312  获取歌词
// /song/detail?ids=347230 获取歌曲详情