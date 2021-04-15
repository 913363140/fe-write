//  1.写一个 mySetInterVal(fn, a, b),每次间隔 a,a+b,a+2b 的时间，然后写一个 myClear，停止上面的 mySetInterVal

let i = 0;
const mySetInterVal = (fn, a, b) => {
    let timer = setTimeout(() => {
        i++;
        fn();
        mySetInterVal(fn, a, b);
    }, a + (b * i));
    return timer;
};
let timer = mySetInterVal(() => {
    console.log(123);
}, 1000, 1000);
const myClear = () => {
    clearTimeout(timer);
};
myClear();

// 2.合并二维有序数组成一维有序数组，归并排序的思路

function mergeSort(arr) {
}

// 3.斐波那契数列

const _fibonacci = (n) => {
    let F = [];
    F[0] = 0;
    F[1] = 1;
    for (let i = 2; i <= n; i++) {
        F[i] = F[i - 1] + F[i - 2];
    }
    return F[n];
};
const _fibonacci1 = (n) => {
    if (n <= 1) {
        return n;
    }
    return fabonacci_(n - 1) + fabonacci_(n - 2);
}

// 4.字符串出现的不重复最长长度

const lengthOfLongestSubstring = (s) => {
  // 哈希集合，判断字符串是否出现过
  const occ = new Set()
  const n = s.length

  // 右指针，初始化为-1，相当于我们在字符串的左边界的左侧，还没有开始移动
  let rk = -1, ans = 0
  for (let i = 0; i< n ; ++i) {
    // 左指针向右移动了
    if(i != 0) {
      // 移除掉最左边的字符
      occ.delete(s.charAt(i-1))
    }
    // 判断一下occ里面有没有右边的字符，如果没有就加进去
    while(rk+ 1 < n && !occ.has(s.charAt(rk + 1))) {
        occ.add(s.charAt(rk+1))
        ++rk // 指针右移
    }   
    ans = Math.max(ans, rk - i + 1)
  }
  return ans
};

// 5.有一堆整数，请把他们分成三份，确保每一份和尽量相等（11，42，23，4，5，6 4 5 6 11 23 42 56 78 90）

// 6.手写发布订阅

class Observer {
    constructor() {
        this.events = {};
    }

    on(name, fn) {
        if (this.events[name]) {
            this.events[name].push(fn);
        } else {
            this.events[name] = [fn];
        }
    }

    emit(name, data) {
        if (this.events[name]) {
            this.events[name].forEach((item) => {
                item(data);
            });
        }
    }

    off(name, fn) {
        if (this.events[name]) {
            const new_events = fn ? this.events[name].filter(e => e !== fn) : [];
            this.events[name] = new_events;
        }
    }

    once(name, fn) {
        const fn_ = (...args) => {
            fn.apply(this, args);
            this.off(name, fn);
        };
        this.on(name, fn_);
    }
}

// 7.数组扁平化

const flatten = (arr) => {
    return arr.reduce((res, cur) => {
        if (Array.isArray(cur)) {
            return [...res, flatten(cur)];
        } else {
            return [...res, cur];
        }
    }, []);
};
const flatten_ = (arr, res = []) => {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flatten_(arr[i], res);
        } else {
            res.push(arr[i]);
        }
    }
    return res;
};

// 8.函数柯里化

function curry(fn, ...args) {
    if (args.length > fn.length) {
        return (...newArgs) => curry(fn, ...args, ...newArgs);
    } else {
        return fn(...args);
    }
}

function curry(fn, ...args) {
    if (args.length > fn.length) {
        return (...newArgs) => curry(fn, ...args, ...newArgs)
    } else {
        return fn(...args)
    }
}

// 9.如何获取浏览器的唯一标识，原理是什么

const getCanvasFp = () => {
    const canvas = document.createElement('canvas');
    return canvas.toDataURL('image/jpeg');
};

// 10. 手写数组reduce

Array.prototype.reduce = function(fn, res) {
    for (let i = 0; i < this.length; i++) {
        if (res) {
            fn(res, this[i], i, this);
        } else {
            fn(this[i], this[i + 1], i + 1, this);
        }
    }
    return res;
};

// 数组map

Array.prototype.map = function(fn, context) {
    if (!Array.isArray(this)) {
        throw new TypeError('must be array');
    }
    if (typeof fn !== 'function') {
        throw new TypeError(`${fn} is not a function`);
    }
    let len = this.length;
    let result = new Array(len);
    for (let i = 0; i < len; i++) {
        let res = fn.call(context, this[i], i, this);
        result[i] = res;
    }
    return result;
};

