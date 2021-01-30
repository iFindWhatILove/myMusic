import React, { memo, useMemo } from 'react'
import classnames from 'classnames'
import { useDispatch } from 'react-redux'

import { Wrapper } from './style'
import { changeChoosenSinger, changeIsShow, changeType, changeArea } from '../../reducer/actionCreator'

export default memo(function (props) {
    const dispatch = useDispatch()

    let { title, area, artists, choosenSinger } = props

    const handleClick = useMemo(() => {
        return (type,area,name) => {
            dispatch(changeType(type))
            dispatch(changeArea(area))
            if(area === -1){
                dispatch(changeIsShow(false))
            }else{
                dispatch(changeIsShow(true))
            }
            dispatch(changeChoosenSinger(name))
        }
    },[dispatch,changeChoosenSinger,changeIsShow]) 

    return (
        <Wrapper>
            <h2 className='title'>{title}</h2>
            <div>
                {
                    artists.map(item => {
                        let { name, type, url } = item

                        return (
                            <div className='item' key={url}
                            onClick={() => handleClick(type,area,name)}>
                                <span className={classnames({
                                    active: choosenSinger === name
                                })}>{name}</span>
                            </div>
                        )
                    })
                }
            </div>
        </Wrapper>
    )
})