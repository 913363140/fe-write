// from: https://github.com/mqyqingfeng/Blog/issues/2

## 原型链

#### 什么是原型
每一个JS对象（除null）在创建的时候就会与之关联另一个对象，这个对象就是我们所说的原型，每个对象都会从原型‘继承’属性
```
  function Person() {}
  Person.prototye.name = 'lyc'
  var person1 = new Person()
  var person2 = new Person()
  console.log(person1.name) // lyc
  console.log(person2.name) // lyc
```

#### __proto__
每一个JS对象（除null）都有一个属性 __proto__, 该属性指向该对象的原型
```
  function Person() {}
  var person = new Person()
  console.log(person.__proto__ === Person.prototype) // true
```

#### constructor
每个原型都有一个constructor指向构造函数
```
  function Person() {}
  var person = new Person()
  console.log(Person.prototype.constructor === Person) // true
```

#### 实例与原型
当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还找不到，就回去原型的原型中查询，一直到最顶层null

#### 原型链
图中相关关联的原型之前的蓝色的线就是原型链。
![原型链](https://tva1.sinaimg.cn/large/008eGmZEly1gpje9gapxkj30mh0abaa1.jpg)
