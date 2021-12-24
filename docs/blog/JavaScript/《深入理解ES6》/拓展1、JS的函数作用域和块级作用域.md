


## 拓展1：JS的函数作用域和块级作用域

在 JS 中我们经常能听到两种作用域，`函数作用域`和`块级作用域` 

* 函数作用域是在 ES6 之前就有的，函数内声明的变量只能在该函数内被访问到（ps：函数A里面有个函数B，那也是在函数A里面）

* 块级作用域是 ES6 的新特性，配合 let 和 const，只在`函数作用域`或者`花括号 {} `内生效，也叫`词法作用域`

**有函数作用域肯定有块级作用域，但是有块级作用域不一定有函数作用域，因为也可能是花括号 {} 生成的**



这两个作用域经常和我们的三个关键词一起出现，`var` 、`let`、`const`

`var` 声明的变量不会生成块级作用域

`let`、`const`声明的变量会生成块级作用域



### 函数作用域

先看看函数作用域

```javascript
function sayHello() {
    var sayValue = 'Hello World'
    console.log(sayValue + '1') // Hello World1
    function justSayHello() {
        console.log(sayValue + '2') // Hello World2
    }
    justSayHello()
}
sayHello()
console.log(sayVaule + '3') // sayVaule is not defined
```

在函数体内（花括号内）声明的变量无法在外面被访问到（3）

### 块级作用域（词法作用域）

再看看块级作用域（词法作用域）

块级作用域存在于两个地方：

* 函数作用域
* 花括号 {} 内

函数作用域刚刚说过了，在函数体内声明的变量无法被外层访问到

来看下`花括号 {}`

**if、for循环、while循环等语句中，花括号区域就是块级作用域，但是变量必须使用`let`、`const`声明，不然无法形成块级作用域**



``` javascript
// 使用 var 声明
if(true) {
    var sayValue = 'Hello var'
}
console.log(sayValue) // Hello var， 没有形成块级作用域

// 使用 let、const声明
if(true) {
    let sayValue = 'Hello let'
}
console.log(sayValue) // sayValue is not defined，形成块级作用域
```



### 总结

所以，区分函数作用域和块级作用域很简单，看变量用什么声明的：

* var 声明的，该变量所处作用域就为函数作用域
* let、const 声明的，处于块级作用域，即：函数体内、花括号 {} 内声明的变量都不能被外部访问