// 数组splice

Array.prototype.splice = function(index, count, ...addElements) {

};

// 数组filter

Array.prototype.filter = function(fn, context) {
    if (!Array.isArray(this)) {
        throw new TypeError('must be array');
    }
    if (typeof fn !== 'function') {
        throw new TypeError(`${fn} is not a function`);
    }
    let len = this.length;
    let result = [];
    let j = 0;
    for (let i = 0; i < len; i++) {
        let res = fn.call(context, this[i], i, this);
        if (res) {
            result[j++] = this[i];
        }
    }
    return result;
};

// 数组sort

Array.prototype.sort = function(fn) {

};

// 数组push 、pop

Array.prototype.push = function(...args) {
    if (!Array.isArray(this)) {
        throw new TypeError('must be array');
    }
    let len = this.length;
    let items = args.length;
    for (let i = 0; i < items; i++) {
        this[len + i] = args[i];
    }
    this.length = len + items;
    return this.length;
};

Array.prototype.pop = function() {
    if (!Array.isArray(this)) {
        throw new TypeError('must be array');
    }
    let len = this.length;
    if (len === 0) {
        return undefined;
    }
    len--;
    let res = this[len];
    delete this[len];
    this.length = len;
    return res;
};

Array.prototype.shift = function() {
    if (!Array.isArray(this)) {
        throw new TypeError('must be array');
    }
    let len = this.length;
    if (len === 0) {
        return undefined;
    }
    let res = this[0];
    for (let i = 0; i < len - 1; i++) {
        this[i] = this[i + 1] ? this[i + 1] : '';
    }
    len--;
    delete this[len];
    this.length = len;
    return res;
};

Array.prototype.unshift = function(...args) {
    if (!Array.isArray(this)) {
        throw new TypeError('must be array');
    }
    let args_len = args.length;
    let len = this.length;
    let new_len = len + args_len;
    for (let i = new_len - 1; i >= 0; i--) {
        this[i] = this[i - args_len] ? this[i - args_len] : args[i];
    }
    this.length = new_len
    return this.length;
};

Array.prototype.reverse = function() {
    if (!Array.isArray(this)) {
        throw new TypeError('must be array');
    }
    let left = 0;
    let right = this.length - 1;
    while (left < right) {
        [this[left], this[right]] = [this[right], this[left]];
        left++;
        right--;
    }
    return this;
};
// 11. 手写sleep

const sleep = (time) => {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove();
        }, time);
    });
};

// 12. 防抖节流

const debounce = (fn, time) => {
    let timer;
    return function() {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments);
        }, time);
    };
};
const throttle = (fn, time) => {
    let timer;
    let lock = true;
    return function() {
        if (lock) {
            lock = false;
            clearTimeout(timer);
            timer = setTimeout(() => {
                fn.apply(this, arguments);
            }, time);
        }
    };
}

// 13. call、apply、bind 实现

Function.prototype.mycall = function(context, ...args) {
    context = Object(context) || window;
    const fn = Symbol();
    context[fn] = this;
    let result = context[fn](...args);
    delete context[fn];
    return result;
};
Function.prototype.apply = function(context, args) {
    context = Object(context) || window;
    const fn = Symbol();
    context[fn] = this;
    const result = context[fn](...args);
    delete context[fn];
    return result;
}
Function.prototype.bind = function(context, ...args) {
    return (...newArgs) => {
        return this.call(context, ...args, ...newArgs);
    }
};

// 14. instanceOf 实现

const instanceOf = (a, b) => {
    b = b.prototype;
    a = a.__proto__;
    while (true) {
        if (a === null) {
            return false
        }
        if (a === b) {
            return true;
        }
        a = a.__proto__;
    }
}

// 15. Promise.all 和 Promise.race 实现

Promise.prototype.all = (promiseArr) => {
    return new Promise((resolve, reject) => {
        let index = 0;
        let res = [];
        for (let i = 0; i < promiseArr.length; i++) {
            let p = promiseArr[i];
            p.then((r) => {
                index += 1;
                res[i] = r;
                if (index === promiseArr.length) {
                    resolve(res);
                }
            }).catch((e) => {
                reject(e);
            });
        }
    })
};
Promise.prototype.race = (promiseArr) => {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promiseArr.length; i++) {
            promiseArr[i].then(resolve, reject);
        }
    });
};

