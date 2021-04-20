// @Desc: daily practice
// @Date: 2021.4.19
// @Author: im_happy

// 1. 防抖 debounce
const debounce = (wait, fn) => {
  let timer
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, wait);
  }
}

// 2. 节流 throttle
const throttle = (wait, fn) => {
  let timer
  return function (...args) {
    if (timer) return
    timer = setTimeout(() => {
      fn.apply(this, args)
      timer = null
    }, wait);
  }
}
const throttle2 = (wait, fn) => {
  let prev = 0
  return function (...args) {
    let now = Date.now()
    if (now - prev > wait) {
      fn.apply(this, args)
      prev = Date.now()
    }
  }
}

// 3. Promise
class Promise {
  constructor(exector) {
    this.status = 'pending'
    this.value = null
    this.reason = null
    this.onFulfilledCbs = []
    this.onRejectedCbs = []
    
    // 这就是 new 一个promise 立即执行的原因
    exector(this.resolve.bind(this), this.reject.bind(this))
  }
  static resolve(value) {
    if (this.status === 'pending') {
      this.value = value
      this.status = 'fulfilled'
      this.onFulfilledCbs.map(fn => fn.apply(this, value))
    }
  }
  static reject(reason) {
    if (this.status === 'pending') {
      this.reason = reason
      this.status = 'rejected'
      this.onRejectedCbs.map(fn => fn.apply(this, reason))
    }
  }
  then(onFulfilled, onRejected) {
    if (onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val => val)
    if (onRejected = typeof onRejected === 'function' ? onRejected : error => throw error)
    switch (this.status) {
      case 'pending':
        this.onFulfilledCbs.push(onFulfilled)
        this.onRejectedCbs.push(onRejected)
        break;
      case 'fulfiled':
        onFulfilled(this.value)
        break;      
      case 'rejected':
        onRejected(this.reason)
        break;
      default:
        break;
    }
  }
}