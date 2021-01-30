import React,{ memo, useMemo } from 'react'
import { NavLink } from 'react-router-dom'

import { Wrapper } from './style'

import { eventBus } from '@/index.js'

export default memo(function(){
    const handleClick = useMemo(() => {
        return () => {
            eventBus.emit('activeIndex')  // 发出事件 
        }
    })

    return (
        <Wrapper>
            <div className='content wrap-v2'>
                <div className='pic'>
                    <NavLink className='login' to='/discover' 
                    onClick={() => handleClick()}>立即登录</NavLink>
                </div>
            </div>
        </Wrapper>
    )
})