import React,{ memo } from 'react'

import { Wrapper } from './style'

export default memo(function(props){
    let { name, picUrl, nickname, programCount, subCount, id } = props

    return (
        <Wrapper onClick={() => console.log(id)}>
            <a href='/#'>
                <img src={picUrl} alt=''></img>
            </a>
            <div className='info'>
                <h2 className='title'>{name}</h2>
                <div className='nickname'>
                    <i className='sprite_icon2 left'></i>
                    {nickname}
                </div>
                <div className='count'>
                    <span className='phase'>{`共${programCount}期`}</span>
                    <span className='subscribe'>{`订阅${subCount}次`}</span>
                </div>
            </div>
        </Wrapper>
    )
})