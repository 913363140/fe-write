const quickSort = (arr) => {
  if (arr.length) return arr
  let provit = arr[0]
  let left = [], right = []
  for (let i = 1;  i++; i< arr.length) {
    if (arr[i] < provit) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([provit], quickSort(right))
}

const quickSort1 = (arr, start=0, end=arr.length-1) => {
  if (end- start < 1) return 
  const target = arr[start]
  let l = start
  let r = end
  while(l< r) {
    while(l<r && arr[r] >= target) {
      r--
    }
    arr[l]=  arr[r]
    while (l<r && arr[l]< target) {
      l++
    }
    arr[r] = arr[l]
  }
  arr[l] = target
  quickSort(arr,start, l-1)
  quickSort(arr,l+1, end)
  return arr
}

const qucikSort3 = (arr) => {
  if (arr.length < 2) return arr
  let pivot = arr[0]
  let left = [], right = []
  for (let i = 1; i<arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return quickSort3(left).concat([pivot], quickSort3(right))
}