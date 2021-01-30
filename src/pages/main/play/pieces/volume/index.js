import React, { memo } from 'react'
import { Slider } from 'antd'

export default memo(function(props){

    return <Slider max={10} vertical={true} defaultValue={5}
    onChange={(val) => { 
        props.handleChangeVolume(val)
    }}></Slider>
})