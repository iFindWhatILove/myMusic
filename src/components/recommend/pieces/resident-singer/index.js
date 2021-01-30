import React,{ memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual} from 'react-redux'

import { Wrapper, Title } from './style'

import { changeResidentSinger } from 'pages/discover/reducer/actionCreator.js'

const SingerItem = memo(function(props){
    let { picUrl, name, alias } = props
    picUrl = picUrl + '?param=62y62'
    alias = alias[0] || name

    return (
        <a href='/singer' className='item'>
            <img src={picUrl} alt=''></img>
            <div className='info'>
                <div className='title'>{alias}</div>
                <div className='name'>{name}</div>
            </div>
        </a>
    )
})

export default memo(function(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(changeResidentSinger())
    },[dispatch])

    let { residentSinger } = useSelector(state => ({
        residentSinger: state.getIn(['discoverInfo','residentSinger'])
    }),shallowEqual)
    
    return (
        <Wrapper>
            <Title>
                <h3>入驻歌手</h3>
                <a href='/abc'>查看全部</a>
            </Title>
            <div className='singer-list'>
                {
                    residentSinger.slice(0,5).map(item => {
                        return <SingerItem {...item} key={item.id}></SingerItem>
                    })
                }
            </div>
            <div className='apply-for'>
                <a href='/abc'>申请成为网易音乐人</a>
            </div>
        </Wrapper>
    )
})//alias picUrl?param=62y62 name