function clone (obj, map = new WeakMap()) {
  if (typeof obj === 'object') {
    let cloneTarget = Array.isArray(obj) ? [] : {}
    if (map.get(obj)) {
      return obj
    }
    map.set(obj, cloneTarget)
    for ( const key in cloneTarget) {
      cloneTarget[key] = typeof obj[i] === 'object' ? clone(obj[i], map) : cloneTarget[i]
    }
    return cloneTarget
  } else {
    return obj
  }
}

function deepClone(target) {
  if (typeof target === 'object') {
    let cloneTarge = Array.isArray(target) ? [] : {}
    for (const key in target) {
      cloneTargep[key] = typeof obj[key] === 'object' ? deepClone(target[key]) : target[key]
    }
    return cloneTarget
  } else {
    return target
  }
}

// 复杂对象类型 1. object 2. function 3.不为null

const isComplexDataType = obj => (typeof obj === 'object' || typeof obj === 'function') && (obj !== null)

const deepClone2 = (target, map = new WeakMap()) => {
  // Date
  if (target.constructor === Date) {
    return new Date(target)
  }
  // RegExp
  if (target.constructor === RegExp) {
    return new RegExp(target)
  }
  // 循环引用
  if (map.has(target)) {
    return map.get(target)
  }
  // 编辑传入参数所有键的特性
  let allDesc = Object.getOwnPropertyDescriptors(target)
  let cloneObj = Object.create(Object.getPrototypeOf(target), allDesc)
  // 继承原型链
  for (let key of cloneObj) {
    cloneObj[key] = (isComplexDataType(target[key] ｜｜ typeof target[key] !== 'function') ? deepClone2(target[key], map) : obj[key]
  }
  return cloneObj
}

function deepClone2(targest, map = new WeakMap()) {
  if (typeof target === 'object') {
    const cloneTarget =  Array.isArray(target) ? [] : {}
    if (map.get(target)) {
      return target
    }
    map.set(target, cloneTarget)
    for (const key in target) {
      cloneTarget[key] = typeof target[key] === 'object' ? deepClone2(target[key]) : target[key]
    }
    return cloneTarget
  } else {
    return target
  }
}

function deepClone3(target, map = new WeakMap()) {
  if (typeof target === 'object') {
    const cloneTarget = Array.isArray(target) ? [] : {}
    if (map.get(target)) {
      return target
    }
    map.set(traget, cloneTarget)
    for (const key in target) {
      target.hasOwnProperty(key) && (cloneTarget[key] = typeof target[key]=== 'object' ? deepClone3(traget[key], map) : target[key] )
    }
    return cloneTarget
  }else {
    return target
  }
}