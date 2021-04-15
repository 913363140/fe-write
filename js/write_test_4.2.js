// https://juejin.cn/post/6946136940164939813

// 1. create
// 作为新对象的原型返回
function create(obj) {
  function f(){}
  f.prototype = obj
  return new f()
}

// 2. instanceof
function _instanceof(left, right) {
  left = left.__proto__
  right = right.prototype
  while(true) {
    if (left === null) return false
    if (left === right) return true
    left = left.__proto__
  }
}

// 3. new 
function _new (parent, ...args) {
  let child = Object.create(parent.prototype)
  let res = parent.apply(child, args)
  return typeof res === 'object' ? res : child
}

// 4. promise
class Promise1 {
  constructor(exector) {
    this.state = 'pending'
    this.value = undefined
    this.reason = undefined
    this.fulfilledCbs = []
    this.rejectedCbs = []
    try {
      exector(this.resolve.call(this), this.reject.call(this))
    } catch(e) {
      this.reject(e)
    }
  }
  static resolve(val) {
    if (this instanceof Promise) {
      return val.then(resolve, reject)
    }
    if (this.state === 'pending') {
      this.value = val
      this.state = 'fulfilled'
      this.fulfilledCbs.map(fn => {
        fn(val)
      })
    }
  }
  static reject(err) {
    if (this.state === 'pending') {
      this.reason = err
      this.state = 'rejected'
      this.rejectedCbs.map(fn => {
        fn(val)
      })
    }
  }
  then(onFulfilled, onRejected) {
    // 保存前一个promise的this
    const self = this
    return new Promise((resolve, reject) => {
      // 封装前一个promise的成功函数
      let fulfilled = () => {
        try {
          const result = onFulfilled(self.value) //承前
          return result instanceof Promise ? result.then(resolve, reject) : resolve(result) // 启后
        } catch(e) {
          reject(e)
        }
      }
      let rejected = () => {
        try {
          const result = onRjected(self.reason)
          return result instanceof Promsie ? result.then(resolve,reject) : reject(result)
        } catch (e) {
          reject(e)
        }
      }
      switch (this.state) {
        case 'pending':
          self.onFulfilled.push(onFulfilled)
          self.onRejected.push(onRjected)
          break;
        case 'fulfilled':
          fulfilled()
        case 'rejected':
          rejected()
        default:
          break;
      }
    })
    // onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val => val
    // onRjected = typeof onRejected === 'function' ? onRejected : err => throw err

    // if (this.state === 'pending') {
    //   this.fulfilledCbs.push(onFulfilled)
    //   this.rejectedCbs.push(onRejected)
    // }

    // if(this.state === 'fulfilled') {
    //   onFulfilled(this.value)
    // }
    // if(this.state === 'rejected') {
    //   onRejected(this.value)
    // }
  }
  all(list) {
    return new Promise((resolve, reject) => {
      let values = []
      let count = 0
      for (let i = 0;i<list.length; i++) {
        Promise.resolve(list[i]).then(res => {
          values[i] = res
          count++
          if(count === list.length) {
            resolve(values)
          }
        }, err => reject(err))
      }
    })
  }
  race(list) {
    return new Promise((resolve, reject) => {
      for(let i =0; i< list.length; i++) {
        Promise.resolve(list[i]).then(res => {
          resolve(res)
        }, e => reject(e))
      }
    })
  }
}

// 5. promise.then
// 6. promise.all
// 7. promise.race

// 8. 防抖
const debounce  = (fn, wait) => {
  let timer = null
  return (...args) => {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, wait);
  }
}

// 9. 节流
const throttle = (fn, wait) =>{
  let timer = null
  return (...args) => {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, args)
        timer = null
      }, wait);
    }
  }
}

// 10. 手写函数类型判断
function getType(val) {
  if (val === null) {
    return val + ''
  }
  if (typeof val === 'object') {
    let type = Object.prototype.toString.call(val).slice(8, -1)
    return type.toLowerCase()
  } else {
    return typeof val
  }
}

// test
// console.log('getType([]) :>> ', getType([]))
// console.log('getType([]) :>> ', getType({}))

// 11. call
Function.prototype._call = function(context, ...args) {
  if (typeof context !== 'function')  {
    throw TypeError('not callable') 
  }
  context = context || {}
  context.fn = this
  const res = context.fn(...args)
  delete context.fn
  return res
}

// 12. apply
Function.prototype._apply = function (context, ...args) {
  if (typeof context !== 'function') {
    throw TypeError('context not callable')
  }
  context.fn = this
  let res 
  if (args.length) {
    res = context.fn(...args)
  } else {
    res = context.fn()
  }
  delete context.fn
  return res
}

// 13. bind
Function.prototype._bind = function (context, ...args) {
  const _this = this
  return function f (...inArgs) {
    if (this instanceof f) {
      return _this(...args, ...inArgs)
    } else {
      return _this.apply(context, args.concat(...inArgs))
    }
  }
}

// 14. 函数柯里化
function curry(fn, ...args) {
  return fn.lenth < args.length ? fn(...args) : curry.bind(null, fn, ...args)
}

// 15. 实现一个ajax
function ajax(url, type, success, error) {
  let xhr = new XMLHttpRequest()
  xhr.open(type, url)
  xhr.onReadyStateChange = function () {
    if (this.readyState !== 4) return 
    if (this.status === 200) {
      success(this.response)
    }else {
      // error(this.statusText)
    }
  }
  xhr.oneror = error
  xhr.responseType = 'json'
  xhr.setRequestHeader('Accept', 'applicaton/json')
  xhr.send(null)
}

// 16. 用Promise实现一个ajax

function getJson(url, type) {
  return new Promise((resolve, reject) => {
    // 15题的
    ajax(url, type, resolve, reject)
  })
}