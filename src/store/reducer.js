import { combineReducers } from 'redux-immutable'

import { reducer as discoverInfo } from 'pages/discover/reducer/index'
import { reducer as playInfo } from 'pages/main/play/reducer/index'
import { reducer as rankingInfo } from 'component/ranking/reducer/index'
import { reducer as songsInfo } from 'component/songs/reducer/index'
import { reducer as djradioInfo } from 'component/djradio/reducer/index'
import { reducer as artistInfo } from 'component/artist/reducer/index'
import { reducer as albumInfo } from 'component/album/reducer/index'

const reducer = combineReducers({
    discoverInfo,
    playInfo,
    rankingInfo,
    songsInfo,
    djradioInfo,
    artistInfo,
    albumInfo,
})

export default reducer