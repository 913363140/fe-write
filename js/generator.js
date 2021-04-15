function *foo () {
  let x = 10
  let y = 20
  yield x
  let z = x + y
  yield z
}

let it = foo()
let val = it.next()
let val2 = it.next()

console.log('it :>> ', val)
console.log('val2 :>> ', val2)