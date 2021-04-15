// 合并有序二维数组成一个数组

function mergeArr(arr1, arr2) {
  let result = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }
  return [...result, ...arr1, ...arr2];
}

function mergeSort(arr) {
  if (arr.length === 0) {
    return []
  }
  let result = [];
  while (arr.length>1) {
    let arr1 = arr.shift()
    let arr2 = arr.shift()
    let merge = mergeArr(arr1, arr2)
    arr.push(merge)
  }
  return arr[0]
}

let arr1 = [[1,2,3],[4,5,6],[7,8,9],[1,2,3],[4,5,6]];
let arr2 = [[1,4,6],[7,8,10],[],[3,7,13],[1,5,12]];
let a = mergeSort(arr1);
let b = mergeSort(arr2);

console.log('a :>> ', a)
console.log("b :>> ", b);

// second time training

function merge(arr1, arr2) {
  let result = []
  while(arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      result.push(arr1.shift())
    } else {
      result.push(arr2.shift())
    }
  }
  return [...result, ...arr1, ...arr2]
}

function mergeSort(arr) {
  if (!arr.length) return []
  while(arr.length > 1) {
    let arr1 = arr.shift()
    let arr2 = arr.shift()
    let mergeArr = merge(arr1, arr2)
    arr.push(mergeArr)
  }
  return arr[0]
}

// third time trainning
function merge(arr1, arr2) {
  // init vari
  let result = []
  // 两个数组都有长度
  while(arr.length && arr2.length) {
    if(arr1[0] < arr2[0]) {
      result.push(arr1.shift())
    } else {
      result.push(arr2.shift())
    }
  }
  return [...result, ...arr1, arr2]
}

function mergeSort(arr) {
  if (!arr.length) return []
  while (arr.length > 1) {
    let arr1 = arr.shift()
    let arr2 = arr.shift()
    let mergeArr = merge(arr1, arr2)
  }
  return arr[0]
}

function mergeSort(arr1, arr2) {
  let res = []
  while(arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      res.push(arr1.shift())
    } else {
      res.push(arr2.shift())
    }
  }

  return [...res, ...arr1, ...arr2]
}