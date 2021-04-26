new Promise((res, rej) => {
  console.log(1)
  throw new Error('abc')
  res(2)
  console.log(3)
}).catch(e => {
  console.log('aaa')
}).then(t => {
  console.log(t)
})

console.log('end')

// 1 end 