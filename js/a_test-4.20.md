@Desc: daily practice
@Date: 2021.4.20
@Author: im_happy

#### 1. add(1)(2)(3)
``` javascript
  const add = (...args) => {
    let _args = args.slice(0);
    const fn = function (...inArgs) {
      _args.push(...inArgs);
      return fn;
    };
    fn.toString = function () {
      return _args.reduce((acc, cur) => acc + cur, 0);
    };
    return fn;
  };
  
  // console.log('add(1)(2)(3) :>> ', add(1)(2)(3))
  // console.log('add(1,2)(3) :>> ', add(1,2)(3))
```

#### 2. 优化webpack

**耗时分析**：speed-measure-webpack-plugin
**体积分析**：webpack-bundle-analyzer

> 优化构建速度
1. dllPlugin
2. HappyPack(不维护了) | thread-loader
3. noParse
4. igonorePlugin
5. exclude、include、文件位置描述清晰，减少代码查找次数
6. cache-loader

> 优化构建体积
1. 压缩代码：webpack-paralle-uglify-plugin terser-webpack-plugin min-css-extra-plugin
2. 提取页面公共资源：html-webpack-extract-plugin 将基础包通过cdn引入不打入bundle
3. tree shaking
4. scope hoisting:
5. 图片压缩：image-webpack-loader

#### 3. 事件循环
**微任务**(micro task | job)：promise、MutationObserve、Process.nextTick、
**宏任务**(macro task | task)：script、setTimeout、setInterval、UI渲染、IO操作

> web chrome v8
每执行一个宏任务，清空微任务栈里的所有微任务

> node
1. timer: 执行timer的回调，并且是由pull阶段控制的
2. io cbs: 处理上一轮循环微处理的io cb
3. idle cbs: node内部使用
4. pull: 拉取io cbs
5. check: setImmediate回调
6. close cbs: eg webscoket

```  javascript
  setTimeout(() => {
    setImmediate(() => {
      console.log("setImmediate");
    });
    setTimeout(() => {
      console.log("setTimeout");
    }, 0);
  }, 0);
```

#### 4. Promise.all
```  javascript
Promise.all = function (list) {
  return new Promise((resolve, reject) => {
    const len = list.length;
    let count = 0;
    let res = [];
    for (let i = 0; i < len; i++) {
      Promise.resolve(list[i]).then(
        (val) => {
          res[i] = val
          count++;
          if (count === len) {
            return resolve(res);
          }
        },
        (err) => {
          return reject(err)
        }
      );
    }
  });
};
```
#### 5. Promise.race
```  javascript
Promise.race = function (list) {
  return new Promise((resolve, reject) => {
    list.forEach(item => {
      Promise.resolve(item).then(res => {
        resolve(res)
      }, err => reject(err))
    });
  })
}
```

#### 6. 订阅发布
```  javascript
class Observe {
  constructor() {
    this.events = []
  }
  on(name, fn) {
    if (this.events[name].length) {
      this.events[name].push(fn)
    } else {
      this.events[name] = [fn]
    }
  }
  off(name, fn) {
    if (this.events[name]) {
      let fns = fn ? this.events[name].filters(e => e !== fn) : []
      this.events[name] = fns
    }
  }
  emit(name, args){
    this.events[name].forEach(fn => {
      fn(args)
    });
  }
  once(name, fn) {
    this.on(name, (...args) => {
      fn.apply(this, args)
      this.off(name, fn)
    })
  }
}
```

#### 6. 手写Proxy实现arr[-1]的访问

```  javascript
let arr = [0, 1]
let proxy = new Proxy(arr, {
  get (target, key, receiver) {
    if (key == -1) {
      return '------ '
    }
    return '这里是-1'
  }
})

// console.log(proxy[-1])

```

#### 7. 代码执行结果
```  javascript
console.log(1); // 1
setTimeout(() => { // 一轮macro
  console.log(2); // 5
  process.nextTick(() => { // 二轮micro 置顶 7
    console.log(3);
  });
  new Promise((resolve) => {
    console.log(4); // 6
    resolve();
  }).then(() => { 
    console.log(5); // 二轮micro 8
  });
});
new Promise((resolve) => {
  console.log(7); // 2
  resolve();
}).then(() => {
  console.log(8); // 一轮micro 4
});
process.nextTick(() => { // 一轮micro 置顶 3
  console.log(6);
});
setTimeout(() => { // 二轮macro
  console.log(9); // 9
  process.nextTick(() => { // 11
    console.log(10);
  });
  new Promise((resolve) => {
    console.log(11); // 10
    resolve();
  }).then(() => {
    console.log(12); // 12
  });
});
// 1 7 6 8 2  4 3 5  9 11 10 12
```
#### 7. http缓存
**Cache-Control**
no-cache: 使用协商缓存 
no-store 不使用缓存

**强缓存**
- Expires: 过期时间，依赖本地时间 
- max-age: 相对发起请求时间，单位秒

**协商缓存**
- etag  -- if-none-match 优先级高一些
- last-modified -- if-modified-since

#### 8. webpack 构建流程

from：https://juejin.cn/post/6844904000169607175
1. 初始化参数：从配置文件和shell读取配置参数
2. 开始编译：根据配置文件生成compiler对象，加载所有的插件，执行run开始进行编译
3. 确定入口：根据配置entry找出所有的入口文件，和文件依赖
4. 编译模块：根据文件依赖和loader规则配置，进行模块编译
5. 完成模块编译：
6. 输出资源：根据入口和模块间额依赖关系，生成chunk代码块，这一步是最后对代码修改的机会
7. 完成输出：根据output输出

**简化过程**
1. 入口：从配置文件和shell读取配置
2. 初始化：根据options生成compiler对象，初始化插件和options配置
3. 构建：run生成compilition make编译 seal生成chunk emit输出 done完成
4. 输出：把文件写入到系统中