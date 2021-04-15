// 字符串出现的不重复的最长长度

const lengthOfLongestSubString = (str) => {
   if (str.length <= 1) return str.length
   const arr = [...str]
   let i = -1
   let map = new Map()
   let res = 0
   for (let j = 0;j < arr.length; j++) {
     if (map.has(arr[j])) {
       i = Math.max(i, map.get(arr[j]))
     }
     res = Math.max(res, j - i) 
     map.set(arr[j], j)
   }
   return res
}

let s1 = 'zxcvbn'
let s2 = 'zxccvbn'
let s3 = 'zxccvvbnn'
console.log('lengthOfLongestSubString :>> ', lengthOfLongestSubString(s3))
