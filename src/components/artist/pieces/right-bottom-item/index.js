import { checkPropTypes } from 'prop-types'
import React, { memo } from 'react'

import { Wrapper } from './style'

export default memo(function(props){
    return (
        <Wrapper>
            <div className='image'>{props.image}</div>
            <div className='info'>
                <span className='name'>{props.name}</span>
                <i className='sprite_icon2 icon'></i>
            </div>
        </Wrapper>
    )
})