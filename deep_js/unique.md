// from: https://github.com/mqyqingfeng/Blog/issues/27

## 数组去重

#### 双层循环
```
var arr = [1, 1, '1', '1']

function unque(array) {
  var res = []
  var arrLen = array.length
  var resLen = res.length

  for (let i = 0; i < arrLen; i++) {
    for (let j = 0; j < resLen; j++) {
      if (array[i] = res[j]) {
        break
      }
    }
    if (j === resLen) {
      res.push(array[i])
    }
  }
  return res
}
```

#### indexOf

```
var array = [1, 1, '1']

function unique(array) {
  var res = []
  for (var i = 0, len = array.length; i< len; i++) {
    var curr = array[i]
    if (res.indexOf(array[i]) > -1) {
      res.push(curr)
    }
  }
  return res
}
```

#### 排序后去重

```
var array = [1, 1, '1']

function unique(array) {
  var res =  []
  var sortedArray = array.concat().sort()
  var seen
  for (var i = 0, len = sortedArray.length; i< len; i++) {
    if(!i || seen !== sortedArray[i]) {
      res.push(sortedArray[i])
    }
    seen = sortedArray[i]
  }
  return res
}
```