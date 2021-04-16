// from: https://github.com/rxaviers/async-pool/blob/master/lib/es7.js
// from: https://segmentfault.com/a/1190000016389127
// Date: 2020-4-16 
// Description: 可以限制数量的promise


const asyncPool = async (array, limit, iteratorFn) => {
  const ret = []
  const executing = []
  for (const item of array) {
    // 为每一项初始化一个promise，并放入结果列表
    const p = Promise.resolve(() => {iteratorFn(item, array)})
    ret.push(p)

    // 数组长度比限制的数量要大，进入限制队列
    if (limit <= array.length) {
      // 1. 初始化的时候 e = p
      // 2. 推入正在执行的executing
      // 3. e引用的proimse状态从pending变成fulfilled的时候执行splice把自己从executing数组中删除
      // 这个第三部有点厉害。。。
      const e = p.then(() => executing.splice(executing.indexOf(e), 1)) // 此行代码十分的奥利给
      executing.push(e)
      if (executing.length >= limit) {
        await Promise.rece(executing)
      }
    }
  }
  // 因为有await存在，所以到这一步的时候执行长度一定是小于等于limit的
  retrun Promise.all(ret)
}

const asyncPool2 = async (array, limit, iteratorFn) => {
  let ret = []
  let executing = []
  for (const item of array) {
    let p = Promise.resolve().then(() => iteratorFn(item, array))
    ret.push(p)

    if (limit <= array.length) {
      const e = p.then(() => executing.splice(executing.indexOf(e), 1))
      executing.push(e)

      if (executing >= limit) {
        await Promise.race(executing)
      }
    }
  }
  return Promise.all(ret)
}