Promise.prototype.allSettled = (promiseArr) => {
    return new Promise((resolve) => {
        let index = 0;
        let result = [];
        for (let i = 0; i < promiseArr.length; i++) {
            promiseArr[i].then((res) => {
                result[index] = res.value;
                index++;
                if (index === promiseArr.length - 1) {
                    resolve(result);
                }
            }, (err) => {
                result[index] = err.reason;
                index++;
                if (index === promiseArr.length - 1) {
                    resolve(result);
                }
            })
        }
    });
}

// 16. 寄生组合继承

const inherit = (son, father) => {
    const proto = Object.create(father.prototype);
    proto.constructor = son;
    son.prototype = proto;
};

function Father() {

};

function Son() {
    Father.call(this);
};
inherit(Son, Father);

// 17. new 操作符实现

const myNew = (con, ...args) => {
    let context = {};
    context.__proto__ = con.prototype;
    let res = con.call(context, ...args);
    if (res !== null && (typeof res === 'object' || typeof res === 'function')) {
        return res;
    }
    return context;
};

// 18. 实现两个大数相加

const add = (str1, str2) => {
    let str1_index = str1.length - 1;
    let str2_index = str2.length - 1;
    let is_full = false;
    let res = '';
    while (str1_index >= 0 && str2_index >= 0) {
        let sum = +str1[str1_index] + (+str2[str2_index]);
        sum = is_full ? sum + 1 : sum;
        if (sum > 9) {
            res = sum.toString().slice(1) + res;
        } else {
            res = sum.toString() + res;
        }
        str1_index--;
        str2_index--;
    }
    if (str1_index > 0) {
        res = str1.slice(0, str1_index + 1) + res;
    }
    if (str2_index > 0) {
        res = str2.slice(0, str2_index + 1) + res;
    }
    return res;
}


// 19. 实现自执行generator
const coThunk = (gen) => {
    const g = gen();
    const next = (data) => {
        let result = g.next(data);
        if (result.done) {
            return result.value;
        }
        next(result.value);
    };
    next();
}

const coPromise = (gen) => {
    let g = gen();
    const next = (data) => {
        let result = g.next(data);
        if (result.done) {
            return;
        }
        result.value.then((res) => next(res));
    }
    next();
};
// 20. 实现一个once函数记忆返回结果只执行一次

const once = (fn) => {
    let first = true;
    let result;
    return (...args) => {
        if (!first) return result;
        result = fn(...args);
        first = false;
        return result;
    }
};

// 21. 数组去重

const unique = (arr) => {
    let map = new Map();
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (!map.has(arr[i])) {
            map.set(arr[i], true);
            res.push(arr[i]);
        }
    }
    return res;
};

// 22. 对象深拷贝

const deepClone = (target, map = new WeakMap()) => {
    if (target !== null && typeof target === 'object') {
        let clone = {};
        if (map.get(target)) return map.get(target);
        map.set(target, clone);
        for (let key in target) {
            if (target.hasOwnProperty(target)) {
                clone[key] = deepClone(target[key], map);
            }
        }
        return clone;
    } else {
        return target;
    }
};

// 23. 判断当前环境是否支持webp

const canUseWebp = () => (document.createElement('canvas').toDataURL('image/webp', 0.5).indexOf('data:image/webp') === 0)

// 24. 实现Object.create

const create = (prototype) => {
    if (prototype === null || typeof prototype !== 'object') {
        throw new Error(`Object prototype may only be an Object: ${prototype}`);
    }

    function tmp() {}
    tmp.prototype = prototype;
    return new tmp();
};

// 25. 冒泡排序

const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
};

// 26. 选择排序

const selectSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let min_index = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min_index]) {
                min_index = j;
            }
        }
        let tmp = arr[i];
        arr[i] = arr[min_index];
        arr[min_index] = tmp;
    }
    return arr;
};

// 26. 插入排序

const insertSort = (arr) => {
    let pre_index = 0;
    let current = 0;
    for (let i = 1; i < arr.length; i++) {
        pre_index = i - 1;
        current = arr[i];
        while (pre_index >= 0 && arr[pre_index] > current) {
            arr[pre_index + 1] = arr[pre_index];
            pre_index--;
        }
        arr[pre_index + 1] = current;
    }
    return arr;
};

