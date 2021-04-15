const o1 = {
  text: 'o1',
  fn: function() {
    console.log('this :>> ', this)
    return this.text
  }
}

const o2 = {
  text: 'o2',
  fn: function() {
    return o1.fn()
  }
}

const o3 = {
  text: 'o3',
  fn: function() {
    let fn = o1.fn
    return fn()
  }
}

console.log('o1.fn() :>> ', o1.fn())
console.log('o2.fn() :>> ', o2.fn())
console.log('o3.fn() :>> ', o3.fn())