import React, { Fragment, memo } from 'react'
import { useSelector } from 'react-redux'

import { Wrapper } from './style'
import ItemThemeTitle from 'component/common-cpn/item-theme-title/index'

import { formatMsToS } from '@/utils/handle-data.js'

export default memo(function () {
    let { topListDetail } = useSelector(state => ({
        topListDetail: state.getIn(['rankingInfo', 'topListDetail'])
    }))


    let { trackCount, playCount, tracks } = topListDetail


    let title = '歌曲列表'
    let count = `${trackCount}首歌`
    let right = <Fragment>
        <span>播放：</span>
        <span style={{ color: '#c20c0c' }}>{playCount}</span>
        <span>次</span>
    </Fragment>

    return <Wrapper>
        <ItemThemeTitle title={title} count={count} right={right}></ItemThemeTitle>
        <div className='play-list'>
            <table>
                <thead>
                    <tr className='header'>
                        <th className='ranking'></th>
                        <th className='title'>标题</th>
                        <th className='duration'>时长</th>
                        <th className='singer'>歌手</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (tracks || []).map((item,index) => {
                            let {al: { name,picUrl }, ar:[{name: artistName}], dt, id } = item

                            return (
                                <tr key={id}>
                                    <td>
                                        <div className='rank-num'>
                                            <span className='num'>{index + 1}</span>
                                            <span className='new sprite_icon2'></span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='song-name'>
                                            <img src={`${picUrl}?param=50y50`} alt=''></img>
                                            <span className='play sprite_table'></span>
                                            <span className='name'>{name}</span>
                                        </div>
                                    </td>
                                    <td>{formatMsToS(dt)}</td>
                                    <td>{artistName}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </Wrapper>
})