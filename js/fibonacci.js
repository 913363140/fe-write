// 实现一个fibonacci 分别用递归和迭代实现

// fibonacci数列  0 1 1 2 3 5 8 13  

// 递归写法
let fibonacci_recursion = n => {
  if(n < 2) return n
  return fibonacci_recursion(n -1) + fibonacci_recursion(n-2)
}

let recurResult =  fibonacci_recursion(8)
console.log('recuResult :>> ', recurResult)

// 迭代写法
let fibonacci_iteration  = n => {
  if (n < 2) return n
  let answer = [0, 1]
  for (let i = 2; i<= n; i++) {
     answer[i] = answer[i-1] + answer[i-2]
  }
  return answer[n]
}

let iteraResult =  fibonacci_iteration(8)
console.log('recuResult :>> ', iteraResult)



// second time training
// 0 1 1 2 3
// fn(0) = 0
// fn(1)  =1
// fn(2) = 1 = fn(1) + fn(0)
// fn(n) = fn(n-1) + fn(n-2)

// recursion 递归
let fibonacci_recursion2 = n => {
  if (n < 2) return n
  return fibonacci_recursion2(n-1) + fibonacci_recursion2(n-2)
}

// iteration 迭代
let fibonacci_itreration2 = n => {
  if (n < 2) return n
  let answer = [0, 1]
  for (let i  = 2; i<=n; i++) {
    answer[n] = answer[n-1] + answer[n-2]
  }
  return answer[n]
}


// third time training
let fibonacci_iteration3 = n => {
  let answer = [0, 1]
  for (let i = 2;i<=n;i++) {
    answer[i] = answer[i-1] + answer[i-2]
  }
  return answer[n]
}

// 状态压缩，空间复杂度为1
let fibonacci_status = n => {
  if (n < 0)  {
    return 0
  }
  //base case
  if (n === 1 || n == 2) {
    return 1
  }
  let prev =  1, curr= 1
  for (let i = 3; i <= n; i++) {
    // let sum = prev + curr
    // prev = curr
    // curr = sum
    [curr , prev] = [prev+ curr,  curr]
  }
  return curr
}

let statusResult =  fibonacci_status(8)
console.log('statusResult :>> ', statusResult)