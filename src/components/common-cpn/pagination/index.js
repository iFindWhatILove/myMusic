import React,{ memo, useMemo } from 'react'
import classnames from 'classnames'

import { Wrapper, MiddleWrapper, PaginationWrapper } from './style'

export default memo(function(props){
    let { totalPage, currentPage, callback } = props

    const handleClick = (e) => {
        if(e.target.tagName === 'SPAN'){
            callback(+e.target.innerText)  //将当前页码传给父组件，让父组件自己决定如何更新页码
        }
    }

    const handleBtnClick = (newPage) => {
        if(newPage <= 0){
            newPage = 1
        }else if(newPage > totalPage){
            newPage = totalPage
        }
            callback(newPage)
    }

    const handleMiddle = useMemo(() => {
        return () => { 
            if(totalPage < 9){
                const arr = new Array(totalPage).fill(undefined)

                return (
                    <div className='container' onClick={(e) => handleClick(e)}>
                        {
                            arr.map((item,index) => {
                                return (
                                    <li className={classnames('page',{
                                        active: currentPage === index + 1
                                    })} key={index}>
                                        <span>{index + 1}</span></li>
                                )
                            })
                        }
                    </div>
                )
            }else{
                let isShow = currentPage <= 2
                let isShowing = currentPage === 1
                let isDisplay = currentPage === totalPage
                let isDisplaying = currentPage >= totalPage - 1

                return (
                    <div className='container' onClick={(e) => handleClick(e)}>
                        <li className='page' style={{display: currentPage <= 3?'none':'block'}}><span>1</span></li>
                        <li className='ellipsis' style={{display: currentPage <= 4?'none':'block'}}
                        onClick={() => handleBtnClick(currentPage - 5)}>•••</li>
                        <li className='page' style={{display: isDisplay?'block':'none'}}><span>{currentPage - 4}</span></li>
                        <li className='page' style={{display: isDisplaying?'block':'none'}}><span>{currentPage - 3}</span></li>
                        <li className='page' style={{display: isShow?'none':'block'}}><span>{currentPage - 2}</span></li>
                        <li className='page' style={{display: isShowing?'none':'block'}}><span>{currentPage - 1}</span></li>
                        <li className='page active'><span>{currentPage}</span></li>
                        <li className='page' style={{display: isDisplay?'none':'block'}}><span>{currentPage + 1}</span></li>
                        <li className='page' style={{display: isDisplaying?'none':'block'}}><span>{currentPage + 2}</span></li>
                        <li className='page' style={{display: isShow?'block':'none'}}><span>{currentPage + 3}</span></li>
                        <li className='page' style={{display: isShowing?'block':'none'}}><span>{currentPage + 4}</span></li>
                        <li className='ellipsis next' style={{display: currentPage >= totalPage-3?'none':'block'}}
                        onClick={() => handleBtnClick(currentPage + 5)}>•••</li>
                        <li className='page' style={{display: currentPage >= totalPage-2?'none':'block'}}><span>{totalPage}</span></li>
                    </div>
                )
            }
        }
    },[totalPage, currentPage])

    return (
      <PaginationWrapper>
        <Wrapper>
            <button className={classnames('control',{
                active: currentPage === 1
            })} title='Previous Page' onClick={() => handleBtnClick(currentPage - 1)}>{'< 上一页'}</button>
            <MiddleWrapper>
                { handleMiddle() }
            </MiddleWrapper>
            <button className={classnames('control',{
                active: currentPage === totalPage
            })} title='Next Page' onClick={() => handleBtnClick(currentPage + 1)}>{'下一页 >'}</button>
        </Wrapper>
      </PaginationWrapper>
    )
})