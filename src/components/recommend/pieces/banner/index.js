import { memo, useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Carousel } from 'antd'

import { getBanner } from 'pages/discover/reducer/actionCreator'

import { Wrapper, Banner, ImageLink, BtnWrapper } from './style'

export default memo(function () {
    const [current, setCurrent] = useState(0)

    const bannerCpn = useRef()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBanner())
    }, [dispatch])

    let { banner } = useSelector(state => ({
        banner: state.getIn(['discoverInfo', 'banner'])
    }))

    banner = banner.banners || []

    let bgUrl = banner[current] && banner[current].imageUrl && banner[current].imageUrl + '?imageView&blur=40x20'

    return (<Wrapper bgUrl={bgUrl}>
        <div className='wrap-v2'>
            <Banner>
                <Carousel effect="fade" autoplay={true} afterChange={(current) => {
                                    setCurrent(current)
                                }} ref={bannerCpn}>
                    {
                        banner.map((item) => {
                            return (
                                <div key={item.imageUrl} className='banner-item'>
                                    <img src={item.imageUrl} alt={item.typeTitle}></img>
                                </div>
                            )
                        })
                    }
                </Carousel>             
            </Banner>
            <ImageLink></ImageLink>
            <BtnWrapper>
                <button className="left common" onClick={() => bannerCpn.current.prev()}></button>
                <button className="right common" onClick={() => bannerCpn.current.next()}></button>
            </BtnWrapper>
        </div>
    </Wrapper>)
})