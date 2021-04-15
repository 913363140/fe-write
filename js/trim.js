String.prototype.myTrim = function () {
  return this.replace(/^\s*|\s*$/, '')
}

String.prototype.myTrim2 = function() {
  return this.replace(/\s*|\s*$/, '')
}


let str = '  1 2 3  '
console.log('str.trim() :>> ', str.trim())
console.log('str.Trim() :>> ', str.myTrim())
console.log('str.Trim() :>> ', str.myTrim2())