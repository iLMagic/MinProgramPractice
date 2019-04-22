
import {DOMAIN} from './contants'
import wepy from 'wepy'
export default {
  config: function(p) {
    console.log(DOMAIN)
    if (!p.url) {
      if (p.relativeUrl) {
        p.url = DOMAIN.concat(p.relativeUrl)
      }
    }
    if (!p.data) {
      p.data = {}
    }
    if (!p.method) {
      p.method = 'post'
    }
    if (!p.dataType) {
      p.dataType = 'json'
    }
    // 设置公共请求头
    // todo
    return p
  },
  success(res) {
    console.log(res)
    return res.data
  }
}
