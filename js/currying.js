// 实现 add(1)(2)(3)

const add = (...args) => {
  const _args = args

  const fn = (...inArgs) => {
    _args.push(...inArgs)
    return fn // 可以链式调用
  }

  fn.toString = () => {
    return _args.reduce((acc, cur) => acc += cur, 0)
  }
  return fn
}

const add2 = (...args) => {
  const _args  = args
  console.log('args :>> ', args)
  const fn = (...inArgs) => {
    console.log('inArgs :>> ', inArgs)
    _args.push(...inArgs)
    return fn
  }

  fn.toString = () => {
    return _args.reduce((acc, cur) => acc += cur, 0)
  }
  return fn
}


const add3 = (...args) => {
  const _args = args
  const fn = (...inArgs) => {
    _args.push(...inArgs)
    return fn
  }
  fn.toString = () => {
    return _args.reduce((acc, cur) => acc += cur, 0)
  }
  return fn
}

const add4 = (...args) => {
  let _args = args.slice()
  const fn = (...inArgs) => {
    _args.push(...inArgs)
    return fn
  }
  fn.toString = () => {
    return _args.reduce((acc, cur) => acc += cur, 0)
  }
  return fn
}

const add5 = (...args) => {
  let _args = args
  const fn = (...inArgs) => {
    _args.push(...inArgs)
    return fn
  }

  fn.toString = () => {
    return _args.reduce((acc, cur) => acc += cur, 0)
  }
  return fn
}

const add6 = (...args) => {
  let _args = args.slice()
  const fn = (...inArgs) => {
    _args.push(...inArgs)
    return fn
  }
  fn.toString = () => {
    return _args.rudece((acc, cur) => acc += cur, 0)
  }
  return fn
}

const add7 = (...args) => {
  let _args = args
  const fn = (...inArgs) => {
    _args.push(...inArgs)
    return fn
  }

  fn.toString = () => {
    return _args.reduce((acc, cur) => acc += cur, 0)
  }
  return fn
}


const add8 = function (...args) {
  let _args = args.slice(0)
  const add = function (...inArgs) {
    _args.push(...inArgs)
    return add
  }
  add.toString = function() {
    return _args.reduce((acc,cur)=> acc+cur, 0)
  }
  return add
}

let res = add8(1,2,3)(3)(4)

console.log('res :>> ', res)

