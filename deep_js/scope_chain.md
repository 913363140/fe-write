// from: https://github.com/mqyqingfeng/Blog/issues/6

## 作用域链

### 作用域链
当查找变量的时候，会先从当前的上下文变量中查找，如果没有查到会从父级上下文变量中查找，直到查到全局对象。这样由多个执行上下文的变量对象构成的链表就叫**作用域链**

### 函数创建
函数的作用域在函数定义的时候就确定了。

这是因为函数内部有一个属性[[scope]], 当函数创建的时候，就会保存所有父层变量对象到其中，[[scope]]不代表完整的作用域链

### 函数激活
当函数激活时，进入函数上下文，创建VO/AO后，就会将活动对象添加到作用链的前端。

### 函数执行过程
以下面的例子为例，结合着之前讲的变量对象和执行上下文栈，我们来总结一下函数执行上下文中作用域链和变量对象的创建过程：
```
  var scope = 'global scope'
  function checkscope() {
    var scope2 = 'local scope'
    return scope2
  }
  checkscope()
```
执行过程如下

1. checkscope 函数被创建，保存作用域链到 内部属性[[scope]]
```
checkscope.[[scope]] = [
  globalContext.VO
]
```
2. 执行checkscope函数，创建checkscope函数执行上下文，checkscope函数执行上下文被压入执行上下文栈
```
ECStack = [
  checkscopeContext,
  globalContext
]
```
3. checkscope 函数并不立刻执行，开始做准备工作，第一步：复制[[scope]]属性创建作用域链
```
checkscopeContext = [
  scope: checkscope.[[scope]]
]
```
4. 第二步：用Arguments创建活动对象，随后初始化活动对象，加入形参、函数声明、变量声明
```
checkscopeContext = {
  AO: {
    arguments: {
      length: 0
    },
    scope2: undefined
  },
  scope: checkscope.[[scope]]
}
```
5. 第三部：将活动对象压入checkscope作用域链顶端
```
checkscopeContext = [
  AO: {
    arguments: {
      length: 0
    },
    scope2: undefined
  },
  scope: [AO, [[scope]]]
]
```
6. 准备工作做完，开始执行函数，随着函数的执行，修改AO的属性值
```
checkscopeContext = {
  AO: {
    arguments: {
      length:0
    },
    scope2: 'local scope'
  }
  scope: [AO, [[scope]]]
}
```
7. 查到scope2的值，返回后函数执行完毕，函数上下文从执行上下文中弹出
```
ECStack = [
  globalContext
]
```