let p = new Promise(resolve => {resolve('123')}, reject => {})

p
.then(res => console.log(res))
.then(res => console.log(res))
.then(res => console.log(res))
.then(res => console.log(res))
.then(res => console.log(res))
.then(res => console.log(res))
.then(res => console.log(res))
.then(res => console.log(res))
.then(res => console.log(res))

console.log('p :>> ', p)


