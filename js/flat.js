const flatten1 = (arr) => {
  return arr.reduce((acc, cur) => {
    return acc.concat(Array.isArray(cur) ? flatten(cur) : cur);
  }, []);
};

let res = [];
const flatten2 = (arr) => {
  for (let i of arr) {
    if (Array.isArray(i)) {
      flatten2(i);
    } else {
      res.push(i);
    }
  }
};

const flatten3 = (arr) => {
  return arr.reduce((acc, cur) => {
    return acc.concat(Array.isArray(cur) ? flatten3(cur) : cur);
  }, []);
};

const flatten4 = (arr) => {
  return arr.reduce((acc, cur) => {
    return acc.concat(Array.isArray(cur) ? flatten4(cur) : cur);
  }, []);
};

const flatten5 = (arr) => {
  return arr.reduce((arr, cur) => {
    return acc.concat(Array.isArray(cur) ? flatten5(cur) : cur)
  }, [])
}

const flatten6 = (arr) => {
  return arr.reduce((acc, cur) => {
    return acc.concat(Array.isArray(cur) ? flatten6(cur) : cur)
  }, [])
}

let arr = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
console.log(flatten4(arr));
console.log(_flatten2(arr));
