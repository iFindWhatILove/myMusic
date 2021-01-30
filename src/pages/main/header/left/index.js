import React, { memo, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'

import { HeaderLeft } from './style'

import { headerLinks } from '@/service/local-data'

export default memo(function () {
    const [choosenItem, setChoosenItem] = useState('/discover')

    const hashChangeFn = () => {
        let reg = /#(?<hash>\/[a-z]+)/
        let res = window.location.hash.match(reg).groups.hash
        setChoosenItem(res)
    }

    useEffect(() => {
        window.onhashchange = hashChangeFn

        return () => {
            window.removeEventListener('hashchange', hashChangeFn)
        }
    })

    const titles = function (item, index) {
        if (index < 3) {
            return (<NavLink to={item.link}
            >{item.title}
                <i className='sprite_01 icon'></i>
            </NavLink>)
        } else {
            return (<a href={item.link} target='_blank' rel="noreferrer"
            >{item.title}
                <i className='sprite_01 icon'></i>
            </a>)
        }
    }

    return (
        <HeaderLeft>
            <a className="sprite_01 logo" href="#/" onClick={() => setChoosenItem('/discover')}> </a>
            <div className="select-list">
                {headerLinks.map((item, index) => {
                    return (
                        <div key={item.link}
                            className={classNames('select-item', { 'active': item.link === choosenItem })}
                            onClick={() => {
                                if (index <= 2) {
                                    setChoosenItem(item.link)
                                }
                            }}>
                            {titles(item, index)}
                        </div>
                    )
                })}
            </div>
        </HeaderLeft>
    )
})