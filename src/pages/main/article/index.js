import { memo } from 'react'

import { renderRoutes } from 'react-router-config'

import routes from '@/router/routes'

export default memo(function(){
    return (
        <div>
            {renderRoutes(routes)}
        </div>
        )
})