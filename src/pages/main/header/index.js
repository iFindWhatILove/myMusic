import React,{ memo } from 'react'

import { Header } from './style'

import Left from './left/index'
import Right from './right/index'

export default memo(function(){
    return (
        <Header>
            <div className="wrap-v1">
                <Left></Left>
                <Right></Right>
            </div>
            <div className="divider"></div>
        </Header>
    )
})