// 27. 归并排序
const merge = (left, right) => {
    let res = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            res.push(left.shift());
        } else {
            res.push(right.shift());
        }
    }
    while (left.length) {
        res.push(left.shift());
    }
    while (right.length) {
        res.push(right.shift());
    }
    return res;
};
const mergeSort = (arr) => {
    let len = arr.length;
    if (len < 2) {
        return arr;
    }
    let mid = Math.floor(len / 2);
    return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid, len)));
};

// 28. 快速排序

const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if (left >= right) {
        return;
    }
    let tmp = arr[left];
    let i = left;
    let j = right;
    while (j > i) {
        while (arr[j] >= tmp && j > i) {
            j--;
        }
        while (arr[i] <= tmp && i < j) {
            i++;
        }
        if (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    arr[left] = arr[j];
    arr[j] = tmp;
    quickSort(arr, left, j - 1);
    quickSort(arr, j + 1, right);
    return arr;
};

// 29. 计数排序

const countSort = (arr) => {
    let max_val = arr[0];
    let sort_index = 0;
    let res = [];
    for (let i = 0, len = arr.length; i < len; i++) {
        if (arr[i] > max_val) {
            max_val = arr[i];
        }
    }
    let bucket = new Array(max_val + 1);
    for (let i = 0; i < max_val + 1; i++) {
        if (!bucket[i]) {
            bucket[i] = 0;
        } else {
            bucket[i]++;
        }
    }
    for (let i = 0; i < max_val + 1; i++) {
        while (bucket[i]) {
            res[sort_index] = i;
            sort_index++;
            bucket[i]--;
        }
    }
    return res;
};

// 30. 随机生成颜色值

const randomColor = () => {
    const rgb = [];
    for (let i = 0; i < 3; i++) {
        let color = Math.floor(Math.random() * 256).toString(16);
        color = color.length === 1 ? '0' + color : color;
        rgb.push(color);
    }
    return `#${rgb.join('')}`;
};

// 31. 获取 query 参数对象

const getQueryString = () => {
    let query = location.search.slice(1);
    if (!query) {
        return null;
    }
    let url_params = new URLSearchParams(query);
    return Object.fromEntries(url_params.entries());
};

// 32. 获取一个范围随机数

const getRandomNum = (start, end) => {
    return start + Math.floor(Math.random() * (end - start));
};

// 33. 实现JS限流调度器，方法add接收一个返回Promise的函数，同时执行的任务数量不能超过两个

class Scheduler {
    async add(promiseFun) {}
}
const scheduler = new Scheduler()
const timeout = (time) => {
    return new Promise(r => setTimeout(r, time))
}
const addTask = (time, order) => {
    scheduler.add(() => timeout(time))
        .then(() => console.log(order))
}
addTask(1000, 1)
addTask(500, 2)
addTask(300, 3)
addTask(400, 4)
    // log: 2 3 1 4

// 34. parsePath

const parsePath = (path) => {
    const segments = path.split('.');
    return function(obj) {
        for (let i = 0; i < segments.length; i++) {
            if (!obj) return undefined;
            obj = obj[segments[i]];
        }
        return obj;
    };
};

// 35. 寻找字符串 kmp 算法

const strStr = (haystack, needle) => {

};

// 36. 字符串最长公共前缀  （分治法、二分法）

const longestCommonPrefix = (strs) => {

};

// 37. 如何实现一个LazyMan 

function LazyMan(name) {
    this.queue = [];
    const task = () => {
        console.log('Im ' + name);
        this.next();
    };
    this.queue.push(task);
    setTimeout(() => {
        this.next();
    });
};
LazyMan.prototype.next = function() {
    const task = this.queue.shift();
    task && task();
};
LazyMan.prototype.eat = function(meal) {
    const task = () => {
        console.log('eat' + meal);
        this.next();
    };
    this.queue.push(task);
    return this;
};
LazyMan.prototype.sleep = function(time) {
    const task = () => {
        setTimeout(() => {
            this.next();
        }, time);
    };
    this.queue.push(task);
    return this;
};
LazyMan.prototype.sleepFirst = function(time) {
    const task = () => {
        setTimeout(() => {
            this.next()
        }, time);
    };
    this.queue.unshift(task);
    return this;
};
new LazyMan('hanhang').eat('lunch').sleep(2000).eat('dinner');

// 38. promise实现

class myPromise {
    constructor(execute) {
        this.value = null;
        this.status = 'pending';
    }
    then(reslove_callback, reject_callback) {

    }
    catch (reject_callback) {
        return this.then(null, reject_callback);
    }
    all() {

    }
    race() {

    }
    allSettled() {

    }
}