import React from 'react'

import { Redirect } from 'react-router-dom'

const Discover = React.lazy(() =>  import('pages/discover/index'))
const Mine = React.lazy(() =>  import('pages/mine/index'))
const Friend = React.lazy(() =>  import('pages/friend/index'))

const Recommend = React.lazy(() => import('component/recommend/index'))
const Ranking = React.lazy(() => import('component/ranking/index'))
const Songs = React.lazy(() => import('component/songs/index'))
const Djradio = React.lazy(() => import('component/djradio/index'))
const Artist = React.lazy(() => import('component/artist/index'))
const Album = React.lazy(() => import('component/album/index'))

const routes = [
    {
        path: '/',
        exact: true,
        render: () => (
            <Redirect to='/discover'></Redirect>
        )
    },
    {
        path: '/discover',
        component: Discover,
        routes: [
            {
                path: '/discover',
                exact: true,
                render: () => (
                    <Redirect to='/discover/recommend'></Redirect>
                )
            },
            {
                path: '/discover/recommend',
                component: Recommend,
            },{
                path: '/discover/ranking',
                component: Ranking,
            },{
                path: '/discover/songs',
                component: Songs,
            },{
                path: '/discover/djradio',
                component: Djradio,
            },{
                path: '/discover/artist',
                component: Artist,
            },{
                path: '/discover/album',
                component: Album,
            }
        ]
    },
    {
        path: '/mine',
        component: Mine
    },
    {
        path: '/friend',
        component: Friend
    }
]

export default routes