import React,{ memo } from 'react'

import { Input, Button } from 'antd'

import { Right } from './style'


export default memo(function(){
    return (
        <Right>
            <Input placeholder="音乐/视频/电台/用户" size={'large'}
            prefix={<span className='anticon-search'></span>}>
            </Input>
            <Button type="primary" shape="round"  size={'large'} className='center'>
                创作者中心
            </Button>
            <div>登录</div>
        </Right>      
    )
})