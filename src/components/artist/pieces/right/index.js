import React, { memo, useMemo } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import classnames from 'classnames'

import { Wrapper, RightMiddle } from './style'
import { changeChoosenItem, changeInitial } from '../../reducer/actionCreator'

import ItemThemeTitle from 'component/common-cpn/item-theme-title/index'
import RightBottomItem from '../right-bottom-item/index'

export default memo(function (props) {
    const dispatch = useDispatch()

    let { choosenItem, isShow,  artistList } = useSelector(state => ({
        choosenItem: state.getIn(['artistInfo','choosenItem']),
        isShow: state.getIn(['artistInfo','isShow']),
        artistList: state.getIn(['artistInfo','artistList']),
    }),shallowEqual)

    const handleClick = useMemo(() => {
        return e => {
            let text = e.target.innerText

            dispatch(changeChoosenItem(text))
            if(text === '热门'){
                dispatch(changeInitial('-1'))
            }else if(text === '其他'){
                dispatch(changeInitial('0'))
            }else{
                dispatch(changeInitial(text))
            }          
        }
    },[dispatch,changeChoosenItem])

    let list = useMemo(() => {
        return () => {
            let res = ['热门']
            for(let i = 65;i <= 90;i++){
                let innerText = String.fromCharCode(i)  
                res.push(innerText)
            }
            res.push('其他')

            res = res.map(item => {
                return (
                    <div className={classnames('item',{
                        active: item === choosenItem
                    })} key={item} onClick={(e) => handleClick(e)}>
                        <span>{item}</span>
                    </div>
                )
            })
    
            return res
        }
    },[choosenItem]) 

    return (
        <Wrapper>
            <ItemThemeTitle title={props.choosenSinger}></ItemThemeTitle>
            <RightMiddle style={{display: isShow?'flex':'none'}}>
                {list()}
            </RightMiddle>
            <div className='artist-list'>
                {
                    artistList.map((item,index) => {
                        let { name, picUrl, id } = item
                        let image = null

                        if(index <= 9){
                            image = <img src={picUrl + '?param=130y130'}></img>
                        }

                        return <RightBottomItem name={name} image={image} key={id}></RightBottomItem>
                    })
                }
            </div>
        </Wrapper>
    )
})