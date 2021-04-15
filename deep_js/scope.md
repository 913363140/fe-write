// from: https://github.com/mqyqingfeng/Blog/issues/3
## 作用域和动态作用域

### 作用域
**作用域**是指程序定义变量的区域

作用域规定了如何查找变量，也就确定了执行上下文对变量的访问权限

JavaScript 采用词法作用域（lexical scoping），也就是静态作用域

### 静态作用域与动态作用域
因为JavaScript采用词法作用域，函数的作用域在函数定义的时候就决定了

而与词法作用域相对的动态作用域，函数的作用域是在函数调用的时候才确定的

```
  var value = 1
  function foo() {
    console.log(value)
  }
  function bar() {
    var value = 2
    foo()
  }
  
  bar() // 1
```

### 思考题

```
var scope = 'global scope'
function checkscope() {
  var scope = 'local scope'
  function f() {
    return scope
  }
  return f()
}
checkscope() // 'local scope'
```

```
var scope = 'global scope'
function checkscope() {
  var scope = 'local scope'
  function f() {
    return scope
  }
  return f
}
checkscope()() // 'local scope'
```

JavaScript 函数的执行用到了作用域链，这个作用域链是在函数定义的时候创建的。嵌套的函数 f() 定义在这个作用域链里，其中的变量 scope 一定是局部变量，不管何时何地执行函数 f()，这种绑定在执行 f() 时依然有效。