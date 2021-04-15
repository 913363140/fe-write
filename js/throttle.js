// 2021.4.14 return的函数里面如果有修改this指向的操作，一律不能用箭头函数

const throttle = (fn, wait) => {
  let timer = null
  return (...args) => {
    if(timer) return 
    timer = setTimeout(() => {
      fn.apply(this, args)
      timer = null
    }, wait);
  }
}

const throttle2 = (fn, wait, isDebounce) => {
  let timer
  let lastCall = 0
  return (...args) => {
    if (isDebounce) {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        fn(...args)
      }, wait)
    } else {
      const now = Date.now()
      if (now - lastCall < wait) return 
      lastCall = now
      fn(...args)
    }
  }
}

const throttle3 = (fn, wait) => {
  let lastCall = 0
  return (...args) => {
    let now = Date.now()
    if (now - lasCall > wait) {
      fn.apply(this, args)
      lastCall = now
    } 
  }
}

const throttle4 = (fn, wait) => {
  let timeout, args, context, result
  let prev = 0

  let later = () => {
    prev = Date.now()
    timeout = null
    fn.apply(context, args)
  }
  let throttled = function() {
    let now = Date.now()
    let remaining = wait - (now - prev)
    context = this
    args = arguments
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      prev = now
      fn.apply(context, args)
      // 0 < remaining <= wait
    } else if(!timeout) {
      timeout = setTimeout(later, remainig)
    }
  }
  return throttled
}

const throttle5 = (fn, wait) => {
  let timeout, context, args, result
  let prev = 0

  let later = () => {
    prev = Date.now()
    timeout = null
    fn.apply(context, args)    
  }
  
  let throttled = function () {
    context = this
    args = arguments
    let now = Date.now()
    let remaining = wait - (now - prev)
    
    if(remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      prev = now
      fn.apply(context, args)
    } else if (!timeout){
      timeout = setTimeout(later, remaining)
    }
  }
  return throttled
}

const throttle6 = (fn, wait) => {
  let timeout, context, args, result
  let prev = 0
  
  let later = () => {
    prev = Date.now()
    timeout = null
    fn.apply(context, args)
  }

  let throttled = function () {
    context = this
    args = arguments
    let now = Date.now()
    let remaining = wait - (now - prev)

    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      prev = now
      fn.apply(contenxt, args)
    } else if (!timeout) {
      timeout = setTimeout(later, remaining)
    }
  }

  return throttled
}

const throttle7 = (fn, wait) => {
  let timer = null
  return (...args) => {
    if (timer) return 
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, wait);
  }
}

const throttle8 = (fn, wait) => {
  let timer, context, args, result
  let prev = 0

  let later = () => {
    prev = Date.now()
    timer = null
    fn.apply(context, args)
  }

  let throttled = function () {
    context = this
    args = arguments
    let now = Date.now()
    let remaining = wait - (now - prev)

    if (remaining<= 0 || remaining > wait) {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
      prev = Date.now()
      fn.apply(context, args)
    } else if (!timer) {
      timer = setTimeout(later, remaining)
    } 
  }
  return throttled
}

const throttle9 = (fn, wait) => {
  let timer = null
  return (...args) => {
    if(timer) return 
    timer = setTimeout(() => {
      fn.apply(this, args)
      timer = null
    }, wait);
  }
}

const throttle10 = (fn, wait) => {
  let timer = null
  return (...args) => {
    if (timer) return 
    timer = setTimeout(() => {
      fn.apply(this, args)
      timer = null
    }, wait);
  }
}

const throttle11 = (fn, wait) => {
  let timer = null
  return (...args) => {
    if (timer) return 
    timer = setTimeout(() => {
      fn.apply(this, args)
      timer = null
    }, wait);
  }
}

const throttle12 = (fn, wait) => {
  let timeout, context, args, result
  let prev = 0
  let later = () => {
    prev = Date.now()
    timeout = null
    fn.apply(context, args)
  }

  let throttled = function () {
    context = this
    args = arguments
    let now = Date.now()
    let remaining = wait - (now- prev)
    if (remaining <= 0) {
      if(timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      prev = now
      fn.apply(context, args)
    }else if (!timeout) {
      timeout = setTimeout(later, remaining)
    }
  }
  return throttled
}

const throttle13 = (fn, wait) => {
  let timeout = null
  let prev = 0

  return (...args) => {
    let now = Date.now()
    let ramaining = wait - (now- prev)

    if(remaining <= 0) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      prev = now
      fn.apply(this, args)
    } else if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null
        prev = Date.now()
        fn.apply(this, args)
      }, timeout);
    }
  }
}

const throttle14 = (fn, wait) => {
  let prev = 0
  return (...args) => {
    console.log('this :>> ', this)
    let now = Date.now()
    if (now - prev > wait) {
      fn.apply(this, args)
      prev = now
    }
  }
}

const throttle15 = (fn, wait) => {
  let prev = 0
  return function(...args) {
    console.log('this :>> ', this)
    let now = Date.now()
    if (now - prev > wait) {
      fn.apply(this, args)
      prev = now
    }
  }
}

function fn() {
  console.log('fn :>> ', 'iiii')
}
const thro = throttle15(fn, 500)
thro()
thro()
thro()
thro()
setTimeout(() => {
  thro()
}, 3000);