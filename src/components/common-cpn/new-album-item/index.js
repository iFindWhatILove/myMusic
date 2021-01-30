import React,{ memo } from 'react'

import { Wrapper } from './style'

export default memo(function(props){
    let { picUrl, name, artistName } = props

    return (
        <Wrapper>
            <div className='album-image'>
                <img src={picUrl} alt=''></img>
                <a href='/abc' className='cover sprite_cover'>{name}</a>
            </div>
            <div className='album-info'>
                <div className='name text-nowrap'>{name}</div>
                <div className='artist'>{artistName}</div>
            </div>
        </Wrapper>
    )
})