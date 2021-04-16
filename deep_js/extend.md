// from: https://github.com/mqyqingfeng/Blog/issues/16

## 继承的多重实现方式优缺点

#### 写在前面
本文主要是学习[冴羽](https://github.com/mqyqingfeng/Blog/issues/16)的记录文章，来巩固自己的掌握程度

#### 1. 原型链继承
```
function Parent() {
  this.name = 'lyc'
}

Parent.prototype.getName = function() {
  console.log(this.name)
}

function Child() {}

Child.prototype = new Parent()

var child = new Child()

console.log(child.getName()) // 'lyc'
```

**问题：**
1. 引用类型的属性被所有实例共享
2. 在创建Child实例的时候不能向Parent传参


#### 2. 构造函数继承
```
function Parent(){
  this.name = ['lyc', 'skj']
}

function Child() {
  Parent.call(this)
}

var child = new Child()
child.name.push('zyr')
console.log(this.name) // ['lyc', 'skj', 'zyr']

var child2 = new Child()
console.log(child2.name); // ['lyc', 'skj']
```

**优点：**
1. 避免了引用类型的属性被共享
2. 可以在Child中向Parent传参

**缺点：**
1. 方法都定义在构造函数中，每次创建实例都会创建一遍方法

####  3. 组合继承
原型继承和构造函数继承一起
```
function Parent(name) {
  this.name = name
  this.colors = ['red', 'blue', 'green']
}

Parent.prototype.getName = function() {
  console.log(this.name)
}

function Child(name, age) {
  Parent.call(this, name)
  this.age = age
}

Child.prototype = new Parent()
Child.prototype.constructor = Child

var child1 = new Child('kevin', '18')

child1.colors.push('black')

console.log(child1.name) // kevin
console.log(child1.age) // 18
console.log(child1.colors) // ['red', 'blud', 'green', 'black']

var child2 = new Child('daisy', '20')

console.log(child2.name) // daisy
console.log(child2.age) // 20
console.log(child2.colors) // ['red', 'blud', 'green']
```

**优点**： 融合原型继承和构造函数继承的有点

#### 4. 原型式继承

```
function createObj(0) {
  function f(){}
  f.prototype = o
  return new f()
}
```
就是ES5 Object.create的模拟实现，将传入的对象作为创建的对象的原型

缺点：
包含引用类型的属性值始终会共享响应的值，这点和原型链继承一样

```
var Person = {
  name: 'kevin',
  friends: ['daisy', 'kelly']
}

var person1 = createObj(Person)
var person2 = createObj(Person)

person1.name = 'person1';
console.log(person2.name); // kevin

person1.firends.push('taylor');
console.log(person2.friends); // ["daisy", "kelly", "taylor"]

```

#### 5. 寄生式继承
创建一个仅用于封装继承过程的函数，该函数在内部以某种形式来增强对象，最后返回对象

```
function createObj(o) {
  var clone = Object.create(o)
  clone.sayName = function() {
    console.log('hi')
  }
  return clone
}
```

**缺点：** 跟借用构造函数模式一样，每次创建对象都会创建一遍方法


#### 6. 组合寄生式

```
function object(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

function prototype(child, parent) {
    var prototype = object(parent.prototype);
    prototype.constructor = child;
    child.prototype = prototype;
}

// 当我们使用的时候：
prototype(Child, Parent);
```