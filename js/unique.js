let arr = [1, 1, "1", "1", null, null, "NaN", NaN, NaN, { a: 1 }, { a: 1 }, '{ a : 1}', '{ a : 1}'];

let unique1 = (arr) =>{
  return [...(new Set(arr))]
}

console.log('unique1 => ', unique1(arr))

// 1. number string 去重
// 2. null 去重
// 3. NaN 去重
// 4. 对象去重

let unique2 = arr => {
  let array = []
  for (let i of arr) {
    if(!array.includes(i)) {
      array.push(i)
    }
  }
  return array
}

console.log('unique2 => ', unique2(arr))


/**
 * 数组/对象数组去重
 * @param { Array } arr 待去重的数组
 * @param { String } name 如果是对象数组，为要过滤的依据 key
 * @returns { Array }
 */
function unique (arr=[], name='') {
  if ((arr[0] instanceof Object) && !name) { // {1}
    throw new Error('对象数组请传入需要过滤的属性！');
  }

  const hash = {};
  return arr.reduce((prev, current) => {
    let key; // {2}
    if (!name) { 
      key = current; // {3}
    } else if (current.hasOwnProperty(name)) { 
      key = current[name]; // {4}
    } else {
      key = Math.random(); // {5} 保证其它 key 不受影响
    }

    if (!(Object.prototype.toString.call(key) === '[object Number]')) { // {6}
      key += '_';
    }

    hash[key] ? '' : hash[key] = true && prev.push(current); // {7}

    return prev; // {8}
  }, []);
}



let arr2 = [1, 2, 2, 3, '3', 4];
    // arr = [{ a: 1 }, { b: 2 }, { b: 2 }]
    // arr = [{ a: 1 }, { a: 1 }, { b: 2 }]



function unique3 (arr) {
  let map = new Map()
  return arr.filter(item => !map.has(item) && map.set(item, 1))
}

console.log('unique3 => ',unique3(arr));
