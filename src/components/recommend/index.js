import React,{ memo } from 'react'

import { Wrapper, Left, Right } from './style'

import Banner from './pieces/banner/index'
import HotRecommend from './pieces/hot-recommend/index'
import NewAlbum from './pieces/new-album/index'
import Tops from './pieces/tops/index'
import Login from './pieces/login/index'
import ResidentSinger from './pieces/resident-singer/index'
import HotArtist from './pieces/hot-artist/index'


export default memo(function(){
    return (
        <div>
            <Banner></Banner>
            <Wrapper>
                <Left>
                    <HotRecommend></HotRecommend>
                    <NewAlbum></NewAlbum>
                    <Tops></Tops>
                </Left>
                <Right>
                    <Login></Login>
                    <ResidentSinger></ResidentSinger>
                    <HotArtist></HotArtist>
                </Right>
            </Wrapper>
        </div>
    )
})