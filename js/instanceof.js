function _instanceof (left, right) {
  let R = right.prototype
  let L = left.__proto__

  while(true) {
    if(L === null) return false
    if (R === L) return true
    L = L.prototype
  }
}


// second time
function _instanceof2 (left, right) {
  let _left = left.__proto__
  let _right = right.prototype

  while (true) {
    if (_left === null) return false
    if (_left === _right) return true
    _left = _left.__proto__
  }
}


// third time
function _instanceOf3 (left, right) {
  left = left.__proto__
  right = right.prototype
  while(true) {
    if (left === null) return false
    if (left === right) return true
    left = left.__proto__
  }
}

function instanceOf4 (left, right) {
  let left = left.__proto__
  let right = right.prototype
  while (true) {
    if (left === null) {
      return false
    }
    if(left === right) {
      return true
    }
    left = left.__proto__
  }
}