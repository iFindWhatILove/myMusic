import axios from 'axios'

import { TIMEOUT, baseURL } from './config'

export default function request(options){
    const instance = axios.create({
        timeout: TIMEOUT,
        baseURL,
    })

    instance.interceptors.request.use(config => {
        //一些操作
        return config
    }, err => {
        return err
    })

    instance.interceptors.response.use(response => {
        return response.data
    }, err => {
        if(err && err.response){
            switch(err.response.status){
                case 400:
                    err.message = '请求错误'
                    break
                case 401:
                    err.message = '未授权访问'
                    break
                default:
                    err.message = '出错了'
            }
        }
        return err
    })

    return instance(options)
}