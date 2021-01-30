import React,{ memo } from 'react'

import { Wrapper } from './style'

import FirstPart from './pieces/first-part/index'
import SecondPart from './pieces/second-part/index'
import ThirdPart from './pieces/third-part/index'

export default memo(function(){
    return (
        <Wrapper className="wrap-v2">
            <FirstPart></FirstPart>
            <SecondPart></SecondPart>
            <ThirdPart></ThirdPart>
        </Wrapper>
    )
})

// /dj/catelist