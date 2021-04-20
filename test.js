Function.prototype.myBind = function(context, ...args) {
  let _this = this
  const fNOP = function () {}
  const fBound = function(...inArgs) {
    return _this.apply(this instanceof fNOP ? this : context, args.concat(inArgs))
  }
  fNOP.prototype = this.prototype
  fBound.prototype = new fNOP()
  return fBound
}

const myNew = (Parent, ...args) => {
  let Child = Object.create(Parent.prototype)
  let res = Parent.apply(Child, args)
  return typeof res === 'object' ? res : Child
}

// 寄生组合式继承
// 1. 原型式继承 2. 构造函数继承
const myExtend = (Parent, Child) => {
  Child.prototype = Object.create(Parent.prototype)
  Child.constructor = Child
}

// 构造函数继承
function Child() {
  Parent.apply(this)
}


// debounce 防抖
const debounce = (fn, wait, immediate) => {
  let timer, ret
  let debounced = function() {
    let context = this
    let args = Array.prototype.slice.call(arguments)
    
    if (timer) clearTimeout(timer)
    if (immediate) {
      timer = setTimeout(() => {
        timer = null
      }, wait);
      result = fn.apply(context, args)
    }else {
      timer = setTimeout(() => {
        fn.apply(context, args)
      }, wait);
    }
    return result
  }
  debounced.cancel = function () {
    clearTimeout(this.timer)
    this.timer = null
  }
  return debounced
}

const debounce2 = (fn, wait) => {
  let timer
  return function (...args) {
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, wait);
  }
}

const throttle = (fn, wait) => {
  let timer
  return function (...args) {
    if(timer) return 
    timer = setTimeout(() => {
      fn.apply(this, args)
      timer = null
    }, wait);
  }
}