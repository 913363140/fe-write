// from: https://github.com/mqyqingfeng/Blog/issues/5

## 变量对象 Variable Object

### 前言
执行上下文中说到，当JavaScript执行一段可执行代码的时候，会创建对应的执行上下文（execution context）

每个执行上下文，都有三个重要的属性：
1. 变量对象: Variable Object, VO
2. 作用域链: Scope Chain
3. this

### 变量对象
**变量对象**是与执行上下文相关的数据作用域，存储在上下文中定义的变量和函数

因为不同执行上下文的变量对象略有不同，所以简单了解一下全局上下文的变量对象和函数上下文的变量对象

### 全局上下文
全局上下文的变量对象就是全局对象本身。

1. 可以通过this引用，在客户端JavaScript中，全局对象就是Window对象
2. 全局对象是由Object构造函数实例化的一个对象
3. 预定了一堆属性
4. 作为全局变量的宿主
5. 客户端的Javscript中，全局对象有window属性指向自身  

### 函数上下文

在函数上下文中，用活动对象（activation object, AO）来表示变量对象

活动对象和变量对象其实是一个东西，只是变量对象是规范上或者引擎上实现的，不可在JavaScript环境中访问，只有当进入一个执行上下文中，这个执行上下文的变量对象才会被激活，所以叫Activation Object, 只有被激活的变量的对象才能被访问。

活动对象是在进入函数上下文时刻被创建的，它通过函数的arguments属性初始化，arguments 属性是Arguments对象

### 执行过程
执行上下文的代码会分成两个过成处理：分析和执行
   1. 进入执行上下文
   2. 代码执行

### 进入执行上下文
当进入执行上下文时，这时候还没有执行代码

变量对象会包括：
  1. 函数所有的形参
  2. 函数声明
  3. 变量声明

### 简述
1. 全局上下文的变量对象初始化是全局对象
2. 函数上下文的变量对象初始化只包括Arguments对象
3. 在进入执行上下文时会给变量添加形参、函数声明、变量声明等初始值属性
4. 在代码执行阶段，会再次修改变量对象的属性值