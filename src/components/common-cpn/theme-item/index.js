import React, { memo } from 'react'

import { Wrapper } from './style'
import { playTimes } from '@/utils/handle-data.js'

export default memo(function(props){
    let { picUrl, name, copywriter, id, playCount} = props

    return (
        <Wrapper onClick={() => console.log(id)}>
            <div className='cover-top'>
                <img src={picUrl+'?param=140x140'} alt=''></img>
                <div className='cover sprite_cover'>
                    <div className='info sprite_cover'>
                        <span>
                            <i className='sprite_icon erji'></i>
                            {playTimes(playCount)}
                        </span>
                        <i className='sprite_icon play'></i>
                    </div>
                </div>              
            </div>
            <div className='cover-bottom text-nowrap'>{name}</div>
            <div className='cover-source'>{'by ' + copywriter}</div>
        </Wrapper>
    )
})