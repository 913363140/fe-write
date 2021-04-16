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
