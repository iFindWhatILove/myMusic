import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { changeAllSongsSort } from '../../reducer/actionCreator'

import { Wrapper } from './style'
import { allSongsType } from '@/service/local-data.js'

export default memo(function (props) {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(changeAllSongsSort())
    }, [dispatch])

    let { allSongsSort } = useSelector(state => ({
        allSongsSort: state.getIn(['songsInfo', 'allSongsSort'])
    }),shallowEqual)

    return (
        <Wrapper>
            {
                allSongsType.map((item, index) => {
                    return (
                        <dl className={`item${index}`} key={item}>
                            <dt>
                                <i className='icon sprite_icon2'></i>
                                <span>{item}</span>
                            </dt>
                            <dd>
                                {
                                    allSongsSort.filter(item => item.category === index).map(item => {
                                        return (
                                            <div className='item' key={item.name}>
                                                <span className='link' onClick={() => props.handleClick(item.name)}>{item.name}</span>
                                                <span className='divider'>|</span>
                                            </div>
                                        )
                                    })
                                }
                            </dd>
                        </dl>
                    )
                })
            }
        </Wrapper>
    )
})