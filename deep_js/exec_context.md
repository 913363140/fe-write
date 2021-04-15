// from: https://github.com/mqyqingfeng/Blog/issues/4
## JS执行上下文栈


#### 执行上下文栈
函数执行的时候, JavaScript 引擎创建了 执行上下文栈（Exeuction Context Stack, ECS）来管理执行上下文。

```
ECStack = []
```
JavaScript 要解释执行代码的时候，首先遇到的就是全局代码，用globalContext表示，所有ECStack底部永远有一个全局上下文。

```
ECStack = [
  globalContext
]
```

如下代码的执行上下文栈分析
```
function foo3() {
  console.log('foo3')
}
function foo2() {
  foo3()
}
function foo1() {
  foo2()
}

foo1()
```
当执行一个函数的时候，就会创建执行上下文栈，并且压入执行上下文栈，当函数执行完毕的时候，就会将函数的执行上下文从栈中弹出。

```
// 伪代码
// foo1
ECStack.push(<foo1> functionContext)

// foo1 中调用了 foo2
ECStack.push(<foo2> functionContext)

// foo2 中调用了 foo3
ECStack.push(<foo3> functionContext)

// foo3 执行完毕
ECStack.pop()

// foo2 执行完毕
ECStack.pop()

// foo1 执行完毕
ECStack.pop()

// javascript接着执行下面的代码，但是ECStack底层永远有个globalContext
```