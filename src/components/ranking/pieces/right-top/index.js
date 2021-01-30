import React,{ memo } from 'react'
import { useSelector } from 'react-redux'

import { Wrapper, Operator } from './style'

import { formatUpdateTime } from '@/utils/handle-data.js'

export default memo(function(){

    let { topListDetail } = useSelector(state => ({
        topListDetail: state.getIn(['rankingInfo','topListDetail'])
    }))

    let { coverImgUrl, name, updateTime, commentCount, shareCount, subscribedCount } = topListDetail

    return (
        <Wrapper>
            <div className='image'>
                <img src={coverImgUrl} alt=''></img>
                <span className='image_cover'>封面</span>
            </div>
            <div className='info'>
                <div className='title'>{name}</div>
                <div className='time'>
                    <i className='clock sprite_icon2'></i>
                    <div>最近更新：{formatUpdateTime(updateTime)}</div>
                    <div className='update-f'>（每日更新:TODO）</div>
                </div>
                <Operator>
                    <span className='play'>
                        <a href='/abc' className='play-icon sprite_button'>
                            <span className='play sprite_button'>
                                <i className='sprite_button'></i>
                                <span>播放</span>
                            </span>                          
                        </a>
                        <a href='/abc' className='add-icon sprite_button'> </a>
                    </span>
                    <a href='/abc' className='item sprite_button'>
                            <i className='icon favor-icon sprite_button'>({subscribedCount})</i>
                    </a>
                    <a href='/abc' className='item sprite_button'>
                        <i className='icon share-icon sprite_button'>({shareCount})</i>
                    </a>
                    <a href='/abc' className='item sprite_button'>
                        <i className='icon download-icon sprite_button'>下载</i>
                    </a>
                    <a href='/abc' className='item sprite_button'>
                        <i className='icon comment-icon sprite_button'>({commentCount})</i>
                    </a>
                </Operator>
            </div>
        </Wrapper>
    )
})

// /playlist/detail?id=24381616
// coverImgUrl, name, id, updateTime: 1608336485250, commentCount, shareCount, subscribedCount

// tracks: [{al{ name:'踏山河',picUrl }, ar:[{name:'是七叔呢'}], dt:168139 }], trackCount, playCount