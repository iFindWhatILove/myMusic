import React,{ memo } from 'react'
import classnames from 'classnames'

import { Wrapper } from './style'

export default memo(function(props){
    let { coverImgUrl, name, updateFrequency, isChoosen } = props

    return <Wrapper className={classnames({active: isChoosen})}>
        <img src={coverImgUrl} alt=''></img>
        <div className='info'>
            <div className='name'>{name}</div>
            <div className='update'>{updateFrequency}</div>
        </div>
    </Wrapper>
})

//param=40y40