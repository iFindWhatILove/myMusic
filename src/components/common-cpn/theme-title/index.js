import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { Wrapper } from './style'

const ThemeTitle = memo(function(props){
    let { title, keyword } = props

    return (<Wrapper className='sprite_02'>
        <div className='left'>
            <h3>{title}</h3>
            <div className="keyword" >
                {keyword.map(item => {
                    return (
                        <div className='item' key={item}>
                            <div className='link'>{item}</div>
                            <div className='divider'>|</div>
                        </div>
                    )
                })}
            </div>
        </div>
        <div className='right'>
            <a href='#/discover/songs'>更多</a>
            <i className='icon sprite_02'></i>
        </div>
    </Wrapper>)
})

ThemeTitle.defaultProps = {
    keyword: []
}

ThemeTitle.propTypes = {
    title: PropTypes.string.isRequired,
    keyword: PropTypes.array,
}

export default ThemeTitle