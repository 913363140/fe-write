// 来源：https://juejin.cn/post/6875152247714480136#heading-0
// @Date: 2021.3.25
// @Author: im_happy

// 1. 数组扁平化
const flatten = arr => {
  return arr.reduce((acc, cur) => {
    return acc.concat(Array.isArray(cur) ? flatten(cur): cur)
  },[])
}

let flatten_arr = [[1,2,3],[4,5,6,[7,8,9]]]
console.log('flatten :>> ', flatten(flatten_arr))

// 2. 数组去重
const unique = arr => {
  let map = new Map()
  return arr.filter(item => !map.has(item) && map.set(item, true))
}

let unique_arr = [1,1,'1','1', NaN, NaN, {a:1}, {a:1}, "{a:1}", "{a:1}"]
console.log('unique :>> ', unique(unique_arr))

// 3. 类数组转化为数组
// [...arguments]
// Array.prototype.slice.call(arguments)

// 4. 实现apply
Function.prototype.myApply = function(context, ...args) {
  if (typeof context !== 'function') {
    throw new TypeError('myApply - be bound is not callable')
  }
  context = context || {}
  context.fn = this
  const res = context.fn(args)
  delete context.fn
  return res
}

// 5. 实现call
Function.prototype.myCall = function(context, ...args) {
  if (typeof context !== 'function')  {
    throw new TypeError('mycall be bound is not callable')
  }
  context = context || {}
  context.fn = this
  const res = context.fn(...args)
  delete context.fn
  return res 
}

// 6. 实现bind
Function.prototype.myBind = function (context, ...args) {
  const _this = this
  return function F() {
    if(this instanceof F) {
      return new _this(...args, ...arguments)
    } else {
      return _this.apply(context, args.concat(...arguments))
    }
  }
}

Function.prototype.myBind2 = function (context, ...args) {
  const _this = this
  let fNOP = function() {}
  let fBound = function () {
    return _this.apply(this instanceof FNOP ? this : context, args.concat(...arguments))
  }
  fNOP.prototype = this.prototype
  fBound.prototype = new fNOP()
  return fBound
}

// 7. debounce
const debounce = (fn, wait) => {
  let timer = null
  return (...args) => {
    if(timer){
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, wait);
  }
}

// 8. throttle 
const throttle = (fn, wait) => {
  let timer = null
  return (...args) => {
    if (!timer) 
    timer = setTimeout(() => {
      fn.apply(this, args)
      timer = null
    }, wait);
  }
}

// 9. add(1)(2)(3)
const add = function (...args) {
  let _args = args.slice()
  const fn = (...inArgs) => {
    _args.push(...inArgs)
    return fn
  }
  fn.toString = () => {
    return _args.reduce((acc, cur) => acc+=cur, 0)
  }
  return fn
}

// 10. 模拟New
function myNew(Parent, ...args) {
  let Child = Object.create(Parent.prototype)
  let res = Parent.apply(Child, args)
  return typeof res === 'object' ? res : Child
}

// 11. instanceof
function _instanceof(left, right) {
  left  = left.__proto__
  right = right.prototype
  while(true) {
    if (left ===null) {
      return false
    }
    if (left === right) {
      return true
    }
    left = left.__proto__
  }
}

// 12. 原型继承
// 寄生组合继承
function Parent() {
  this.name = 'parent'
}

function Child() {
  Parent.call(this)
  this.say = 'i am child'
}

Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child

function _extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype)
  Child.prototype.constructor = Child
}

// 13. Object.is
// +0 === -0
// NaN === NaN

Function.prototype._is = function(left, right) {
  if (left === right) {
    // +- 0
    return x !== 0 || y!== 0 || 1/x === 1/y
  } else {
    // NaN
    return left !== left && right !== right
  }
}


// 14. 深拷贝
function deepClone(target, map = new WeakMap()) {
  if(typeof target !== 'object') {
    return target
  }
  if (map.has(target)) return map.get(target)
  let cloneTarget = Array.isArray(target) ? [] : {}
  map.set(target, cloneTarget)
  
  // 考虑其他的类型
  const symbolKeys = Object.getOwnPropertySymbols(target)
  if (symbolKeys.length) {
    symbolKeys.forEach(sym => {
    })
  }


  for (const i in target) {
    if (Object.prototype.hasOwnProperty.call(target, i)) {
      cloneTarget[i] = 
        typeof target[i] === 'object' && target[i] !== null 
        ? deepClone(target[i], map)
        : target[i]
    }
  }
  return cloneTarget
}

// 15. Promise
// status
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class Promise {
  constructor(exector) {
    this.status = PENDING
    this.value = undefined
    this.reason = undefined
    this.onFulfilledCbs = []
    this.onRejectedCbs = []

    const resolve = (value) => {
      if(this.status === PENDING) {
        this.value = value
        this.status = FULFILLED
        this.onFulfilledCbs.forEach(fn => fn(this.value));
      }
    }
    const reject = (reason) => {
      if (this.status === PENDING) {
        this.reason = reason
        this.status = REJECTED
        this.onRejectedCbs.forEach(fn => fn(this.reason))
      }
    }
    try {
      exector(resolve, reject)
    } catch(e) {
      reject(e)
    }
  }
  then() {}
  race(promises) {
    return new Promise((resolve, reject) => {
      for (let p of list.values()) {
        this.resolve(p).then(res => {
          resolve(res)
        }, err => reject(err))
      }
    })
  }
  static all(promises) {
    return new Promise((resolve, reject) => {
    let values = []
    let count = 0
      for (let [i, p] of promises.entries()) {
        promises[i].then(res => {
          values[i] = res
          count++
          if(count === promises.length) resolve(values)
        }, err => reject(err))
      }
    })
  }
  static finally(cb) {
    return this.then(
      value => Promise.resolve(cb()).then(() => value),
      reason => Promise.resolve(cb()).then(() => {throw reason})
    )
  }
  catch(onRejected) { 
    return this.then(null, onRejected)
  }
  static resolve(value) {
    if (value instanceof Promise) {
      return value
    } else {
      return new Promise((resolve, reject) => resolve(value))
    }
  }
  static reject(reason) {
    return new Promise((resolve, reject) => reject(reason))
  }

}

// 16. Promise.all

// 17. Promise.rece

// 18. Promise.then

// 19. Promise 并行限制

// 20. JSONP
function jsonp(url, cbName, cb) {
  let script = document.createElement('script')
  script.src = url
  script.async = true
  script.type = 'text/javascript'
  window[cbName] = function(data) {
    cb && cb(data)
  }
  document.body.appendChild(script)
}

jsonp('url', 'jsonpcallback', (res) => console.log(res))

// 21.AJAX

// 22. event模块

// 23. 图片懒加载

// 24. 滚动加载

// 25. 渲染几万条数据不卡

// 26. 打印当前页面有多少种元素
//document.querySelectAll('*')

// 27. virtualDom 转化为真实 DOM

// 28. 字符串解析

// 29. 二分法
function search(arr, target) {
  if(!arr.length) return -1
  let l = 0
  let r = arr.length -1
  while(l<=r) {
    let mid = Math.floor((l + r) / 2)
    if(arr[mid] === target) {
      return mid
    } else if (arr[mid] >target) {
      r = mid-1
    } else if (arr[mid] < target) {
      l = mid+1
    }
  }
  return -1
}

let arr = [1]

console.log('二分法search', search(arr,1))
console.log('二分法search', search(arr,6))