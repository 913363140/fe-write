const getType = (obj) => {
  return Object.prototype.toString.call(obj).replace(/^\[object (\w+)]$/, '$1')
}


console.log('getType({}) :>> ', getType({}))
console.log('getType([]) :>> ', getType([]))
console.log('getType(1) :>> ', getType(1))
