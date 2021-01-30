import React,{ memo } from 'react'

import { Wrapper } from './style'

export default memo(function(props){
    return (
        <Wrapper>
            <div className='left'>
                <h3 className='title'>{props.title}</h3>
                <div className='count'>{props.count}</div>
            </div>
            <div className='right'>{props.right}</div>
        </Wrapper>
    )
})