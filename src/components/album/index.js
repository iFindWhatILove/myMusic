import React,{ memo } from 'react'

import { Wrapper } from './style'
import FirstPart from './first-part/index'
import SecondPart from './second-part/index'

export default memo(function(){
    return (
        <Wrapper className='wrap-v2'>
            <FirstPart></FirstPart>
            <SecondPart></SecondPart>
        </Wrapper>
    )
})