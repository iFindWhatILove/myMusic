export function debounce(fn,wait){
    let timer = null

    return (...res) => {
        if(timer){
            clearTimeout(timer)
        }

        timer = setTimeout(() => fn(...res),wait)
    }
}