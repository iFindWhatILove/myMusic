import React,{ memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { Carousel } from 'antd'

import { changeDjCatelist, changeChoosenDjradio } from '../../reducer/actionCreator'

import { Wrapper, Middle, ItemWrapper } from './style'

const Item = memo(function(props){
    const dispatch = useDispatch()

    let { id, picMacUrl, name } = props
    let isActive = props.isActive || false

    return (
        <ItemWrapper key={id} className={isActive?"active":''} 
        onClick={() => dispatch(changeChoosenDjradio(id))}>
            <img src={picMacUrl}></img>
            <span>{name}</span>
        </ItemWrapper>
    )
})

export default memo(function(){
    const dispatch = useDispatch()

    let { djCatelist, choosenDjradio } = useSelector(state => ({
        djCatelist: state.getIn(['djradioInfo','djCatelist']),
        choosenDjradio: state.getIn(['djradioInfo','choosenDjradio']),
    }),shallowEqual)

    useEffect(() => {
        dispatch(changeDjCatelist())
    },[dispatch])

    return (
        <Wrapper>
            <div className='arrow arrow-left'></div>
            <Middle>
                <Carousel>
                    <div className='container'>
                        {
                            djCatelist.map(item => {
                                let { id, picMacUrl, name } = item

                                return <Item id={id} picMacUrl={picMacUrl} 
                                name={name} key={id} isActive={choosenDjradio === id}></Item>
                            })
                        }
                    </div>
                </Carousel>
            </Middle>
            <div className='arrow arrow-right'></div>
        </Wrapper>
    )
})

// picMacUrl name id