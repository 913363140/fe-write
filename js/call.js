Function.prototype.myCall =  function (context, ...args) {
  if(typeof this !== 'function') {
    throw TypeError('Error')
  }
  context = context || {}
  console.log('context :>> ', context)
  context.fn = this
  console.log('context.fn :>> ', context.fn)
  const result = context.fn(args)
  delete context.fn
  return result
}

Function.prototype.myApply = function (context) {
  if(typeof this !== 'function') {
    throw new TypeError('Error')
  }
  context = context || {}
  context.fn = this
  let result
  if(arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()
  }
  delete context.fn
  return result
}

Function.prototype.myBind = function (context) { 
  if(typeof this !== 'function') {
    throw TypeError('Error')
  }
  const _this = this
  const args = [...arguments].slice(1)
  // 返回一个函数
  return function F() {
    // 因为返回了一个函数，我们可以new F（） 所以需要判断
    if (this instanceof F) {
      return new _this(...args, ...arguments)
    } else {
      return _this.apply(context, args.concat(...arguments))
    }
  }
}

Function.prototype.myCall2 = function (context, ...args) {
  if (typeof context !== 'function') {
    throw TypeError('Error')
  }
  context = context || {}
  context.fn = this
  const result = context.fn(...args)
  delete context.fn
  return result
}

Function.prototype.myCall3 = function (context, ...args) {
  if (typeof context !== 'function') {
    throw TypeError('call fn :context need function')
  }
  context = context || {}
  context.fn = this
  const result = context.fn(args)
  delete context.fn
  return result
}

Function.prototype.myCall4 = function (context, ...args) {
  if (typeof this !== 'function') {
    throw TypeError('mycall need use function')
  }
  context = context || {}
  context.fn = this
  const res = context.fn(args)
  delete context.fn
  return res
}

Function.prototype.myCall5 = function(context) {
  if (typeof this !== 'funtion') {
    throw TypeError('call need use funtion')
  }
  context = context || window
  context.fn = this
  let args = [].slice(arguments, 1)
  const result = context.fn(args) 
  delete context.fn
  return result
}

Function.prototype.myApply2 = function (context) {
  context = context || {}
  context.fn = this
  let result
  if (arguments[1]) {
    result = context.fn(...arguments[1]) 
  } else {
    result = context.fn()
  }
  delete context.fn
  return result
}

Function.prototype.myApply3 = function (context) {
  context = context || window
  context.fn = this
  let result
  if (arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()
  }
  delete context.fn
  return result
}

Function.prototype.myApply4 = function (context) {
  context = context || window
  context.fn = this
  let result
  if (arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()
  }
  delete context.fn
  return result
}

Function.prototype.myApply5 = function (context) {
  context = context || {}
  context.fn = this
  let result
  if (arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()
  }
  delete context.fn
  return result
}

Function.prototype.myBind2 = function (context) {
  context = context || {}
  const _this = this
  const args = [...arguments].slice(1)
  return function F() {
    console.log('F :>> ', F)
    console.log('this :>> ', this instanceof F)
    if (this instanceof F) {
      return new _this(...args, ...arguments)
    } else {
      return _this.apply(context, args.concat(...arguments))
    }
  }
}

Function.prototype.myBind3 = function (context) {
  if (typeof context !== 'function') {
    throw TypeError('context is not a function')
  }
  const _this = this
  const args = [...arguments].slice(1)

  return function f() {
    if (f instanceof F) {
      return _this(...args,...arguments)
    } else {
      return _this.apply(context, args.concat(...arguments))
    }
  } 
}

Function.prototype.myBind4 = function (context) {
  context = context || {}
  const _this = this
  const args = [...arguments].slice(1)
  return function F() {
     if (this instanceof F) {
       return  new _this(...args, ...arguments)
     } else {
       return _this.apply(context, args.concat(...arguments))
     }
  }
}

Function.prototype.myBind5 = function (context) {
  if (typeof context !== 'function') {
    throw TypeError('Function.prototype.mybind- need use fn')
  }
  const _this = this
  const _args = [...arguments].slice(1)
  return function f() {
    if (this instanceof f) {
      return new _this(...args, ...arguments)
    } else {
      return _this.apply(context, args.concat(...arguments))
    }
  }
}

function test(params) {
  console.log('params :>> ', params)  
  console.log('a :>> ', this.a)
}

var obj = {
  a: 10
}

// test.myBind2(obj, 'lalal', 'xxx')()
// test.myApply(obj, ['lala', 'xxx'])


Function.prototype.myBind6 = function (context) {
  let _this = this
  return function () {
    return _this.apply(context)
  }
}

Function.prototype.myBind7 = (context, ...args) => {
  let _this = this
  return function F(...inArgs) {
    if (_this instanceof F) {
      return new _this(...args, ...inArgs)
    }
    return _this.apply(context, args.concat(...inArgs))
  }
}

Function.prototype.myBind8 = (context, ...args) => {
  let _this = this
  return function F(...inArgs) {
    // 返回的是个构造函数 this指向new的函数
    if(_this instanceof F) {
      return new _this(...args, ...inArgs)
    } else {
      return _this.apply(context, args.concat(...inArgs)
    }
  }
}

var foo = {
    value: 1
};

function bar() {
  return this.value
}

// 返回了一个函数
var bindFoo = bar.myCall(foo, 1,2,3,4); 

// bindFoo(); // 1
console.log('bindFoo() :>> ', bindFoo)

