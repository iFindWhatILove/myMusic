import React,{ memo } from 'react'

import Header from './header/index'
import Footer from './footer/index'
import Article from './article/index'
import Play from './play/index'

export default memo(function(){
    return <div>
        <Header></Header>
        <React.Suspense fallback={<div>loading</div>}>
        <Article></Article>
        </React.Suspense> 
        <Footer></Footer>
        <Play></Play>
    </div>
})