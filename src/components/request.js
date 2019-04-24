
import wepy from 'wepy'
import {DOMAIN} from '../components/contants'

export async function request(url, params) {
  if (!url) {
    throw new Error('The argument for url is nil or undefined')
  }
  if (typeof url !== 'string') {
    throw new Error('The argument for url is must be string type')
  }
  if (params) {
    if (typeof params !== 'object') {
      throw new Error('The argument for params is must be object type')
    }
  }
  url = DOMAIN.concat(url)
  let data = {}
  if (params) {
    data = params
  }

   let promis = wepy.request({
        url,
        data,
        method: 'post'
      })

  return promis
  // var innerRequest = function() {
  //   return new Promise((resolve, reject) => {
  //     wepy.request({
  //       url,
  //       data,
  //       method: 'post'
  //     }).then((r) => {
  //       // console.log(r)
  //       resolve(r.data)
  //     }).catch((e) => {
  //       // console.log(e)
  //       reject(e)
  //     })
  //   })
  // }
  // let result = await innerRequest()
  // return result
}

