// abc-def-ghi => abcDefGhi

let replacer = (...args) => {
  return args[1].toUpperCase()
}
let lowCamelCase = str => {
  if (typeof str !== 'string') {
    throw TypeError()
  }
  return str.replace(/\-(\w){1}/g, replacer)
}


let s = lowCamelCase('abc-def-ghi ')
let b = lowCamelCase('a-s-d-a-s-d')

console.log('s :>> ', s)
console.log('b :>> ', b)


// second times training

let replacer2 = (...args) => {
  // args[1]  就是正则匹配的 $1 ， 这里的匹配项从1开始
  return args[1] && args[1].toUpperCase()
}

let lowerCamelCase2 = str => {
  if (typeof str !== 'string') {
    throw  TypeError()
  }

  return str.replace(/\-(\w){1}/g, replacer2)
}

let s2 = lowerCamelCase2('asda-asd-asd-as-d')
// let s3 = lowerCamelCase2()
console.log('s2 :>> ', s2)

// ues arr

let lowerCamelCaseUseArr = str => {
  let strArr = str.split('-')
  for (let i = 1; i< strArr.length; i++) {
    let firstLetter = strArr[i].charAt(0)
    strArr[i] = firstLetter.toUpperCase() +strArr[i].slice(1)
  }
  return strArr.join('')
}
let s3 = lowerCamelCaseUseArr('asda-asd-asd-as-d')
console.log('s3 :>> ', s3)
