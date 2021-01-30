import React,{ memo } from 'react'

import { Wrapper } from './style'
import { Title } from '../resident-singer/style'

import { hotRadios } from '@/service/local-data.js'

export default memo(function(){
    return (
        <Wrapper>
            <Title>
                <h3>热门主播</h3>
                <a href='/abc'> </a>
            </Title>
            <div className='radio-list'>
                {
                    hotRadios.map(item => {
                        let { url, picUrl, name, position } = item

                        return (
                            <div className='item' key={url}>
                                <a href='/abc' className='image'>
                                    <img src={picUrl} alt=''></img>
                                </a>
                                <div className='info'>
                                    <div className='name'>{name}</div>
                                    <div className='position text-nowrap'>{position}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </Wrapper>
    )
})