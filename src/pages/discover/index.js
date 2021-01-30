import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import classNames from 'classnames'

import { Title, Inner } from './style'
import { dicoverMenu } from '@/service/local-data'

export default memo(function (props) {

    return (
        <div>
            <Title>
                <Inner>
                    {dicoverMenu.map((item,index) => {
                        return <div className={classNames('item')} 
                        key={item.link}>
                            <NavLink to={item.link}>{item.title}</NavLink>
                        </div>
                    })}
                </Inner>
            </Title>
            { renderRoutes(props.route.routes) }
        </div>
    )

})