import { Map } from 'immutable'

import playConstantName from './constant'

const initial = Map({
    playList: [ 167876, 411214279, 1382596189 ],
    currentPlayIndex: 0,
    playMethods: 0, //0：顺序播放 1：随机播放 2：单曲播放
    autoPlay: true, //是否自动播放，当点击下一首，上一首，当前歌曲播放结束时，他会变成另一个与原来不同的值
    songsTotalTime: 0, //歌曲时长

    collectionDetailList: [],
    lyric: '',
})

export default function reducer(state=initial,action){
    switch(action.type){
        case playConstantName.PLAY_LIST:
            return state.set('playList',action.playList)
        case playConstantName.CURRENT_PLAY_INDEX:
            return state.set('currentPlayIndex',action.currentPlayIndex)
        case playConstantName.PLAY_METHODS:
            return state.set('playMethods',action.playMethods)
        case playConstantName.AUTO_PLAY:
            return state.set('autoPlay', action.autoPlay)
        case playConstantName.SONGS_TOTAL_TIME:
            return state.set('songsTotalTime',action.songsTotalTime)
        case playConstantName.COLLECTION_DETAIL_LIST:
            return state.set('collectionDetailList',action.collectionDetailList)
        case playConstantName.LYRIC:
            return state.set('lyric',action.lyric)
        default:
            return state
    }
}