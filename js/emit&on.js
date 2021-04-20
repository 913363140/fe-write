class Observer {
  constructor() {
    this.events = {}
  }
  on(name, fn) {
    if (!this.events[name]) {
      this.events[name] = [fn]
    } 
    this.events[name].push(fn)
  }
  emit(name, ...args) {
    this.events[name] && this.events[name].forEach(fn => {
      // fn.apply(this, ...args)
      fn(...args)
      fn.call(this, ...args)
    });
  }
  once(name, fn) {
    const cb = () => {
      fn()
      this.off(name, fn)
    }
    this.on(name, cb)
  }
  off(name, fn) {
    this.events = this.events.filters(event => event.fn !== fn)
  }
}

const event = new Observer()

const handle = (...args) => {console.log('args :>> ', args)}

event.on('click', handle)
event.emit('click', 'lalalalal')



// second time training
class Observer2 {
  constructor() {
    this.events = {}
  }

  on(name, fn) {
    if( !this.events[name] ) {
      this.events[name] = []
    }
    this.events[name].push(fn)
  }

  emit(name, data) {
    this.events[name] && this.events[name].forEach(fn => {
      fn.call(this, data)
    })
  }

  off(name, fn) {
    let events = this.events[name].filters(e => e !== fn)
    this.events[name] = events
  }

  once(name, fn) {
    const cb = fn => {
      fn()
      this.off(name, fn)
    }
    this.on(name, cb)
  }

}

class Observer3 {
  constructor() {
    this.envents = {}
  }
  on(name, fn) {
    if(this.events[name]) {
      this.events[name].push(fn)
    } else {
      this.events[name] = [fn]
    }
  }
  emit(name, ...args) {
    if(this.events[name]) {
      this.events[name].map(fn => {
        fn.apply(this, args)
      })
    }
  }
  off(name, fn) {
    if (fn) {
      this.events[name] = this.events[name].filter(e => e !== fn)
    }else {
      this.events[name] = []
    }
  }
  once(name, fn) {
    this.on(name, () => {
      fn()
      this.off(name, fn)
    })
  }
}