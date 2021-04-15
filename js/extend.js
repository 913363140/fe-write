// // 原型链继承
// Child.prototype = new Parent()

// // 构造函数继承
// function Child() {
//   Parent.call(this)
// }

// // 组合继承
// function Child(name, age) {
//   Parent.call(this, name)
// }

// Child.prototye = new Parent()
// Child.prototye.constructor = Child

// // 原型式继承
// Child = Object.create(Parent)

// // 寄生式继承
// function extend_create(Parent) {
//   let Child = Object.create(parent)
//   Child.say = function() {
//     console.log('hello')
//   }
//   return Child
// }

// // 组合寄生式继承
// function extend(Child, Parent) {
//   Child.prototype = Object.create(Parent.prototype)
//   Child.prototype.constructor =  Child
// }


// function Parent (name = 'parent') {
//   this.name = name
// }
// Parent.prototype.say = function () {console.log(this.name)}

// let p = new Parent('lala')
// console.log('Parent :>> ', Parent)
// console.log('Prototype :>> ', Parent.prototype)
// console.log('Construcotr :>> ', Parent.prototype.constructor)

// console.log('p :>> ', p)
// console.log('Prototype :>> ', p.__proto__)
// console.log('Construcotr :>> ', p.__proto__.constructor)


// // 继承要干啥
// // 1. 构造函数的方法 Child () { Parent.call(this) }
// // 2. 原型链上的方法 Child.prototype = Object.create(Parent.prototye)

// function Child() {
//   // 寄生上
//   Parent.call(this)
// }

// function extend(Child, Parent) {
//   // 原型式继承
//   Child.prototype = Object.create(Parent.prototype)
//   Child.prototype.constructor = Child
// }

// 使用箭头函数
var circle = {
    radius: 10,
    outerDiameter() {
        var innerDiameter = () => {
            console.log(2 * this.radius);
        };
        innerDiameter();
    }
};

fn = circle.outerDiameter
fn(); // 打印20
