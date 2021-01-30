export function playTimes(num){
    let temp = num/100000000
    if(temp > 1){
        return temp.toFixed(1) + '亿'
    }
    return (num/10000).toFixed(1) + '万'
}

//将传过来的毫秒做单位的时间转为固定格式，比如 1000 转为 0:01
export function formatMsToS(num){
    let second = Math.floor(num/1000)
    let minute = Math.floor(second/60)

    return `${minute.toString().padStart(2,0)}:${(second%60).toString().padStart(2,0)}`
}

export function formatLyric(lyrics){
    let reg = /\n/gi
    const array = lyrics.split(reg)

    let reg2 = /\[(\d{2}:\d{2}\.\d+)\](.*)/g

    const time = array.map(item => { //获取所有时间
        return item.replace(reg2,'$1')
    }).slice(0,-1)

    const lyric = array.map(item => {
        return item.replace(reg2,'$2')
    }).slice(0,-1)

    return {
        time,
        lyric
    }
}

export function formatLyricTime(time){
    const str = time + ''
    const reg = /\./g
    const array = str.split(reg)

    const minute = (Math.floor(array[0]/60) + '').padStart(2,0)
    const second = (array[0]%60 + '').padStart(2,0)
    const mileSecond = array[1]

    return `${minute}:${second}.${mileSecond}`
}

export function formatUpdateTime(time){
    const date = new Date(time)

    const month = date.getMonth() + 1  //获取月份
    const day = date.getDate()  //获取日期

    return `${month}月${day}日`
}