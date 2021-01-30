import playConstantName from './constant'

import { getMusicDetail, getLyric } from 'service/play.js'

export function changePlayList(playList){
    return {
        type: playConstantName.PLAY_LIST,
        playList,
    }
}

export function changeCurrentPlayIndex(len,bool=true,index=null){ //len 为数组长度 bool为true表示播放下一首歌

    if(index){  //如果有指定播放某一首，就直接播放，index传这一首在 playList 的下标，范围 0 - len
        return {
            type: playConstantName.CURRENT_PLAY_INDEX,
            currentPlayIndex: index,
        }
    }

    return (dispatch,getState) => {
        let currentPlayIndex = getState().getIn(['playInfo','currentPlayIndex'])
        let playMethods = getState().getIn(['playInfo','playMethods'])

        switch(playMethods){
            case 0:
                if(bool){  //播放下一首
                    currentPlayIndex += 1; 
                    if(currentPlayIndex >= len){
                        currentPlayIndex = 0
                    }
                }else{ //播放上一首
                    currentPlayIndex -= 1;
                    if(currentPlayIndex < 0){
                        currentPlayIndex += len
                    }
                }
                
                break
            case 1:
                currentPlayIndex = Math.floor((Math.random()*len))
                break
            default:
                return
        }

        dispatch( {
            type: playConstantName.CURRENT_PLAY_INDEX,
            currentPlayIndex, 
        })
    }

}

export function changePlayMethods(){ 

    return (dispatch,getState) => {
        let num = getState().getIn(['playInfo','playMethods']) // 获取之前的 播放方式的代数
        num = num + 1
        if(num > 2){
            num = 0
        }

        dispatch({
            type: playConstantName.PLAY_METHODS,
            playMethods: num
        })
    }

}

export function changeAutoPlay(){

    return (dispatch,getState) => {
        let autoPlay = getState().getIn(['playInfo','autoPlay'])

        dispatch({
            type: playConstantName.AUTO_PLAY,
            autoPlay: !autoPlay,
        })
    }

}

export function changeSongsTotalTime(songsTotalTime){ 
    return {
        type: playConstantName.SONGS_TOTAL_TIME,
        songsTotalTime,
    }
}

export function changeCollectionDetailList(){
    return (dispatch,getState) => {
        const ids = getState().getIn(['playInfo','playList']).toString()
        getMusicDetail(ids).then(res => {
            dispatch({
                type: playConstantName.COLLECTION_DETAIL_LIST,
                collectionDetailList: res.songs
            })
        }).catch(err => {
            console.log(err)
        })
    }
}

export function changeLyric(){
    return (dispatch,getState) => {
        const playList = getState().getIn(['playInfo','playList'])
        const currentPlayIndex = getState().getIn(['playInfo','currentPlayIndex'])
        const id = playList[currentPlayIndex]

        getLyric(id).then(res => {
            dispatch({
                type: playConstantName.LYRIC,
                lyric: res.lrc.lyric
            })
        }).catch(err => {
            console.log(err)
        })
    }
}