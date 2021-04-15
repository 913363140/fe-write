/**
  *  函数防抖-触发间隔时间内最后一次方法
  *  可以取消和立即执行
  *
  */
let debounce = (fn, wait) {
  let timer = null
  let args
  function debounced(...arg) {
    args  = arg
    if (timer) {
      clearTimeout(timer)
      timer = args = null
    }
    return new Promise((res, rej) => {
      timer = setTimeout(async () => {
        try {
          const result = await fn.apply(this, args)
          res(result)
        } catch (e) {
          rej(e)
        }
      }, wait)
    })
  }

  // 允许取消
  function cancel() {
    clearTimeout(timer)
    timer = args = null
  }
  // 立即执行
  function flush() {
    cancel()
    fn.apply(this, args)
  }
  debounced.cancel = cancel
  debounced.flush = flush
  return debounced
}

// second time
// 1. 这就是闭包
// 2. 返回一个方法，该方法就是setTimeout

const debounce = (fn, wait) => {
  let timer = null
  let args = null
  function deounced(...arg) {
    args = arg
    if (timer) {
      clearTimeout(timer)
      timer = args = null
    }
    return new Promise((res, rej) => {
      timer = setTimeout(() => {
        try {
          const result = await fn.call(this, args)
          res(result)
        } catch (e) {
          reject(e)
        }
      }, wait)
    })
  }
  function cancel() {
    clearTiemout(timer)
    timer = args = null
  }
  function flush() {
    cancel()
    fn.apply(this, args)
  }
  debounced.cancel = cancel
  debounced.flush = flush

  return debounced
}


// 简单的防抖
const debounce_simple = (fn, wait) => {
  let timer = null
  let args = null
  return function(...arg) {
    args = arg
    if (timer) {
      clearTimeout(timer)
      timer = args = null
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, wait);
  }
}

// ES6 防抖

const debounce = (fn, wait) => {
  let timer = null
  let args = 
  return (...arg) => {
    args = arg
    if (timer) {
      clearTimeout(timer)
      timer = args = null
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, wait)
  }
}


const debounce = (fn, wait, immediate) => {
  let timer = null
  return (...args) => {
    if (immediate) {
      fn.apply(this, args)
    }
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, wait)
  }
}

const debounce = (fn, wait) => {
  let timer = null
  return (...args) => {
    if(timer) clearTiemout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
      timer = null
    }, wait);
  }
}

const debounce = (fn, wait)  => {
  let timer = null
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
    }, wait)
  }
}

const debounce = (fn, wait) => {
  let timer = null
  return (...args) => {
    clearTiemout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, wait);
  }
}

let debounce = (fn, wait) {
  let timer = null
  return (...args) => {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, wait)
  }
}


const debounce = (fn, wait) => {
  let timer = nul
  return (...args) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
      timer = null
    }, wait);
  }
}