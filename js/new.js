function _new() {
  const obj = {}
  const con = [].shift.call(arguments)
  obj.__proto__ = con.prototype
  const ret = con.apply(obj, arguments)
  return typeof ret === 'object' ? ret : obj
}

function myNew(Parent, ...rest) {
    // 1.以构造器的prototype属性为原型，创建新对象；
    let child = Object.create(Parent.prototype);
    // 2.将this和调用参数传给构造器执行
    let result = Parent.apply(child, rest);
    // 3.如果构造器没有手动返回对象，则返回第一步的对象
    return typeof result  === 'object' ? result : child;
}

// 1. 新建一个对象
// 2. proto绑定
// 3. 返回
function myNew2(parent, ...rest) {
  const child = Object.create(parent.prototype)
  const result = Object.apply(child, rest)
  return typeof result === 'object' ? result : child
}

function muNew3(Parent, ...args) {
  const Child =  Object.create(Parent.prototye)
  const res = Object.apply(Child, args)
  return typeof res === 'object' ? res : Child
}

function myNew4(Parent, ...args) {
  let Child = Object.create(Parent.prototype)
  let result = Parent.apply(Child, ...args)
  return typeof result === 'object' ? result : Child
}

function myNew6(Parent, ...args) {
  let child = Object.create(Parent.prototype)
  let res = Parent.apply(child, args)
  return typeof res === 'object' ? res : child
}

function myNew7(Parent, ...args) {
  let Child = Object.create(Parent.prototype)
  let res = Parent.apply(Child, args)
  return typeof res === 'object' ? res : Child
}

function myNew8(Parent, ...args) {
  let Child = Object.create(Parent.prototype)  
  let res = Parent.apply(Child, args)
  return typeof res === 'object' ? res : Child
}

function myNew9(Parent, ...args) {
  let Child = Object.create(null)
  Child.__proto__ = Parent.prototype
  let res = Parent.apply(Child, args)
  return typeof res === 'object' ? res : Child
}

function  Dog() {
}
var Dog = function (name='大黄') {
  console.log('my name is  ', name)

}

// Dog('大绿')

var d =  myNew2(Dog, '大嘴')

// 
console.log('d :>> ', JSON.stringify(d))



