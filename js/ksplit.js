function milliFormat(num) {
  return num && num.toString().replace(/\d+/, function (s) {
    return s.replace(/(\d)(?=(\d{3})+$)/g, '$1,')
  })
}

function milliFormat2(num) {
  return num && num.toString().replace(/\d+/, function (s) {
    return s.replace(/(\d)(?=(\d{3})+$)/g, '$1,')
  })
}


let arr = [
  123456789,
  123456789.12314,
  12312313123123,
  -124141414124.12313,
]

arr.forEach(val => {
  console.log(val +' :>> ', milliFormat2(val))
})