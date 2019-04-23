
import wepy from 'wepy'

export class RequestConfig {
  constructor() {
    this.header = {'token': 'asdjadkaldjakldjaw'}
    // this.header =
    console.log(this.header)
  }
  // // 自定义请求头
  // setCustomHeader() {
  //
  // }

  post() {
    console.log('post is running')
  }
}


// export function post(url, configHandler) {
//   // console.log('post is running')
//   // let promise = new Promise((resolve, reject) => {
//   //   setTimeout()
//   // })
//   let config = new RequestConfig()
//
//    configHandler()
//   wepy.request({
//     url:
//   })
// }


// 创建一个类
// export class Student {
//   constructor(name) {
//     this.name = name
//   }
//   hello() {
//     // alert(')
//     console.log('Hello, ' + this.name + '!')
//   }
// }

// var requestConfigModel = {
//   domain: '',
//   api: '',
//   token: ''
// }
//
// export function POST(url, configHandler) {
//   wepy.request({
//     url: url
//   })
// }
//
// // var request = new Object({
// //
// //   POST: function() {
// //     console.log('post is running')
// //   }
// // })
// // // export module1
// //
// // module.exports(request)
//
// // export default module Request1 {
// //   POST() {
// //     console.log('post is running')
// //   }
// // }


// export default request
