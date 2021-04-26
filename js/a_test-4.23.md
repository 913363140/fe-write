*from: kuaishou laotie*

## 基础

#### 作用域
- 词法作用域（JS）
- 动态作用域（Java）

**词法作用域**：方法定义的时候就确定了作用域，跟作用域相关的还有作用域链，一层一层的向上查找变量的过程就是作用域链
**动态作用域**：作用域是在代码执行的时候才确定的

#### 原型链
面向对象的三大特征：封装、继承、多态

原型链就是为了满足**继承**特征

每个新创建的对象的都有一个__proto__属性指向该对象的原型，该原型有一个constructor属性指向创建该对象得的构造函数。构造函数的prototype属性指向该原型。原型的__proto__属性指向该原型的原型，直到Object指向null，这个过程就叫做**原型链**

#### 正则
实现一个千分位
``` js
function kiloFormat(num){
  return num && num.toString().repalce(/\d+/, s => s.replace(/(\d)(?=(\d{3})+$)/, '$1'))
}
```

`.`  匹配换行符意外的任意字符
`\d` 匹配数字
`\D` 非整数
`\s` 匹配任意的空白字符
`\S` 非空格字符
`\w` 字母、数字、下划线、汉字
`\W` 非字符的任意空格
`\b` 匹配单词的开始或结束
`^`  匹配字符串的开始
`$`  匹配字符串的结束

#### 样式
> 水平垂直居中
1. 绝对定位 + margin: auto (宽高未知)
2. 绝对定位 + 负margin （宽高已知）
3. 绝对定位 + transfrom （宽高未知）
4. flex、grid
5. tabel-cell: text-align: center; vertical-align: center;

#### 数组操作
slice: 切片数组，不影响原数组，返回新数组
splice: 切片数组，影响元数组，返回新数组
reduce: 累加器
some: 有一个满足的就为true
every: 全部都要满足

## 编程

#### Promise

#### 动态规划

#### 字符串

#### 链表

## 应用

#### web性能优化

#### 微前端

- single spa
- qiankun
